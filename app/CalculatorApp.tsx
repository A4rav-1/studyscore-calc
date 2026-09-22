"use client";

import {
  ArrowRight,
  BookOpen,
  Calculator,
  Check,
  ChevronDown,
  GraduationCap,
  Plus,
  RotateCcw,
  School,
  Trash2,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  getHonourRollSchoolName,
  getHonourRollStudyScores,
  HONOUR_ROLL_2025_SCHOOL_OPTIONS,
} from "./data/honourRoll2025";
import schoolsJson from "./data/schools.json";
import { SUBJECT_BY_CODE, SUBJECTS } from "./data/subjects";
import {
  calculateAtar,
  calculateRelativeStudyScore,
  calculateScaledStudyScore,
  calculateStudyScore,
  groupAtarContributions,
  UNIVERSITY_EXTENSION_INCREMENTS,
  type AtarContributionGroup,
  type AtarResult,
  type UniversityExtensionIncrement,
} from "./lib/calculator";
import {
  getStudyInputIssues,
  hasCompletedAtarScoreEntry,
  parseExamMark,
} from "./lib/input";
import {
  calculateSchoolMedianTrend,
  type MedianStudyScoreHistory,
} from "./lib/schoolTrend";
import { formatRelativeStudyScore } from "./lib/studyScoreDisplay";

type CalculatorView = "study" | "atar";

type SchoolRecord = {
  name: string;
  selectionLabel: string;
  locality: string;
  medianStudyScore: number | null;
  reportedMedianStudyScore: number | null;
  medianStudyScoreAnnualChange: number | null;
  usesImprovementAdjustment: boolean;
  scoresAbove40Percent: number | null;
  cohortSize: number | null;
  honourRollSchoolName: string | null;
};

type SchoolStatisticsRecord = {
  name: string;
  locality: string;
  medianStudyScores: MedianStudyScoreHistory;
  scoresAbove40Percent: number | null;
  cohortSize: number | null;
};

type AtarRow = {
  id: string;
  subjectCode: string;
  rawStudyScore: string;
};

type AtarCalculationState = {
  result: AtarResult | null;
  error: string | null;
};

type AtarRowGroupView = {
  title: AtarContributionGroup["title"];
  rows: readonly AtarRow[];
};

type AtarRowGroupSnapshot = {
  title: AtarContributionGroup["title"];
  rowIds: readonly string[];
};

type StudyFormState = {
  schoolName: string;
  subjectCode: string;
  unit3Rank: string;
  unit3CohortSize: string;
  unit4Rank: string;
  unit4CohortSize: string;
  examMarks: readonly string[];
};

const schoolStatistics = schoolsJson as readonly SchoolStatisticsRecord[];
const duplicateSchoolNames = new Set(
  schoolStatistics
    .map((school) => school.name)
    .filter(
      (name, index, names) =>
        names.findIndex((candidate) => candidate === name) !== index,
    ),
);
const officialSchools: readonly SchoolRecord[] = schoolStatistics.map((school) => {
  const trend = calculateSchoolMedianTrend(school.medianStudyScores);
  return {
    name: school.name,
    selectionLabel: duplicateSchoolNames.has(school.name)
      ? `${school.name} (${school.locality})`
      : school.name,
    locality: school.locality,
    medianStudyScore: trend.effectiveMedianStudyScore,
    reportedMedianStudyScore: school.medianStudyScores["2025"],
    medianStudyScoreAnnualChange: trend.annualChange,
    usesImprovementAdjustment: trend.usesImprovementAdjustment,
    scoresAbove40Percent: school.scoresAbove40Percent,
    cohortSize: school.cohortSize,
    honourRollSchoolName: getHonourRollSchoolName(school.name, school.locality),
  };
});
const schoolStatisticsHonourRollNames = new Set(
  officialSchools
    .map((school) => school.honourRollSchoolName)
    .filter((schoolName): schoolName is string => schoolName !== null),
);
const schools: readonly SchoolRecord[] = [
  ...officialSchools,
  ...HONOUR_ROLL_2025_SCHOOL_OPTIONS
    .filter((school) => !schoolStatisticsHonourRollNames.has(school.name))
    .map((school) => ({
      name: school.name,
      selectionLabel: school.name,
      locality: school.locality || "VCAA 2025 Honour Roll",
      medianStudyScore: null,
      reportedMedianStudyScore: null,
      medianStudyScoreAnnualChange: null,
      usesImprovementAdjustment: false,
      scoresAbove40Percent: null,
      cohortSize: null,
      honourRollSchoolName: school.name,
    })),
];
const MINIMUM_ATAR_SUBJECTS = 4;
const MAXIMUM_ATAR_SUBJECTS = 7;
const LEGACY_PLACEHOLDER_ATAR_ROWS: readonly AtarRow[] = [
  { id: "subject-1", subjectCode: "EN", rawStudyScore: "" },
  { id: "subject-2", subjectCode: "NJ", rawStudyScore: "" },
  { id: "subject-3", subjectCode: "BI", rawStudyScore: "" },
  { id: "subject-4", subjectCode: "CH", rawStudyScore: "" },
];
const DEFAULT_ATAR_ROWS: readonly AtarRow[] = [
  { id: "subject-empty-1", subjectCode: "", rawStudyScore: "" },
  { id: "subject-empty-2", subjectCode: "", rawStudyScore: "" },
  { id: "subject-empty-3", subjectCode: "", rawStudyScore: "" },
  { id: "subject-empty-4", subjectCode: "", rawStudyScore: "" },
];
const ENGLISH_SUBJECTS = SUBJECTS.filter((subject) => subject.englishGroup);
const ATAR_GROUP_DESCRIPTIONS: Readonly<Record<AtarContributionGroup["title"], string>> = {
  "Top 4": "English plus your next best three",
  "Bottom 2": "Best two 10% increments",
  "Other subjects": "Excluded from the aggregate",
};

function createDefaultStudyForm(subjectCode = "EN"): StudyFormState {
  const subject = SUBJECT_BY_CODE.get(subjectCode) ?? SUBJECTS[0];
  return {
    schoolName: "",
    subjectCode: subject.code,
    unit3Rank: "",
    unit3CohortSize: "",
    unit4Rank: "",
    unit4CohortSize: "",
    examMarks: subject.examMaximumMarks.map(() => ""),
  };
}

function parseInteger(value: string): number | null {
  if (value.trim() === "") {
    return null;
  }
  const parsedValue = Number(value);
  return Number.isInteger(parsedValue) ? parsedValue : null;
}

function numberInputValue(value: string): string {
  return value.replace(/[^0-9.]/g, "");
}

function parseUniversityExtensionIncrement(
  value: string | null,
): UniversityExtensionIncrement {
  const parsedValue = Number(value);
  return UNIVERSITY_EXTENSION_INCREMENTS.find(
    (increment) => increment === parsedValue,
  ) ?? 0;
}

function createAtarRow(): AtarRow {
  return {
    id: `subject-${crypto.randomUUID()}`,
    subjectCode: "",
    rawStudyScore: "",
  };
}

function addBlankAtarRows(rows: readonly AtarRow[]): readonly AtarRow[] {
  return [
    ...rows,
    ...Array.from(
      { length: Math.max(0, MINIMUM_ATAR_SUBJECTS - rows.length) },
      (_, index): AtarRow => ({
        id: `subject-empty-${rows.length + index + 1}`,
        subjectCode: "",
        rawStudyScore: "",
      }),
    ),
  ];
}

function isLegacyPlaceholderRows(rows: readonly AtarRow[]): boolean {
  return rows.length === LEGACY_PLACEHOLDER_ATAR_ROWS.length && rows.every(
    (row, index) =>
      row.id === LEGACY_PLACEHOLDER_ATAR_ROWS[index].id &&
      row.subjectCode === LEGACY_PLACEHOLDER_ATAR_ROWS[index].subjectCode &&
      row.rawStudyScore === "",
  );
}

function hasOnlyBlankAtarRows(rows: readonly AtarRow[]): boolean {
  return rows.every(
    (row) => row.subjectCode === "" && row.rawStudyScore === "",
  );
}

function loadStoredAtarRows(): readonly AtarRow[] | null {
  const storedRows = window.localStorage.getItem("vce-atar-subjects");
  if (!storedRows) {
    return null;
  }

  try {
    const parsedRows: unknown = JSON.parse(storedRows);
    if (
      Array.isArray(parsedRows) &&
        parsedRows.length <= MAXIMUM_ATAR_SUBJECTS &&
      parsedRows.every(
        (row) =>
          typeof row === "object" &&
          row !== null &&
          "id" in row &&
          "subjectCode" in row &&
          "rawStudyScore" in row &&
          typeof row.id === "string" &&
          typeof row.subjectCode === "string" &&
          typeof row.rawStudyScore === "string",
      )
    ) {
      const rows = parsedRows as readonly AtarRow[];
      return rows.length === 0 ||
        isLegacyPlaceholderRows(rows) ||
        hasOnlyBlankAtarRows(rows)
        ? DEFAULT_ATAR_ROWS
        : addBlankAtarRows(rows);
    }
    console.error("Saved ATAR subjects have an invalid structure.");
  } catch (error) {
    console.error("Saved ATAR subjects could not be read.", error);
  }

  return null;
}

export function CalculatorApp() {
  const [activeView, setActiveView] = useState<CalculatorView>("study");
  const [isLandingChooserOpen, setIsLandingChooserOpen] = useState(true);
  const [targetAtarRowId, setTargetAtarRowId] = useState<string | null>(null);
  const [studyForm, setStudyForm] = useState<StudyFormState>(() =>
    createDefaultStudyForm(),
  );
  const [atarRows, setAtarRows] = useState<readonly AtarRow[]>(
    DEFAULT_ATAR_ROWS,
  );
  const [activeAtarScoreRowId, setActiveAtarScoreRowId] = useState<string | null>(
    null,
  );
  const [universityExtensionIncrement, setUniversityExtensionIncrement] =
    useState<UniversityExtensionIncrement>(0);
  const lastStableAtarRowGroupsRef = useRef<readonly AtarRowGroupSnapshot[]>([]);
  const lastStableAtarCalculationRef = useRef<AtarCalculationState>({
    result: null,
    error: "Enter at least four study scores",
  });

  useEffect(() => {
    const restoreLocation = () => {
      const searchParameters = new URLSearchParams(window.location.search);
      const nextView = searchParameters.get("calculator") === "atar" ? "atar" : "study";
      const rowId = searchParameters.get("slot");
      setActiveView(nextView);
      setTargetAtarRowId(rowId);

      if (rowId) {
        const rows = loadStoredAtarRows() ?? DEFAULT_ATAR_ROWS;
        const targetRow = rows.find((row) => row.id === rowId);
        if (targetRow) {
          setStudyForm(createDefaultStudyForm(targetRow.subjectCode));
        }
      }
    };

    const restoreTimer = window.setTimeout(() => {
      const storedRows = loadStoredAtarRows();
      if (storedRows) {
        setAtarRows(storedRows);
      }
      setUniversityExtensionIncrement(
        parseUniversityExtensionIncrement(
          window.localStorage.getItem("vce-university-extension-increment"),
        ),
      );
      restoreLocation();
    }, 0);
    window.addEventListener("popstate", restoreLocation);
    return () => {
      window.clearTimeout(restoreTimer);
      window.removeEventListener("popstate", restoreLocation);
    };
  }, []);

  useEffect(() => {
    window.localStorage.setItem("vce-atar-subjects", JSON.stringify(atarRows));
  }, [atarRows]);

  useEffect(() => {
    window.localStorage.setItem(
      "vce-university-extension-increment",
      String(universityExtensionIncrement),
    );
  }, [universityExtensionIncrement]);

  const selectedSubject =
    SUBJECT_BY_CODE.get(studyForm.subjectCode) ?? SUBJECTS[0];
  const selectedSchool =
    schools.find(
      (school) =>
        school.selectionLabel.toLocaleLowerCase() ===
        studyForm.schoolName.trim().toLocaleLowerCase(),
    ) ?? null;
  const honourRollStudyScores =
    selectedSchool === null || selectedSchool.honourRollSchoolName === null
      ? null
      : getHonourRollStudyScores(
          selectedSchool.honourRollSchoolName,
          selectedSubject.code,
        );
  const studyInputIssues = useMemo(
    () =>
      getStudyInputIssues({
        unit3Rank: studyForm.unit3Rank,
        unit3CohortSize: studyForm.unit3CohortSize,
        unit4Rank: studyForm.unit4Rank,
        unit4CohortSize: studyForm.unit4CohortSize,
        examMarks: studyForm.examMarks,
        examMaximumMarks: selectedSubject.examMaximumMarks,
      }),
    [selectedSubject.examMaximumMarks, studyForm],
  );
  const relativeRankStudyScores = useMemo(() => {
    const unit3Rank = parseInteger(studyForm.unit3Rank);
    const unit3CohortSize = parseInteger(studyForm.unit3CohortSize);
    const unit4Rank = parseInteger(studyForm.unit4Rank);
    const unit4CohortSize = parseInteger(studyForm.unit4CohortSize);
    const calculateRelativeScore = (rank: number | null, cohortSize: number | null) =>
      rank === null ||
      cohortSize === null ||
      rank < 1 ||
      cohortSize < 1 ||
      rank > cohortSize
        ? null
        : calculateRelativeStudyScore({
            school: selectedSchool,
            subjectCode: selectedSubject.code,
            honourRollStudyScores,
            rank,
            cohortSize,
          });

    return {
      unit3: calculateRelativeScore(unit3Rank, unit3CohortSize),
      unit4: calculateRelativeScore(unit4Rank, unit4CohortSize),
    };
  }, [honourRollStudyScores, selectedSchool, selectedSubject.code, studyForm]);

  const studyScore = useMemo(() => {
    const unit3Rank = parseInteger(studyForm.unit3Rank);
    const unit3CohortSize = parseInteger(studyForm.unit3CohortSize);
    const unit4Rank = parseInteger(studyForm.unit4Rank);
    const unit4CohortSize = parseInteger(studyForm.unit4CohortSize);
    const examMarks = studyForm.examMarks.map(parseExamMark);

    if (
      studyInputIssues.firstError !== null ||
      unit3Rank === null ||
      unit3CohortSize === null ||
      unit4Rank === null ||
      unit4CohortSize === null ||
      unit3Rank < 1 ||
      unit4Rank < 1 ||
      unit3Rank > unit3CohortSize ||
      unit4Rank > unit4CohortSize ||
      examMarks.some(
        (mark, index) =>
          mark === null || mark > selectedSubject.examMaximumMarks[index],
      )
    ) {
      return null;
    }

    return calculateStudyScore({
      subject: selectedSubject,
      school: selectedSchool,
      honourRollStudyScores,
      unit3Rank,
      unit3CohortSize,
      unit4Rank,
      unit4CohortSize,
      examMarks: examMarks as readonly number[],
    });
  }, [honourRollStudyScores, selectedSchool, selectedSubject, studyForm, studyInputIssues.firstError]);

  const scaledStudyScore =
    studyScore === null
      ? null
      : calculateScaledStudyScore(studyScore, selectedSubject);

  const activeAtarScore = atarRows.find(
    (row) => row.id === activeAtarScoreRowId,
  )?.rawStudyScore;
  const shouldDeferAtarUpdates =
    activeAtarScoreRowId !== null &&
    !hasCompletedAtarScoreEntry(activeAtarScore ?? "");

  const atarCalculation = useMemo<AtarCalculationState>(() => {
    const hasSubjectWithoutScore = atarRows.some(
      (row) => row.subjectCode !== "" && row.rawStudyScore === "",
    );
    const hasScoreWithoutSubject = atarRows.some(
      (row) => row.subjectCode === "" && row.rawStudyScore !== "",
    );

    if (hasSubjectWithoutScore) {
      return { result: null, error: "Enter a study score for every chosen subject" };
    }
    if (hasScoreWithoutSubject) {
      return { result: null, error: "Choose a subject for every entered score" };
    }

    const populatedRows = atarRows.filter((row) => row.subjectCode !== "");

    if (populatedRows.length < 4) {
      return { result: null, error: "Enter at least four study scores" };
    }

    const codes = populatedRows.map((row) => row.subjectCode);
    if (new Set(codes).size !== codes.length) {
      return { result: null, error: "Choose each subject once" };
    }

    const inputs = populatedRows.map((row) => {
      const subject = SUBJECT_BY_CODE.get(row.subjectCode);
      const rawStudyScore = Number(row.rawStudyScore);
      if (!subject || rawStudyScore < 0 || rawStudyScore > 50) {
        return null;
      }
      return { id: row.id, subject, rawStudyScore };
    });

    if (inputs.some((input) => input === null)) {
      return { result: null, error: "Study scores must be from 0 to 50" };
    }

    const validInputs = inputs.filter(
      (input): input is NonNullable<typeof input> => input !== null,
    );
    if (!validInputs[0]?.subject.englishGroup) {
      return {
        result: null,
        error: "Your first subject must be English, EAL, English Language or Literature",
      };
    }

    return {
      result: calculateAtar(validInputs, universityExtensionIncrement),
      error: null,
    };
  }, [atarRows, universityExtensionIncrement]);

  const atarRowGroups = useMemo<readonly AtarRowGroupView[]>(() => {
    const calculationResult = atarCalculation.result;
    if (!calculationResult) {
      return [];
    }

    const rowsById = new Map(atarRows.map((row) => [row.id, row]));
    const groups = groupAtarContributions(calculationResult.contributions).map((group) => ({
      title: group.title,
      rows: group.contributions
        .map((contribution) => rowsById.get(contribution.id))
        .filter((row): row is AtarRow => row !== undefined),
    }));
    const blankRows = atarRows.filter(
      (row) => row.subjectCode === "" && row.rawStudyScore === "",
    );
    const otherSubjectGroup = groups.find(
      (group) => group.title === "Other subjects",
    );

    if (blankRows.length === 0) {
      return groups;
    }
    if (otherSubjectGroup) {
      return groups.map((group) =>
        group.title === "Other subjects"
          ? { ...group, rows: [...group.rows, ...blankRows] }
          : group,
      );
    }
    return [...groups, { title: "Other subjects", rows: blankRows }];
  }, [atarCalculation.result, atarRows]);

  useEffect(() => {
    if (shouldDeferAtarUpdates) {
      return;
    }

    lastStableAtarRowGroupsRef.current = atarRowGroups.map((group) => ({
      title: group.title,
      rowIds: group.rows.map((row) => row.id),
    }));
    lastStableAtarCalculationRef.current = atarCalculation;
  }, [atarCalculation, atarRowGroups, shouldDeferAtarUpdates]);

  const displayedAtarRowGroups = useMemo<readonly AtarRowGroupView[]>(() => {
    const stableGroups = lastStableAtarRowGroupsRef.current;
    if (!shouldDeferAtarUpdates || stableGroups.length === 0) {
      return atarRowGroups;
    }

    const rowsById = new Map(atarRows.map((row) => [row.id, row]));
    return stableGroups
      .map((group) => ({
        title: group.title,
        rows: group.rowIds
          .map((rowId) => rowsById.get(rowId))
          .filter((row): row is AtarRow => row !== undefined),
      }))
      .filter((group) => group.rows.length > 0);
  }, [atarRowGroups, atarRows, shouldDeferAtarUpdates]);

  const displayedAtarCalculation = shouldDeferAtarUpdates
    ? lastStableAtarCalculationRef.current
    : atarCalculation;

  function navigateTo(view: CalculatorView, rowId: string | null = null): void {
    const searchParameters = new URLSearchParams();
    searchParameters.set("calculator", view);
    if (rowId) {
      searchParameters.set("slot", rowId);
    }
    const currentUrl = new URL(window.location.href);
    const nextPath = `${currentUrl.pathname}?${searchParameters.toString()}`;
    window.history.pushState({}, "", nextPath);
    setActiveView(view);
    setTargetAtarRowId(rowId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function selectCalculatorFromLanding(view: CalculatorView): void {
    setIsLandingChooserOpen(false);
    navigateTo(view);
  }

  function updateStudySubject(subjectCode: string): void {
    const subject = SUBJECT_BY_CODE.get(subjectCode) ?? SUBJECTS[0];
    setStudyForm((current) => ({
      ...current,
      subjectCode: subject.code,
      examMarks: subject.examMaximumMarks.map(
        (_, index) => current.examMarks[index] ?? "",
      ),
    }));
  }

  function updateAtarRow(rowId: string, patch: Partial<AtarRow>): void {
    setAtarRows((current) =>
      current.map((row) => (row.id === rowId ? { ...row, ...patch } : row)),
    );
  }

  function beginAtarScoreEntry(rowId: string): void {
    lastStableAtarRowGroupsRef.current = atarRowGroups.map((group) => ({
      title: group.title,
      rowIds: group.rows.map((row) => row.id),
    }));
    lastStableAtarCalculationRef.current = atarCalculation;
    setActiveAtarScoreRowId(rowId);
  }

  function finishAtarScoreEntry(rowId: string): void {
    setActiveAtarScoreRowId((current) => (current === rowId ? null : current));
  }

  function addAtarRow(): void {
    if (atarRows.length >= MAXIMUM_ATAR_SUBJECTS) {
      return;
    }
    setAtarRows((current) => [...current, createAtarRow()]);
  }

  function removeAtarRow(rowId: string): void {
    if (atarRows.length <= MINIMUM_ATAR_SUBJECTS) {
      return;
    }
    setAtarRows((current) => current.filter((row) => row.id !== rowId));
  }

  function openStudyCalculator(row: AtarRow): void {
    setStudyForm(createDefaultStudyForm(row.subjectCode || "EN"));
    navigateTo("study", row.id);
  }

  function useStudyScoreInAtar(): void {
    if (studyScore === null) {
      return;
    }

    setAtarRows((current) => {
      const score = String(studyScore);
      const targetIndex = current.findIndex((row) => row.id === targetAtarRowId);
      const isValidTarget =
        targetIndex > 0 ||
        (targetIndex === 0 && selectedSubject.englishGroup);

      if (isValidTarget) {
        return current.map((row, index) =>
          index === targetIndex
            ? { ...row, subjectCode: selectedSubject.code, rawStudyScore: score }
            : row,
        );
      }

      const matchingIndex = current.findIndex(
        (row) => row.subjectCode === selectedSubject.code,
      );
      if (matchingIndex >= 0) {
        return current.map((row, index) =>
          index === matchingIndex ? { ...row, rawStudyScore: score } : row,
        );
      }

      const emptyIndex = current.findIndex(
        (row, index) =>
          row.subjectCode === "" && (index > 0 || selectedSubject.englishGroup),
      );
      if (emptyIndex >= 0) {
        return current.map((row, index) =>
          index === emptyIndex
            ? { ...row, subjectCode: selectedSubject.code, rawStudyScore: score }
            : row,
        );
      }

      if (current.length === 0 && !selectedSubject.englishGroup) {
        return [createAtarRow(), { ...createAtarRow(), subjectCode: selectedSubject.code, rawStudyScore: score }];
      }
      if (current.length < MAXIMUM_ATAR_SUBJECTS) {
        return [...current, { ...createAtarRow(), subjectCode: selectedSubject.code, rawStudyScore: score }];
      }
      return current;
    });
    navigateTo("atar");
  }

  function resetStudyForm(): void {
    setStudyForm(createDefaultStudyForm(selectedSubject.code));
  }

  function resetAtarRows(): void {
    setAtarRows(DEFAULT_ATAR_ROWS);
    setActiveAtarScoreRowId(null);
    setUniversityExtensionIncrement(0);
  }

  function renderAtarRow(row: AtarRow, displayNumber: number) {
    const subject = SUBJECT_BY_CODE.get(row.subjectCode);
    const rawScore = Number(row.rawStudyScore);
    const scaledScore =
      subject && row.rawStudyScore !== "" && rawScore >= 0 && rawScore <= 50
        ? calculateScaledStudyScore(rawScore, subject)
        : null;
    const contribution = displayedAtarCalculation.result?.contributions.find(
      (item) => item.id === row.id,
    );
    const isEnglishSlot = atarRows[0]?.id === row.id;
    const subjectOptions = isEnglishSlot ? ENGLISH_SUBJECTS : SUBJECTS;
    const contributionLabel = contribution?.role === "primary"
      ? "Top 4"
      : contribution?.role === "increment"
        ? "10%"
        : contribution?.role === "unused"
          ? "Not counted"
          : isEnglishSlot
            ? "Required"
            : "";

    return (
      <div className="atar-row" key={row.id}>
        <span className="subject-number">{displayNumber}</span>
        <label className="select-wrap">
          <span className="sr-only">
            {isEnglishSlot ? "English-group subject" : `Subject ${displayNumber}`}
          </span>
          <select
            value={row.subjectCode}
            onChange={(event) =>
              updateAtarRow(row.id, { subjectCode: event.target.value })
            }
          >
            <option value="">
              {isEnglishSlot ? "Choose English subject" : "Choose subject"}
            </option>
            {subjectOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.name}
              </option>
            ))}
          </select>
          <ChevronDown size={16} aria-hidden="true" />
        </label>
        <label className="raw-score-field">
          <span className="sr-only">Raw study score</span>
          <input
            inputMode="decimal"
            min="0"
            max="50"
            step="1"
            type="number"
            value={row.rawStudyScore}
            placeholder="40"
            onFocus={() => beginAtarScoreEntry(row.id)}
            onChange={(event) =>
              updateAtarRow(row.id, {
                rawStudyScore: numberInputValue(event.target.value),
              })
            }
            onBlur={() => finishAtarScoreEntry(row.id)}
          />
        </label>
        <span className="scaled-score">{scaledScore?.toFixed(1) ?? "—"}</span>
        <span className={`contribution-tag ${contribution?.role ?? "required"}`}>
          {contributionLabel}
        </span>
        <button
          className="estimate-button"
          type="button"
          onClick={() => openStudyCalculator(row)}
        >
          Estimate score <ArrowRight size={14} />
        </button>
        <button
          className="icon-button"
          type="button"
          aria-label={`Remove subject ${displayNumber}`}
          disabled={atarRows.length <= MINIMUM_ATAR_SUBJECTS}
          onClick={() => removeAtarRow(row.id)}
        >
          <Trash2 size={16} />
        </button>
      </div>
    );
  }

  return (
    <main className="app-shell">
      <header className="site-header">
        <button className="brand" type="button" onClick={() => navigateTo("study")}>
          <span className="brand-mark" aria-hidden="true">
            <GraduationCap size={22} strokeWidth={2.2} />
          </span>
          <span>VCE<span className="brand-accent">calc</span></span>
        </button>
        <nav className="calculator-switcher" aria-label="Calculator selection">
          <button
            className={activeView === "study" ? "active" : ""}
            type="button"
            onClick={() => navigateTo("study")}
          >
            Study score
          </button>
          <button
            className={activeView === "atar" ? "active" : ""}
            type="button"
            onClick={() => navigateTo("atar")}
          >
            ATAR
          </button>
        </nav>
        <span className="data-year">2021–2025 data</span>
      </header>

      {isLandingChooserOpen ? (
        <section
          className="landing-chooser"
          role="dialog"
          aria-modal="true"
          aria-labelledby="landing-chooser-title"
        >
          <div className="landing-chooser-card">
            <h1 id="landing-chooser-title">What are you calculating?</h1>
            <p>Choose a calculator to get started. You can switch whenever you need.</p>
            <div className="landing-actions">
              <button
                className="landing-choice study-choice"
                type="button"
                onClick={() => selectCalculatorFromLanding("study")}
              >
                <span className="landing-choice-icon"><BookOpen size={22} /></span>
                <span>
                  <strong>Study score</strong>
                  <small>Estimate from ranks and raw exam marks</small>
                </span>
                <ArrowRight size={20} aria-hidden="true" />
              </button>
              <button
                className="landing-choice atar-choice"
                type="button"
                onClick={() => selectCalculatorFromLanding("atar")}
              >
                <span className="landing-choice-icon"><Calculator size={22} /></span>
                <span>
                  <strong>ATAR</strong>
                  <small>Combine your scaled study scores</small>
                </span>
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {activeView === "study" ? (
        <section className="calculator-page">
          <div className="page-heading">
            <h1>Study score calculator</h1>
            <p>Enter your ranks and expected exam marks. Your result updates instantly.</p>
          </div>

          <div className="calculator-grid">
            <form className="input-card" onSubmit={(event) => event.preventDefault()}>
              <div className="card-section">
                <div className="section-heading">
                  <span className="step-number">1</span>
                  <h2>School & subject</h2>
                </div>
                <div className="field-grid two-columns">
                  <label className="field">
                    <span>School</span>
                    <div className="input-with-icon">
                      <School size={17} aria-hidden="true" />
                      <input
                        aria-invalid={studyInputIssues.unit3 !== null}
                        className={studyInputIssues.unit3 ? "input-invalid" : ""}
                        list="victorian-schools"
                        value={studyForm.schoolName}
                        placeholder="Start typing your school"
                        onChange={(event) =>
                          setStudyForm((current) => ({
                            ...current,
                            schoolName: event.target.value,
                          }))
                        }
                      />
                    </div>
                    {selectedSchool?.reportedMedianStudyScore !== null &&
                    selectedSchool?.reportedMedianStudyScore !== undefined ? (
                      <span className="school-data-note">
                        2025 median {selectedSchool.reportedMedianStudyScore.toFixed(1)}
                        {selectedSchool.usesImprovementAdjustment &&
                        selectedSchool.medianStudyScore !== null
                          ? ` · trend-adjusted ${selectedSchool.medianStudyScore.toFixed(2)}`
                          : ""}
                      </span>
                    ) : null}
                    <datalist id="victorian-schools">
                      {schools.map((school) => (
                        <option
                          key={`${school.name}-${school.locality}`}
                          value={school.selectionLabel}
                        >
                          {school.locality}
                        </option>
                      ))}
                    </datalist>
                  </label>
                  <label className="field">
                    <span>Subject</span>
                    <div className="select-wrap">
                      <select
                        value={selectedSubject.code}
                        onChange={(event) => updateStudySubject(event.target.value)}
                      >
                        {SUBJECTS.map((subject) => (
                          <option key={subject.code} value={subject.code}>
                            {subject.name}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={17} aria-hidden="true" />
                    </div>
                  </label>
                </div>
              </div>

              <div className="card-section">
                <div className="section-heading">
                  <span className="step-number">2</span>
                  <h2>SAC ranks</h2>
                </div>
                <div className="rank-table" role="group" aria-label="SAC ranks">
                  <div className="rank-row rank-header" aria-hidden="true">
                    <span />
                    <span>Rank</span>
                    <span>Cohort</span>
                    <span>Relative study score</span>
                  </div>
                  <div className="rank-row">
                    <strong>Unit 3</strong>
                    <label>
                      <span className="sr-only">Unit 3 rank</span>
                      <input
                        aria-invalid={studyInputIssues.unit3 !== null}
                        className={studyInputIssues.unit3 ? "input-invalid" : ""}
                        inputMode="numeric"
                        min="1"
                        type="number"
                        value={studyForm.unit3Rank}
                        placeholder="8"
                        onChange={(event) =>
                          setStudyForm((current) => ({
                            ...current,
                            unit3Rank: numberInputValue(event.target.value),
                          }))
                        }
                      />
                    </label>
                    <label>
                      <span className="sr-only">Unit 3 cohort size</span>
                      <input
                        aria-invalid={studyInputIssues.unit3 !== null}
                        className={studyInputIssues.unit3 ? "input-invalid" : ""}
                        inputMode="numeric"
                        min="1"
                        type="number"
                        value={studyForm.unit3CohortSize}
                        placeholder="100"
                        onChange={(event) =>
                          setStudyForm((current) => ({
                            ...current,
                            unit3CohortSize: numberInputValue(event.target.value),
                          }))
                        }
                      />
                    </label>
                    <output className="relative-study-score" aria-label="Unit 3 relative study score">
                      <span>Relative study score</span>
                      <strong>{formatRelativeStudyScore(relativeRankStudyScores.unit3)}</strong>
                    </output>
                  </div>
                  <div className="rank-row">
                    <strong>Unit 4</strong>
                    <label>
                      <span className="sr-only">Unit 4 rank</span>
                      <input
                        aria-invalid={studyInputIssues.unit4 !== null}
                        className={studyInputIssues.unit4 ? "input-invalid" : ""}
                        inputMode="numeric"
                        min="1"
                        type="number"
                        value={studyForm.unit4Rank}
                        placeholder="6"
                        onChange={(event) =>
                          setStudyForm((current) => ({
                            ...current,
                            unit4Rank: numberInputValue(event.target.value),
                          }))
                        }
                      />
                    </label>
                    <label>
                      <span className="sr-only">Unit 4 cohort size</span>
                      <input
                        aria-invalid={studyInputIssues.unit4 !== null}
                        className={studyInputIssues.unit4 ? "input-invalid" : ""}
                        inputMode="numeric"
                        min="1"
                        type="number"
                        value={studyForm.unit4CohortSize}
                        placeholder="100"
                        onChange={(event) =>
                          setStudyForm((current) => ({
                            ...current,
                            unit4CohortSize: numberInputValue(event.target.value),
                          }))
                        }
                      />
                    </label>
                    <output className="relative-study-score" aria-label="Unit 4 relative study score">
                      <span>Relative study score</span>
                      <strong>{formatRelativeStudyScore(relativeRankStudyScores.unit4)}</strong>
                    </output>
                  </div>
                  {studyInputIssues.unit3 ? (
                    <p className="field-error" role="alert">{studyInputIssues.unit3}</p>
                  ) : null}
                  {studyInputIssues.unit4 ? (
                    <p className="field-error" role="alert">{studyInputIssues.unit4}</p>
                  ) : null}
                </div>
              </div>

              <div className="card-section">
                <div className="section-heading exam-heading">
                  <span className="step-number">3</span>
                  <h2>Expected raw exam mark{selectedSubject.examWeights.length > 1 ? "s" : ""}</h2>
                  <span className="exam-count">
                    {selectedSubject.examWeights.length} exam{selectedSubject.examWeights.length > 1 ? "s" : ""}
                  </span>
                </div>
                <div className={`field-grid exam-grid exams-${selectedSubject.examWeights.length}`}>
                  {selectedSubject.examLabels.map((label, index) => (
                    <label className="field" key={label}>
                      <span>{label}</span>
                      <div className="mark-input">
                        <input
                          aria-invalid={studyInputIssues.examMarks[index] !== null}
                          className={studyInputIssues.examMarks[index] ? "input-invalid" : ""}
                          inputMode="decimal"
                          min="0"
                          max={selectedSubject.examMaximumMarks[index]}
                          step="0.1"
                          type="number"
                          value={studyForm.examMarks[index] ?? ""}
                          placeholder={String(
                            Math.round(selectedSubject.examMaximumMarks[index] * 0.75),
                          )}
                          onChange={(event) => {
                            const nextMarks = [...studyForm.examMarks];
                            nextMarks[index] = numberInputValue(event.target.value);
                            setStudyForm((current) => ({
                              ...current,
                              examMarks: nextMarks,
                            }));
                          }}
                        />
                        <span>/ {selectedSubject.examMaximumMarks[index]}</span>
                      </div>
                      {studyInputIssues.examMarks[index] ? (
                        <small className="field-error" role="alert">
                          {studyInputIssues.examMarks[index]}
                        </small>
                      ) : null}
                    </label>
                  ))}
                </div>
              </div>
            </form>

            <aside className="result-card" aria-live="polite">
              <span className="result-label">Estimated raw study score</span>
              <div className={`score-orb ${studyScore !== null ? "has-score" : ""}`}>
                <strong>{studyScore ?? "—"}</strong>
                <span>/ 50</span>
              </div>
              <h2>{studyScore === null ? "Enter your results" : selectedSubject.name}</h2>
              <p>
                {studyScore === null
                  ? studyInputIssues.firstError ?? "Fill every field to see your score."
                  : `Based on your school, SAC ranks and ${selectedSubject.examWeights.length === 1 ? "raw exam mark" : "raw exam marks"}.`}
              </p>
              <div className="scaled-study-score">
                <span>Estimated scaled study score</span>
                <strong>{scaledStudyScore?.toFixed(1) ?? "—"}</strong>
                <small>2025 VTAC scaling</small>
              </div>
              <button
                className="primary-action"
                type="button"
                disabled={studyScore === null}
                onClick={useStudyScoreInAtar}
              >
                Use in ATAR calculator <ArrowRight size={18} />
              </button>
              <button className="reset-button" type="button" onClick={resetStudyForm}>
                <RotateCcw size={15} /> Reset
              </button>
              <div className="result-source">
                <Check size={15} /> VCAA 2021–2025 school trends · Honour Roll · VTAC reports
              </div>
            </aside>
          </div>
          <div className="mobile-result-dock" aria-hidden="true">
            <div>
              <span>Raw study score</span>
              <strong>
                {studyScore ?? "—"}
                <small>/50</small>
              </strong>
            </div>
            <div>
              <span>Scaled</span>
              <strong>{scaledStudyScore?.toFixed(1) ?? "—"}</strong>
            </div>
          </div>
        </section>
      ) : (
        <section className="calculator-page atar-page">
          <div className="page-heading">
            <h1>ATAR calculator</h1>
            <p>Add up to seven subjects. Your ATAR and contribution groups update as you enter scores.</p>
          </div>

          <div className="calculator-grid atar-grid">
            <div className="input-card atar-input-card">
              <div className="atar-table-header" aria-hidden="true">
                <span />
                <span>Subject</span>
                <span>Raw score</span>
                <span>Scaled</span>
                <span />
                <span />
                <span />
              </div>
              <div className="atar-rows">
                {atarRows.length === 0 ? (
                  <div className="atar-empty-state">
                    <strong>Start with an English subject</strong>
                    <span>Add English, EAL, English Language or Literature first.</span>
                  </div>
                ) : displayedAtarRowGroups.length > 0 ? (
                  displayedAtarRowGroups.map((group) => (
                    <section className="atar-row-group" key={group.title}>
                      <div className="atar-row-group-heading">
                        <h2>{group.title}</h2>
                        <span>{ATAR_GROUP_DESCRIPTIONS[group.title]}</span>
                      </div>
                      {group.rows.map((row, index) => renderAtarRow(row, index + 1))}
                    </section>
                  ))
                ) : (
                  atarRows.map((row, index) => renderAtarRow(row, index + 1))
                )}
              </div>
              <div className="university-extension-row">
                <span className="subject-number extension-number" aria-hidden="true">H</span>
                <div className="extension-copy">
                  <strong>University extension</strong>
                  <span>Competes for one of the two increment positions</span>
                </div>
                <label className="select-wrap">
                  <span className="sr-only">University extension points</span>
                  <select
                    value={universityExtensionIncrement}
                    onChange={(event) =>
                      setUniversityExtensionIncrement(
                        parseUniversityExtensionIncrement(event.target.value),
                      )
                    }
                  >
                    {UNIVERSITY_EXTENSION_INCREMENTS.map((increment) => (
                      <option key={increment} value={increment}>
                        {increment === 0 ? "No extension" : `${increment.toFixed(1)} points`}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} aria-hidden="true" />
                </label>
                <output
                  className={`contribution-tag ${
                    universityExtensionIncrement === 0
                      ? "unused"
                      : displayedAtarCalculation.result?.universityExtension.counted
                        ? "increment"
                        : "unused"
                  }`}
                >
                  {universityExtensionIncrement === 0
                    ? "Optional"
                    : displayedAtarCalculation.result?.universityExtension.counted
                      ? "Included"
                      : "Not counted"}
                </output>
              </div>
              <div className="atar-actions">
                <button
                  className="add-subject-button"
                  type="button"
                  disabled={atarRows.length >= MAXIMUM_ATAR_SUBJECTS}
                  onClick={addAtarRow}
                >
                  <Plus size={16} /> Add subject ({atarRows.length}/{MAXIMUM_ATAR_SUBJECTS})
                </button>
                <button className="reset-button" type="button" onClick={resetAtarRows}>
                  <RotateCcw size={15} /> Reset
                </button>
              </div>
            </div>

            <aside className="result-card atar-result-card" aria-live="polite">
              <span className="result-label">Estimated ATAR</span>
              <div className={`atar-number ${displayedAtarCalculation.result ? "has-score" : ""}`}>
                {displayedAtarCalculation.result?.atar.toFixed(2) ?? "—"}
              </div>
              {displayedAtarCalculation.result ? (
                <>
                  <div className="aggregate-row">
                    <span>Scaled aggregate</span>
                    <strong>{displayedAtarCalculation.result.aggregate.toFixed(2)}</strong>
                  </div>
                  {universityExtensionIncrement > 0 ? (
                    <div className="aggregate-row extension-result-row">
                      <span>University extension</span>
                      <strong>
                        {displayedAtarCalculation.result.universityExtension.counted
                          ? `+${universityExtensionIncrement.toFixed(1)}`
                          : "Not counted"}
                      </strong>
                    </div>
                  ) : null}
                  <p>Your English subject, next best three and best two permissible increments are included.</p>
                </>
              ) : (
                <p>{displayedAtarCalculation.error}</p>
              )}
              <div className="result-source">
                <Check size={15} /> 2026 VTAC rules · 2025 scaling and aggregate table
              </div>
            </aside>
          </div>
          <div className="mobile-result-dock" aria-hidden="true">
            <div>
              <span>Estimated ATAR</span>
              <strong>{displayedAtarCalculation.result?.atar.toFixed(2) ?? "—"}</strong>
            </div>
            <div>
              <span>Aggregate</span>
              <strong>{displayedAtarCalculation.result?.aggregate.toFixed(2) ?? "—"}</strong>
            </div>
          </div>
        </section>
      )}

      <footer>
        <span>Built for Victorian VCE students.</span>
        <span>Estimates use published VCAA and VTAC data.</span>
      </footer>
    </main>
  );
}
