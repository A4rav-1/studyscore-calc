"""Build anonymised rank-one school/subject anchors from VCAA's workbook."""

from __future__ import annotations

import argparse
import json
import re
import unicodedata
from pathlib import Path

from openpyxl import load_workbook


SOURCE_SUBJECT_BY_CODE: dict[str, str] = {
    "AC": "Accounting",
    "AH": "Agricultural and Horticultural Studies",
    "AL03": "Algorithmics (HESS)",
    "IT02": "Applied Computing: Data Analytics",
    "IT03": "Applied Computing: Software Development",
    "AT": "Art Creative Practice",
    "SA": "Art Making and Exhibiting",
    "BI": "Biology",
    "BM": "Business Management",
    "CH": "Chemistry",
    "CC": "Classical Studies",
    "DA": "Dance",
    "DR": "Drama",
    "EC": "Economics",
    "EN": "English",
    "EF": "English as an Additional Language",
    "EG": "English Language",
    "EV": "Environmental Science",
    "XI03": "Extended Investigation",
    "FT": "Food Studies",
    "GE": "Geography",
    "HH": "Health and Human Development",
    "HI17": "Ancient History",
    "HA": "Australian History",
    "HR": "History Revolutions",
    "LS": "Legal Studies",
    "LI": "Literature",
    "MA10": "Foundation Mathematics",
    "NF": "General Mathematics",
    "NJ": "Mathematical Methods",
    "NS": "Specialist Mathematics",
    "ME": "Media",
    "OS": "Outdoor and Environmental Studies",
    "PL": "Philosophy",
    "PE": "Physical Education",
    "PH": "Physics",
    "PS06": "Politics",
    "DT": "Product Design and Technologies",
    "PY": "Psychology",
    "RS": "Religion and Society",
    "SO03": "Sociology",
    "SE03": "Systems Engineering",
    "TS": "Theatre Studies",
    "VC": "Visual Communication Design",
    "AR": "Languages:Arabic",
    "CN": "Languages:Chinese First Language",
    "LO57": "Languages:Chinese Culture and Society",
    "CK": "Languages:Chinese Second Language Advanced",
    "CL": "Languages:Chinese Second Language",
    "FR": "Languages:French",
    "GN": "Languages:German",
    "MG": "Languages:Greek",
    "HI": "Languages:Hindi",
    "IX": "Languages:Indonesian Second Language",
    "IL": "Languages:Italian",
    "JS": "Languages:Japanese Second Language",
    "KS": "Languages:Korean Second Language",
    "LA": "Languages:Latin",
    "PN": "Languages:Persian",
    "LO49": "Languages:Punjabi",
    "RU": "Languages:Russian",
    "SP": "Languages:Spanish",
    "TU": "Languages:Turkish",
    "LO31": "Languages:Vietnamese Second Language",
}

MANUAL_SCHOOL_SOURCES: dict[str, str] = {
    "Haileybury College (Girls)": "Haileybury Girls College, Keysborough",
    "Camberwell Girls Grammar School": "Camberwell Anglican Girls Grammar School, Canterbury",
    "St Kevin's College": "St Kevin's College Toorak",
    "The King David School": "The King David School - Senior School, Armadale",
    "Yesodei HaTorah College": "Yesodei Hatorah College - Ormond Campus, Brighton",
    "Victorian College of the Arts": "Victorian College of the Arts Secondary School, Southbank",
    "Caulfield Grammar School,ST KILDA EAST": "Caulfield Grammar School - Caulfield Campus, St Kilda East",
    "Ivanhoe Grammar School,Doreen": "Ivanhoe Grammar School - Plenty Campus, Mernda",
    "Ivanhoe Grammar School,Ivanhoe": "Ivanhoe Grammar School",
}


def normalise_school_name(value: str, include_locality: bool = True) -> str:
    ascii_value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode("ascii")
    comparable_value = ascii_value if include_locality else ascii_value.split(",")[0]
    return re.sub(r"[^a-z0-9]+", "", comparable_value.lower())


def build_rank_one_scores(workbook_path: Path, schools_path: Path) -> tuple[dict[str, dict[str, int]], list[str]]:
    schools = json.loads(schools_path.read_text(encoding="utf-8"))
    worksheet = load_workbook(workbook_path, read_only=True, data_only=True).active
    source_rows = list(worksheet.iter_rows(values_only=True))
    source_schools = {school for _, school, _, _ in source_rows if school}
    source_schools_by_full_name = {
        normalise_school_name(school): school for school in source_schools
    }
    source_schools_by_base_name = {
        normalise_school_name(school, include_locality=False): school
        for school in source_schools
    }
    source_subject_to_code = {
        source_subject: code for code, source_subject in SOURCE_SUBJECT_BY_CODE.items()
    }

    anchors: dict[str, dict[str, int]] = {}
    missing_schools: list[str] = []
    for local_school in schools:
        local_school_name = local_school["name"]
        source_school_name = MANUAL_SCHOOL_SOURCES.get(local_school_name)
        if source_school_name is None:
            source_school_name = source_schools_by_full_name.get(
                normalise_school_name(local_school_name)
            )
        if source_school_name is None:
            source_school_name = source_schools_by_base_name.get(
                normalise_school_name(local_school_name, include_locality=False)
            )
        if source_school_name is None:
            missing_schools.append(local_school_name)
            continue

        school_anchors: dict[str, int] = {}
        for _, row_school_name, source_subject, study_score in source_rows:
            if row_school_name != source_school_name:
                continue
            subject_code = source_subject_to_code.get(source_subject)
            if subject_code is None:
                continue
            school_anchors[subject_code] = max(school_anchors.get(subject_code, 0), int(study_score))

        if school_anchors:
            anchors[local_school_name] = dict(sorted(school_anchors.items()))

    return dict(sorted(anchors.items())), missing_schools


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("workbook", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--schools", type=Path, default=Path("app/data/schools.json"))
    arguments = parser.parse_args()

    anchors, missing_schools = build_rank_one_scores(arguments.workbook, arguments.schools)
    source = "https://www.vcaa.vic.edu.au/sites/default/files/2026-02/2025StudentData.xlsx"
    output = f'''/**
 * Highest published 2025 VCE study score for each bundled school and subject.
 * Source: {source}
 *
 * The VCAA workbook only lists published 40+ results. These anchors contain no
 * student names and are used as rank-one calibration points, never as a score cap.
 */
export const HONOUR_ROLL_2025_RANK_ONE_SCORES: Readonly<
  Record<string, Readonly<Record<string, number>>>
> = {json.dumps(anchors, ensure_ascii=False, indent=2, sort_keys=True)};

export function getHonourRollRankOneStudyScore(
  schoolName: string,
  subjectCode: string,
): number | null {{
  return HONOUR_ROLL_2025_RANK_ONE_SCORES[schoolName]?.[subjectCode] ?? null;
}}
'''
    arguments.output.write_text(output, encoding="utf-8", newline="\n")
    print(f"Anchored schools: {len(anchors)}")
    print(f"Subject anchors: {sum(len(values) for values in anchors.values())}")
    print("Schools without published anchors:", ", ".join(missing_schools))
    print("Mazenod:", anchors.get("Mazenod College"))


if __name__ == "__main__":
    main()
