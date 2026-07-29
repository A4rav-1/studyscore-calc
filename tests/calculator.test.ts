import assert from "node:assert/strict";
import test from "node:test";
import { SUBJECT_BY_CODE } from "../app/data/subjects.ts";
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
