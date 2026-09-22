from __future__ import annotations

import json
import os
import re
import sys
import tempfile
import urllib.request
import zipfile
from io import BytesIO
from pathlib import Path
from typing import Callable
from xml.etree import ElementTree


SOURCE_URLS: dict[int, str] = {
    2021: "https://www.vcaa.vic.edu.au/sites/default/files/Documents/statistics/2021/2021SeniorSecondaryCompletionAndAchievementInformation.xlsx",
    2022: "https://www.vcaa.vic.edu.au/sites/default/files/Documents/statistics/2022/2022SeniorSecondaryCompletionAndAchievementInformation.xlsx",
    2023: "https://www.vcaa.vic.edu.au/sites/default/files/Documents/statistics/2023/2023SeniorSecondaryCompletionAndAchievementInformation.xlsx",
    2024: "https://www.vcaa.vic.edu.au/sites/default/files/Documents/statistics/2024/2024SeniorSecondaryCompletionAndAchievementInformation.xlsx",
    2025: "https://www.vcaa.vic.edu.au/sites/default/files/2025-12/2025-SeniorSecondaryCompletionandAchievementInformation.xlsx",
}
YEARS = tuple(SOURCE_URLS)
XML_NAMESPACE = "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
NAMESPACES = {"main": XML_NAMESPACE}
CELL_REFERENCE_PATTERN = re.compile(r"([A-Z]+)")
WHITESPACE_PATTERN = re.compile(r"\s+")
KEY_PATTERN = re.compile(r"[^a-z0-9]")


def normalize_text(value: object) -> str:
    return WHITESPACE_PATTERN.sub(" ", str(value)).strip()


def normalize_key(value: object) -> str:
    return KEY_PATTERN.sub("", normalize_text(value).casefold())


def school_key(name: str, locality: str) -> str:
    return f"{normalize_key(name)}::{normalize_key(locality)}"


def column_index(reference: str) -> int:
    match = CELL_REFERENCE_PATTERN.match(reference)
    if match is None:
        raise ValueError(f"Invalid Excel cell reference: {reference}")

    index = 0
    for character in match.group(1):
        index = index * 26 + ord(character) - ord("A") + 1
    return index - 1


def read_shared_strings(archive: zipfile.ZipFile) -> list[str]:
    try:
        document = ElementTree.fromstring(archive.read("xl/sharedStrings.xml"))
    except KeyError:
        return []

    return [
        "".join(text.text or "" for text in item.findall(".//main:t", NAMESPACES))
        for item in document.findall("main:si", NAMESPACES)
    ]


def read_cell(cell: ElementTree.Element, shared_strings: list[str]) -> str:
    cell_type = cell.attrib.get("t")
    if cell_type == "inlineStr":
        return "".join(
            text.text or "" for text in cell.findall(".//main:t", NAMESPACES)
        )

    value = cell.find("main:v", NAMESPACES)
    if value is None or value.text is None:
        return ""
    if cell_type == "s":
        return shared_strings[int(value.text)]
    return value.text


def read_first_worksheet(workbook_bytes: bytes) -> list[dict[int, str]]:
    with zipfile.ZipFile(BytesIO(workbook_bytes)) as archive:
        shared_strings = read_shared_strings(archive)
        worksheet = ElementTree.fromstring(archive.read("xl/worksheets/sheet1.xml"))

    rows: list[dict[int, str]] = []
    for row in worksheet.findall(".//main:sheetData/main:row", NAMESPACES):
        values: dict[int, str] = {}
        for cell in row.findall("main:c", NAMESPACES):
            reference = cell.attrib.get("r", "")
            values[column_index(reference)] = normalize_text(
                read_cell(cell, shared_strings)
            )
        rows.append(values)
    return rows


def find_header_row(rows: list[dict[int, str]]) -> tuple[int, dict[int, str]]:
    for row_index, row in enumerate(rows):
        if "Median VCE study score" in row.values():
            return row_index, row
    raise ValueError("The VCAA workbook does not contain the median study score header.")


def find_column(headers: dict[int, str], predicate: Callable[[str], bool]) -> int:
    matches = [index for index, header in headers.items() if predicate(header)]
    if len(matches) != 1:
        raise ValueError(f"Expected one matching column, found {len(matches)}.")
    return matches[0]


def parse_number(value: str) -> float | None:
    normalized = normalize_text(value).replace(",", "")
    if normalized in {"", "-", "‐", "I/D", "< 4"}:
        return None
    try:
        return float(normalized)
    except ValueError as error:
        raise ValueError(f"Expected a numeric VCAA value, received {value!r}.") from error


def parse_integer(value: str) -> int | None:
    parsed = parse_number(value)
    if parsed is None:
        return None
    if not parsed.is_integer():
        raise ValueError(f"Expected a whole-number VCAA value, received {value!r}.")
    return int(parsed)


def download_workbook(url: str) -> bytes:
    request = urllib.request.Request(
        url,
        headers={"User-Agent": "VCEcalc school data refresh"},
    )
    with urllib.request.urlopen(request, timeout=60) as response:
        workbook_bytes = response.read()
    if not workbook_bytes.startswith(b"PK"):
        raise ValueError(f"VCAA source did not return an XLSX workbook: {url}")
    return workbook_bytes


def parse_school_records(workbook_bytes: bytes) -> dict[str, dict[str, object]]:
    rows = read_first_worksheet(workbook_bytes)
    header_index, headers = find_header_row(rows)
    school_column = find_column(headers, lambda value: value == "School")
    locality_column = find_column(headers, lambda value: value == "Locality")
    median_column = find_column(
        headers, lambda value: value == "Median VCE study score"
    )
    scores_above_40_column = find_column(
        headers, lambda value: value == "Percentage of study scores of 40 and over"
    )
    cohort_column = find_column(
        headers,
        lambda value: value.startswith(
            "Number of students enrolled in at least one VCE"
        ),
    )

    records: dict[str, dict[str, object]] = {}
    for row in rows[header_index + 1 :]:
        name = normalize_text(row.get(school_column, ""))
        if not name:
            continue
        locality = normalize_text(row.get(locality_column, ""))
        key = school_key(name, locality)
        if key in records:
            raise ValueError(f"Duplicate VCAA school record: {name}, {locality}")
        records[key] = {
            "name": name,
            "locality": locality,
            "median": parse_number(row.get(median_column, "")),
            "scoresAbove40Percent": parse_number(
                row.get(scores_above_40_column, "")
            ),
            "cohortSize": parse_integer(row.get(cohort_column, "")),
        }
    return records


def build_dataset() -> list[dict[str, object]]:
    records_by_year = {
        year: parse_school_records(download_workbook(url))
        for year, url in SOURCE_URLS.items()
    }
    current_records = records_by_year[2025]
    if len(current_records) < 600:
        raise ValueError(
            f"Expected at least 600 VCAA school records, found {len(current_records)}."
        )

    dataset: list[dict[str, object]] = []
    for key, current in current_records.items():
        median_history = {
            str(year): (
                records_by_year[year].get(key, {}).get("median")
                if key in records_by_year[year]
                else None
            )
            for year in YEARS
        }
        dataset.append(
            {
                "name": current["name"],
                "locality": current["locality"],
                "medianStudyScores": median_history,
                "scoresAbove40Percent": current["scoresAbove40Percent"],
                "cohortSize": current["cohortSize"],
            }
        )

    return sorted(
        dataset,
        key=lambda school: (
            str(school["name"]).casefold(),
            str(school["locality"]).casefold(),
        ),
    )


def main() -> None:
    repository_root = Path(__file__).resolve().parent.parent
    output_path = (
        Path(sys.argv[1]).resolve()
        if len(sys.argv) > 1
        else repository_root / "app" / "data" / "schools.json"
    )
    output_path.parent.mkdir(parents=True, exist_ok=True)
    dataset = build_dataset()

    file_descriptor, temporary_path = tempfile.mkstemp(
        prefix="schools-", suffix=".json", dir=output_path.parent
    )
    try:
        with os.fdopen(file_descriptor, "w", encoding="utf-8", newline="\n") as file:
            json.dump(dataset, file, ensure_ascii=False, indent=2)
            file.write("\n")
        os.replace(temporary_path, output_path)
    except BaseException:
        if os.path.exists(temporary_path):
            os.unlink(temporary_path)
        raise

    numeric_medians = sum(
        school["medianStudyScores"]["2025"] is not None for school in dataset
    )
    print(
        f"Saved {len(dataset)} schools with {numeric_medians} published 2025 medians "
        f"to {output_path}"
    )


if __name__ == "__main__":
    main()
