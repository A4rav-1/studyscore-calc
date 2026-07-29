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
import { useEffect, useMemo, useState } from "react";
import schoolsJson from "./data/schools.json";
import { SUBJECT_BY_CODE, SUBJECTS } from "./data/subjects";
import {
  calculateAtar,
  calculateScaledStudyScore,
  calculateStudyScore,
  type AtarResult,
} from "./lib/calculator";

type CalculatorView = "study" | "atar";

type SchoolRecord = {
  name: string;
  locality: string;
  medianStudyScore: number;
  scoresAbove40Percent: number;
  cohortSize: number;
};

type AtarRow = {
  id: string;
  subjectCode: string;
  rawStudyScore: string;
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

const schools = schoolsJson as readonly SchoolRecord[];
const DEFAULT_ATAR_ROWS: readonly AtarRow[] = [
  { id: "subject-1", subjectCode: "EN", rawStudyScore: "" },
  { id: "subject-2", subjectCode: "NJ", rawStudyScore: "" },
  { id: "subject-3", subjectCode: "BI", rawStudyScore: "" },
  { id: "subject-4", subjectCode: "CH", rawStudyScore: "" },
];

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

function parseExamMark(value: string): number | null {
  if (value.trim() === "") {
    return null;
  }
  const parsedValue = Number(value);
  return Number.isFinite(parsedValue) && parsedValue >= 0 && parsedValue <= 100
    ? parsedValue
    : null;
}

function numberInputValue(value: string): string {
  return value.replace(/[^0-9.]/g, "");
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
      parsedRows.length >= 4 &&
      parsedRows.length <= 6 &&
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
      return parsedRows as readonly AtarRow[];
    }
    console.error("Saved ATAR subjects have an invalid structure.");
  } catch (error) {
    console.error("Saved ATAR subjects could not be read.", error);
  }

  return null;
}

export function CalculatorApp() {
  const [activeView, setActiveView] = useState<CalculatorView>("study");
  const [targetAtarRowId, setTargetAtarRowId] = useState<string | null>(null);
  const [studyForm, setStudyForm] = useState<StudyFormState>(() =>
    createDefaultStudyForm(),
  );
  const [atarRows, setAtarRows] = useState<readonly AtarRow[]>(
    DEFAULT_ATAR_ROWS,
  );

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

  const selectedSubject =
    SUBJECT_BY_CODE.get(studyForm.subjectCode) ?? SUBJECTS[0];
  const selectedSchool =
    schools.find(
      (school) =>
        school.name.toLocaleLowerCase() ===
        studyForm.schoolName.trim().toLocaleLowerCase(),
    ) ?? null;

  const studyScore = useMemo(() => {
    const unit3Rank = parseInteger(studyForm.unit3Rank);
    const unit3CohortSize = parseInteger(studyForm.unit3CohortSize);
    const unit4Rank = parseInteger(studyForm.unit4Rank);
    const unit4CohortSize = parseInteger(studyForm.unit4CohortSize);
    const examMarks = studyForm.examMarks.map(parseExamMark);

    if (
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
      unit3Rank,
      unit3CohortSize,
      unit4Rank,
      unit4CohortSize,
      examMarks: examMarks as readonly number[],
    });
  }, [selectedSchool, selectedSubject, studyForm]);

  const atarCalculation = useMemo<{
    result: AtarResult | null;
    error: string | null;
  }>(() => {
    const populatedRows = atarRows.filter(
      (row) => row.subjectCode !== "" && row.rawStudyScore !== "",
    );

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
    if (!validInputs.some((input) => input.subject.englishGroup)) {
      return { result: null, error: "Add an English-group subject" };
    }

    return { result: calculateAtar(validInputs), error: null };
  }, [atarRows]);

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

  function addAtarRow(): void {
    if (atarRows.length >= 6) {
      return;
    }
    setAtarRows((current) => [
      ...current,
      {
        id: `subject-${Date.now()}`,
        subjectCode: "",
        rawStudyScore: "",
      },
    ]);
  }

  function removeAtarRow(rowId: string): void {
    if (atarRows.length <= 4) {
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

    if (targetAtarRowId) {
      updateAtarRow(targetAtarRowId, {
        subjectCode: selectedSubject.code,
        rawStudyScore: String(studyScore),
      });
    } else {
      const matchingRow = atarRows.find(
        (row) => row.subjectCode === selectedSubject.code,
      );
      if (matchingRow) {
        updateAtarRow(matchingRow.id, { rawStudyScore: String(studyScore) });
      } else {
        const emptyRow = atarRows.find((row) => row.subjectCode === "");
        if (emptyRow) {
          updateAtarRow(emptyRow.id, {
            subjectCode: selectedSubject.code,
            rawStudyScore: String(studyScore),
          });
        } else if (atarRows.length < 6) {
          setAtarRows((current) => [
            ...current,
            {
              id: `subject-${Date.now()}`,
              subjectCode: selectedSubject.code,
              rawStudyScore: String(studyScore),
            },
          ]);
        }
      }
    }
    navigateTo("atar");
  }

  function resetStudyForm(): void {
    setStudyForm(createDefaultStudyForm(selectedSubject.code));
  }

  function resetAtarRows(): void {
    setAtarRows(DEFAULT_ATAR_ROWS);
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
        <span className="data-year">2025 data</span>
      </header>

      {activeView === "study" ? (
        <section className="calculator-page">
          <div className="page-heading">
            <span className="eyebrow"><BookOpen size={15} /> VCE study score</span>
            <h1>What study score will you get?</h1>
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
                    <datalist id="victorian-schools">
                      {schools.map((school) => (
                        <option
                          key={`${school.name}-${school.locality}`}
                          value={school.name}
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
                  </div>
                  <div className="rank-row">
                    <strong>Unit 3</strong>
                    <label>
                      <span className="sr-only">Unit 3 rank</span>
                      <input
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
                  </div>
                  <div className="rank-row">
                    <strong>Unit 4</strong>
                    <label>
                      <span className="sr-only">Unit 4 rank</span>
                      <input
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
                  </div>
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
                  ? "Fill every field to see your score."
                  : `Based on your school, SAC ranks and ${selectedSubject.examWeights.length === 1 ? "raw exam mark" : "raw exam marks"}.`}
              </p>
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
                <Check size={15} /> VCAA weights · VTAC reports · Better Education
              </div>
            </aside>
          </div>
        </section>
      ) : (
        <section className="calculator-page atar-page">
          <div className="page-heading">
            <span className="eyebrow"><Calculator size={15} /> ATAR calculator</span>
            <h1>Turn study scores into your ATAR.</h1>
            <p>Enter raw scores. Scaling and your best four are handled automatically.</p>
          </div>

          <div className="calculator-grid atar-grid">
            <div className="input-card atar-input-card">
              <div className="atar-table-header" aria-hidden="true">
                <span>Subject</span>
                <span>Raw score</span>
                <span>Scaled</span>
                <span />
              </div>
              <div className="atar-rows">
                {atarRows.map((row, index) => {
                  const subject = SUBJECT_BY_CODE.get(row.subjectCode);
                  const rawScore = Number(row.rawStudyScore);
                  const scaledScore =
                    subject && row.rawStudyScore !== "" && rawScore >= 0 && rawScore <= 50
                      ? calculateScaledStudyScore(rawScore, subject)
                      : null;
                  const contribution = atarCalculation.result?.contributions.find(
                    (item) => item.id === row.id,
                  );

                  return (
                    <div className="atar-row" key={row.id}>
                      <span className="subject-number">{index + 1}</span>
                      <label className="select-wrap">
                        <span className="sr-only">Subject {index + 1}</span>
                        <select
                          value={row.subjectCode}
                          onChange={(event) =>
                            updateAtarRow(row.id, { subjectCode: event.target.value })
                          }
                        >
                          <option value="">Choose subject</option>
                          {SUBJECTS.map((option) => (
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
                          onChange={(event) =>
                            updateAtarRow(row.id, {
                              rawStudyScore: numberInputValue(event.target.value),
                            })
                          }
                        />
                      </label>
                      <span className="scaled-score">{scaledScore?.toFixed(1) ?? "—"}</span>
                      <span className={`contribution-tag ${contribution?.role ?? ""}`}>
                        {contribution?.role === "primary"
                          ? "Top 4"
                          : contribution?.role === "increment"
                            ? "10%"
                            : ""}
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
                        aria-label={`Remove subject ${index + 1}`}
                        disabled={atarRows.length <= 4}
                        onClick={() => removeAtarRow(row.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="atar-actions">
                <button
                  className="add-subject-button"
                  type="button"
                  disabled={atarRows.length >= 6}
                  onClick={addAtarRow}
                >
                  <Plus size={16} /> Add subject
                </button>
                <button className="reset-button" type="button" onClick={resetAtarRows}>
                  <RotateCcw size={15} /> Reset
                </button>
              </div>
            </div>

            <aside className="result-card atar-result-card" aria-live="polite">
              <span className="result-label">Estimated ATAR</span>
              <div className={`atar-number ${atarCalculation.result ? "has-score" : ""}`}>
                {atarCalculation.result?.atar.toFixed(2) ?? "—"}
              </div>
              {atarCalculation.result ? (
                <>
                  <div className="aggregate-row">
                    <span>Scaled aggregate</span>
                    <strong>{atarCalculation.result.aggregate.toFixed(2)}</strong>
                  </div>
                  <p>Your English subject, next best three and up to two 10% increments are included.</p>
                </>
              ) : (
                <p>{atarCalculation.error}</p>
              )}
              <div className="result-source">
                <Check size={15} /> 2025 VTAC scaling and aggregate table
              </div>
            </aside>
          </div>
        </section>
      )}

      <footer>
        <span>Built for Victorian VCE students.</span>
        <span>Estimates use published 2025 data.</span>
      </footer>
    </main>
  );
}
