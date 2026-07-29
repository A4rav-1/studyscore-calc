import assert from "node:assert/strict";
import test from "node:test";
import {
  RAW_EXAM_MAXIMUMS_BY_CODE,
  SUBJECT_BY_CODE,
  SUBJECTS,
} from "../app/data/subjects.ts";
import {
  calculateAtar,
  calculateScaledStudyScore,
  calculateStudyScore,
} from "../app/lib/calculator.ts";

function getSubject(code: string) {
  const subject = SUBJECT_BY_CODE.get(code);
  assert.ok(subject, `Subject ${code} must exist.`);
  return subject;
}

test("study score calculation returns an exact integer", () => {
  const subject = getSubject("EN");
  const score = calculateStudyScore({
    subject,
    school: null,
    unit3Rank: 50,
    unit3CohortSize: 100,
    unit4Rank: 50,
    unit4CohortSize: 100,
    examMarks: [36],
  });

  assert.equal(score, 30);
  assert.equal(Number.isInteger(score), true);
});

test("study score validates rank bounds", () => {
  const subject = getSubject("BI");
  assert.throws(
    () =>
      calculateStudyScore({
        subject,
        school: null,
        unit3Rank: 31,
        unit3CohortSize: 30,
        unit4Rank: 1,
        unit4CohortSize: 30,
        examMarks: [192],
      }),
    /Unit 3 rank must be between 1 and the cohort size/,
  );
});

test("every supported study has raw exam totals matching its assessment structure", () => {
  const expectedTotalsByCode: Readonly<Record<string, readonly number[]>> = {
    AC: [100], AH: [100], AL03: [100], IT02: [100], IT03: [100], AT: [80],
    SA: [80], BI: [120], BM: [75], CH: [120], CC: [80], DA: [100, 80],
    DR: [100, 60], EC: [80], EN: [60], EF: [60], EG: [75], EV: [120],
    XI03: [50], FT: [90], GE: [80], HH: [90], HI17: [70], HA: [70], HR: [70],
    LS: [80], LI: [40], MA10: [80], NF: [40, 60], NJ: [40, 80], NS: [40, 80],
    ME: [80], OS: [90], PL: [60], PE: [110], PH: [120], PS06: [80], DT: [90],
    PY: [120], RS: [80], SO03: [80], SE03: [100], TS: [100, 50], VC: [80],
    AR: [80, 75], CN: [80, 75], LO57: [80, 75], CK: [80, 75], CL: [80, 75],
    FR: [80, 75], GN: [80, 75], MG: [80, 75], HI: [80, 75], IX: [80, 75],
    IL: [80, 75], JS: [80, 75], KS: [80, 75], LA: [95], PN: [80, 75],
    LO49: [80, 75], RU: [80, 75], SP: [80, 75], TU: [80, 75], LO31: [80, 75],
  };

  assert.deepEqual(RAW_EXAM_MAXIMUMS_BY_CODE, expectedTotalsByCode);
  assert.deepEqual(
    SUBJECTS.map((subject) => subject.code).sort(),
    Object.keys(expectedTotalsByCode).sort(),
  );

  for (const subject of SUBJECTS) {
    assert.deepEqual(subject.examMaximumMarks, expectedTotalsByCode[subject.code]);
    assert.equal(subject.examMaximumMarks.length, subject.examWeights.length);
  }
});

test("General Mathematics uses the VCAA paper totals", () => {
  assert.deepEqual(getSubject("NF").examMaximumMarks, [40, 60]);
});

test("perfect ranks and full marks reach 50 for every supported study", () => {
  for (const subject of SUBJECTS) {
    const score = calculateStudyScore({
      subject,
      school: null,
      unit3Rank: 1,
      unit3CohortSize: 100,
      unit4Rank: 1,
      unit4CohortSize: 100,
      examMarks: subject.examMaximumMarks,
    });
    assert.equal(score, 50, `${subject.name} should reach a raw 50`);
  }
});

test("Mazenod General Mathematics perfect inputs reach 50", () => {
  const score = calculateStudyScore({
    subject: getSubject("NF"),
    school: {
      medianStudyScore: 33,
      scoresAbove40Percent: 15.3,
    },
    unit3Rank: 1,
    unit3CohortSize: 100,
    unit4Rank: 1,
    unit4CohortSize: 100,
    examMarks: [40, 60],
  });
  assert.equal(score, 50);
});

test("top-end performance remains separated from 45 through 50", () => {
  const english = getSubject("EN");
  const topEndCases: readonly [number, number, number][] = [
    [90, 11, 45],
    [94, 7, 46],
    [96, 5, 47],
    [98, 3, 48],
    [99, 2, 49],
    [100, 1, 50],
  ];

  for (const [performance, rank, expectedScore] of topEndCases) {
    const score = calculateStudyScore({
      subject: english,
      school: null,
      unit3Rank: rank,
      unit3CohortSize: 101,
      unit4Rank: rank,
      unit4CohortSize: 101,
      examMarks: [(performance / 100) * 60],
    });
    assert.equal(score, expectedScore);
  }
});

test("VTAC scaling interpolates between report anchors", () => {
  const methods = getSubject("NJ");
  assert.equal(calculateScaledStudyScore(40, methods), 46);
  assert.equal(calculateScaledStudyScore(42.5, methods), 47.5);
});

test("ATAR calculation applies primary four and two increments", () => {
  const result = calculateAtar([
    { id: "en", subject: getSubject("EN"), rawStudyScore: 40 },
    { id: "methods", subject: getSubject("NJ"), rawStudyScore: 40 },
    { id: "chem", subject: getSubject("CH"), rawStudyScore: 40 },
    { id: "bio", subject: getSubject("BI"), rawStudyScore: 40 },
    { id: "business", subject: getSubject("BM"), rawStudyScore: 40 },
    { id: "general", subject: getSubject("NF"), rawStudyScore: 40 },
  ]);

  assert.equal(result.aggregate, 177.6);
  assert.equal(result.atar, 96.9);
  assert.equal(
    result.contributions.filter((item) => item.role === "primary").length,
    4,
  );
  assert.equal(
    result.contributions.filter((item) => item.role === "increment").length,
    2,
  );
});

test("ATAR calculation requires an English-group subject", () => {
  assert.throws(
    () =>
      calculateAtar([
        { id: "methods", subject: getSubject("NJ"), rawStudyScore: 35 },
        { id: "chem", subject: getSubject("CH"), rawStudyScore: 35 },
        { id: "bio", subject: getSubject("BI"), rawStudyScore: 35 },
        { id: "business", subject: getSubject("BM"), rawStudyScore: 35 },
      ]),
    /Add English, EAL, English Language or Literature/,
  );
});
