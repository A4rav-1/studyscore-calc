import type { SubjectDefinition } from "../data/subjects";

export type SchoolStatistics = {
  medianStudyScore: number;
  scoresAbove40Percent: number;
};

export type StudyScoreInput = {
  subject: SubjectDefinition;
  school: SchoolStatistics | null;
  unit3Rank: number;
  unit3CohortSize: number;
  unit4Rank: number;
  unit4CohortSize: number;
  examPercentages: readonly number[];
};

export type AtarSubjectInput = {
  id: string;
  subject: SubjectDefinition;
  rawStudyScore: number;
};

export type AtarContribution = AtarSubjectInput & {
  role: "primary" | "increment" | "unused";
  scaledStudyScore: number;
};

export type AtarResult = {
  atar: number;
  aggregate: number;
  contributions: readonly AtarContribution[];
};

const RAW_SCORE_ANCHORS = [20, 25, 30, 35, 40, 45, 50] as const;

const AGGREGATE_TO_ATAR: readonly [number, number][] = [
  [0, 0],
  [50, 20],
  [65, 30],
  [80.53, 40],
  [87.44, 45],
  [94.06, 50],
  [100.64, 55],
  [107.03, 60],
  [109.74, 62],
  [112.34, 64],
  [113.64, 65],
  [114.99, 66],
  [117.73, 68],
  [120.42, 70],
  [123.27, 72],
  [126.21, 74],
  [127.68, 75],
  [129.18, 76],
  [132.22, 78],
  [135.65, 80],
  [139, 82],
  [142.52, 84],
  [144.45, 85],
  [146.36, 86],
  [150.51, 88],
  [155.19, 90],
  [157.79, 91],
  [160.53, 92],
  [163.3, 93],
  [166.49, 94],
  [169.85, 95],
  [173.56, 96],
  [178.1, 97],
  [180.84, 97.5],
  [183.81, 98],
  [187.53, 98.5],
  [192.1, 99],
  [194.8, 99.25],
  [198.2, 99.5],
  [199.91, 99.6],
  [201.93, 99.7],
  [204.33, 99.8],
  [208.08, 99.9],
  [211.42, 99.95],
  [230, 99.95],
];

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, value));
}

function interpolate(
  value: number,
  inputStart: number,
  inputEnd: number,
  outputStart: number,
  outputEnd: number,
): number {
  if (inputStart === inputEnd) {
    return outputStart;
  }

  const progress = (value - inputStart) / (inputEnd - inputStart);
  return outputStart + progress * (outputEnd - outputStart);
}

function inverseNormalCdf(probability: number): number {
  const boundedProbability = clamp(probability, 0.0001, 0.9999);
  const coefficientsA = [
    -39.69683028665376,
    220.9460984245205,
    -275.9285104469687,
    138.357751867269,
    -30.66479806614716,
    2.506628277459239,
  ];
  const coefficientsB = [
    -54.47609879822406,
    161.5858368580409,
    -155.6989798598866,
    66.80131188771972,
    -13.28068155288572,
  ];
  const coefficientsC = [
    -0.007784894002430293,
    -0.3223964580411365,
    -2.400758277161838,
    -2.549732539343734,
    4.374664141464968,
    2.938163982698783,
  ];
  const coefficientsD = [
    0.007784695709041462,
    0.3224671290700398,
    2.445134137142996,
    3.754408661907416,
  ];
  const lowerBoundary = 0.02425;
  const upperBoundary = 1 - lowerBoundary;

  if (boundedProbability < lowerBoundary) {
    const q = Math.sqrt(-2 * Math.log(boundedProbability));
    return (
      (((((coefficientsC[0] * q + coefficientsC[1]) * q + coefficientsC[2]) *
        q +
        coefficientsC[3]) *
        q +
        coefficientsC[4]) *
        q +
        coefficientsC[5]) /
      ((((coefficientsD[0] * q + coefficientsD[1]) * q + coefficientsD[2]) *
        q +
        coefficientsD[3]) *
        q +
        1)
    );
  }

  if (boundedProbability > upperBoundary) {
    const q = Math.sqrt(-2 * Math.log(1 - boundedProbability));
    return -(
      (((((coefficientsC[0] * q + coefficientsC[1]) * q + coefficientsC[2]) *
        q +
        coefficientsC[3]) *
        q +
        coefficientsC[4]) *
        q +
        coefficientsC[5]) /
      ((((coefficientsD[0] * q + coefficientsD[1]) * q + coefficientsD[2]) *
        q +
        coefficientsD[3]) *
        q +
        1)
    );
  }

  const q = boundedProbability - 0.5;
  const r = q * q;
  return (
    (((((coefficientsA[0] * r + coefficientsA[1]) * r + coefficientsA[2]) *
      r +
      coefficientsA[3]) *
      r +
      coefficientsA[4]) *
      r +
      coefficientsA[5]) *
    q /
    (((((coefficientsB[0] * r + coefficientsB[1]) * r + coefficientsB[2]) *
      r +
      coefficientsB[3]) *
      r +
      coefficientsB[4]) *
      r +
      1)
  );
}

function validateRank(rank: number, cohortSize: number, label: string): void {
  if (!Number.isInteger(rank) || !Number.isInteger(cohortSize)) {
    throw new Error(`${label} rank and cohort size must be whole numbers.`);
  }

  if (cohortSize < 1 || rank < 1 || rank > cohortSize) {
    throw new Error(`${label} rank must be between 1 and the cohort size.`);
  }
}

function rankToZScore(rank: number, cohortSize: number): number {
  const percentile = (cohortSize - rank + 0.5) / cohortSize;
  return clamp(inverseNormalCdf(percentile), -2.75, 2.75);
}

export function calculateStudyScore(input: StudyScoreInput): number {
  validateRank(input.unit3Rank, input.unit3CohortSize, "Unit 3");
  validateRank(input.unit4Rank, input.unit4CohortSize, "Unit 4");

  if (input.examPercentages.length !== input.subject.examWeights.length) {
    throw new Error("The exam mark count does not match this subject.");
  }

  for (const examPercentage of input.examPercentages) {
    if (!Number.isFinite(examPercentage) || examPercentage < 0 || examPercentage > 100) {
      throw new Error("Exam marks must be between 0 and 100.");
    }
  }

  const schoolZScore = input.school
    ? clamp(
        ((input.school.medianStudyScore - 30) / 7) * 0.5 +
          ((input.school.scoresAbove40Percent - 8) / 20) * 0.25,
        -0.9,
        1.3,
      )
    : 0;
  const unit3ZScore =
    rankToZScore(input.unit3Rank, input.unit3CohortSize) * 0.78 +
    schoolZScore;
  const unit4ZScore =
    rankToZScore(input.unit4Rank, input.unit4CohortSize) * 0.78 +
    schoolZScore;
  const examZScores = input.examPercentages.map((percentage) =>
    clamp((percentage - 60) / 16, -2.75, 2.75),
  );

  const compositeZScore =
    unit3ZScore * input.subject.unit3Weight +
    unit4ZScore * input.subject.unit4Weight +
    examZScores.reduce(
      (total, zScore, index) =>
        total + zScore * input.subject.examWeights[index],
      0,
    );

  return Math.round(clamp(30 + 7 * compositeZScore, 0, 50));
}

export function calculateScaledStudyScore(
  rawStudyScore: number,
  subject: SubjectDefinition,
): number {
  if (!Number.isFinite(rawStudyScore) || rawStudyScore < 0 || rawStudyScore > 50) {
    throw new Error("Raw study scores must be between 0 and 50.");
  }

  if (rawStudyScore <= RAW_SCORE_ANCHORS[0]) {
    return Number(
      interpolate(rawStudyScore, 0, 20, 0, subject.scaling[0]).toFixed(2),
    );
  }

  for (let index = 0; index < RAW_SCORE_ANCHORS.length - 1; index += 1) {
    const lowerRawScore = RAW_SCORE_ANCHORS[index];
    const upperRawScore = RAW_SCORE_ANCHORS[index + 1];

    if (rawStudyScore <= upperRawScore) {
      return Number(
        interpolate(
          rawStudyScore,
          lowerRawScore,
          upperRawScore,
          subject.scaling[index],
          subject.scaling[index + 1],
        ).toFixed(2),
      );
    }
  }

  return subject.scaling[subject.scaling.length - 1];
}

function aggregateToAtar(aggregate: number): number {
  const boundedAggregate = clamp(aggregate, 0, 230);

  for (let index = 0; index < AGGREGATE_TO_ATAR.length - 1; index += 1) {
    const [lowerAggregate, lowerAtar] = AGGREGATE_TO_ATAR[index];
    const [upperAggregate, upperAtar] = AGGREGATE_TO_ATAR[index + 1];

    if (boundedAggregate <= upperAggregate) {
      const interpolatedAtar = interpolate(
        boundedAggregate,
        lowerAggregate,
        upperAggregate,
        lowerAtar,
        upperAtar,
      );
      return clamp(Math.round(interpolatedAtar * 20) / 20, 0, 99.95);
    }
  }

  return 99.95;
}

export function calculateAtar(inputs: readonly AtarSubjectInput[]): AtarResult {
  if (inputs.length < 4) {
    throw new Error("Add at least four subjects.");
  }

  const uniqueCodes = new Set(inputs.map((input) => input.subject.code));
  if (uniqueCodes.size !== inputs.length) {
    throw new Error("Each subject can only be added once.");
  }

  const scaledInputs = inputs.map((input) => ({
    ...input,
    scaledStudyScore: calculateScaledStudyScore(
      input.rawStudyScore,
      input.subject,
    ),
  }));
  const englishSubjects = scaledInputs
    .filter((input) => input.subject.englishGroup)
    .sort((first, second) => second.scaledStudyScore - first.scaledStudyScore);

  if (englishSubjects.length === 0) {
    throw new Error("Add English, EAL, English Language or Literature.");
  }

  const requiredEnglish = englishSubjects[0];
  const remainingByScore = scaledInputs
    .filter((input) => input.id !== requiredEnglish.id)
    .sort((first, second) => second.scaledStudyScore - first.scaledStudyScore);
  const primaryIds = new Set([
    requiredEnglish.id,
    ...remainingByScore.slice(0, 3).map((input) => input.id),
  ]);
  const incrementIds = new Set(
    remainingByScore.slice(3, 5).map((input) => input.id),
  );
  const contributions: AtarContribution[] = scaledInputs.map((input) => ({
    ...input,
    role: primaryIds.has(input.id)
      ? "primary"
      : incrementIds.has(input.id)
        ? "increment"
        : "unused",
  }));
  const aggregate = contributions.reduce((total, contribution) => {
    if (contribution.role === "primary") {
      return total + contribution.scaledStudyScore;
    }
    if (contribution.role === "increment") {
      return total + contribution.scaledStudyScore * 0.1;
    }
    return total;
  }, 0);
  const roundedAggregate = Number(aggregate.toFixed(2));

  return {
    aggregate: roundedAggregate,
    atar: aggregateToAtar(roundedAggregate),
    contributions,
  };
}
