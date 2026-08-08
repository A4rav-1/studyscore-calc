import type { SubjectDefinition } from "../data/subjects";

export type SchoolStatistics = {
  medianStudyScore: number;
  scoresAbove40Percent: number;
};

export type StudyScoreInput = {
  subject: SubjectDefinition;
  school: SchoolStatistics | null;
  honourRollRankOneStudyScore?: number | null;
  unit3Rank: number;
  unit3CohortSize: number;
  unit4Rank: number;
  unit4CohortSize: number;
  examMarks: readonly number[];
};

export type RelativeStudyScoreInput = {
  school: SchoolStatistics | null;
  honourRollRankOneStudyScore?: number | null;
  rank: number;
  cohortSize: number;
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

export type AtarContributionGroup = {
  title: "Top 4" | "Bottom 2" | "Other subjects";
  contributions: readonly AtarContribution[];
};

export type AtarResult = {
  atar: number;
  aggregate: number;
  contributions: readonly AtarContribution[];
};

const RAW_SCORE_ANCHORS = [20, 25, 30, 35, 40, 45, 50] as const;

const PERFORMANCE_TO_RAW_STUDY_SCORE: readonly [number, number][] = [
  [0, 0],
  [35, 20],
  [55, 30],
  [70, 35],
  [82, 40],
  [90, 45],
  [94, 46],
  [96, 47],
  [98, 48],
  [99, 49],
  [100, 50],
];

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

function validateRank(rank: number, cohortSize: number, label: string): void {
  if (!Number.isInteger(rank) || !Number.isInteger(cohortSize)) {
    throw new Error(`${label} rank and cohort size must be whole numbers.`);
  }

  if (cohortSize < 1 || rank < 1 || rank > cohortSize) {
    throw new Error(`${label} rank must be between 1 and the cohort size.`);
  }
}

function rankToPercentile(rank: number, cohortSize: number): number {
  if (cohortSize === 1) {
    return 100;
  }
  return ((cohortSize - rank) / (cohortSize - 1)) * 100;
}

function performanceToRawStudyScore(performance: number): number {
  const boundedPerformance = clamp(performance, 0, 100);

  for (let index = 0; index < PERFORMANCE_TO_RAW_STUDY_SCORE.length - 1; index += 1) {
    const [lowerPerformance, lowerStudyScore] = PERFORMANCE_TO_RAW_STUDY_SCORE[index];
    const [upperPerformance, upperStudyScore] = PERFORMANCE_TO_RAW_STUDY_SCORE[index + 1];
    if (boundedPerformance <= upperPerformance) {
      return interpolate(
        boundedPerformance,
        lowerPerformance,
        upperPerformance,
        lowerStudyScore,
        upperStudyScore,
      );
    }
  }

  return 50;
}

function rawStudyScoreToPerformance(rawStudyScore: number): number {
  const boundedStudyScore = clamp(rawStudyScore, 0, 50);

  for (let index = 0; index < PERFORMANCE_TO_RAW_STUDY_SCORE.length - 1; index += 1) {
    const [lowerPerformance, lowerStudyScore] = PERFORMANCE_TO_RAW_STUDY_SCORE[index];
    const [upperPerformance, upperStudyScore] = PERFORMANCE_TO_RAW_STUDY_SCORE[index + 1];
    if (boundedStudyScore <= upperStudyScore) {
      return interpolate(
        boundedStudyScore,
        lowerStudyScore,
        upperStudyScore,
        lowerPerformance,
        upperPerformance,
      );
    }
  }

  return 100;
}

function rawMarkToExamPerformance(
  mark: number,
  maximumMark: number,
  anchors: readonly (readonly [number, number])[],
): number {
  const markPercentage = (mark / maximumMark) * 100;

  for (let index = 0; index < anchors.length - 1; index += 1) {
    const [lowerMarkPercentage, lowerPerformance] = anchors[index];
    const [upperMarkPercentage, upperPerformance] = anchors[index + 1];
    if (markPercentage <= upperMarkPercentage) {
      return interpolate(
        markPercentage,
        lowerMarkPercentage,
        upperMarkPercentage,
        lowerPerformance,
        upperPerformance,
      );
    }
  }

  return anchors[anchors.length - 1][1];
}

function calculateSchoolRankAdjustment(school: SchoolStatistics | null): number {
  if (!school) {
    return 0;
  }

  return clamp(
    ((school.medianStudyScore - 30) / 7) * 3 +
      ((school.scoresAbove40Percent - 8) / 20) * 2,
    -5,
    5,
  );
}

function validateHonourRollRankOneStudyScore(
  honourRollRankOneStudyScore: number | null | undefined,
): void {
  if (
    honourRollRankOneStudyScore !== null &&
    honourRollRankOneStudyScore !== undefined &&
    (!Number.isInteger(honourRollRankOneStudyScore) ||
      honourRollRankOneStudyScore < 40 ||
      honourRollRankOneStudyScore > 50)
  ) {
    throw new Error("Published honour-roll study scores must be whole numbers between 40 and 50.");
  }
}

function calculateHonourRollRelativeStudyScore(
  rank: number,
  cohortSize: number,
  school: SchoolStatistics | null,
  honourRollRankOneStudyScore: number,
): number {
  const rankPercentile = rankToPercentile(rank, cohortSize);
  const cohortMedianScore = clamp(
    school?.medianStudyScore ?? 30,
    0,
    honourRollRankOneStudyScore,
  );
  const bottomRankScore = clamp(cohortMedianScore - 12, 0, cohortMedianScore);

  if (rankPercentile >= 50) {
    return interpolate(
      rankPercentile,
      50,
      100,
      cohortMedianScore,
      honourRollRankOneStudyScore,
    );
  }

  return interpolate(rankPercentile, 0, 50, bottomRankScore, cohortMedianScore);
}

function calculateRelativeStudyScoreValue(input: RelativeStudyScoreInput): number {
  validateRank(input.rank, input.cohortSize, "SAC");
  validateHonourRollRankOneStudyScore(input.honourRollRankOneStudyScore);

  if (input.honourRollRankOneStudyScore !== null && input.honourRollRankOneStudyScore !== undefined) {
    return calculateHonourRollRelativeStudyScore(
      input.rank,
      input.cohortSize,
      input.school,
      input.honourRollRankOneStudyScore,
    );
  }

  return performanceToRawStudyScore(
    clamp(
      rankToPercentile(input.rank, input.cohortSize) +
        calculateSchoolRankAdjustment(input.school),
      0,
      100,
    ),
  );
}

export function calculateRelativeStudyScore(
  input: RelativeStudyScoreInput,
): number {
  return Math.round(calculateRelativeStudyScoreValue(input));
}

export function calculateStudyScore(input: StudyScoreInput): number {
  validateRank(input.unit3Rank, input.unit3CohortSize, "Unit 3");
  validateRank(input.unit4Rank, input.unit4CohortSize, "Unit 4");
  validateHonourRollRankOneStudyScore(input.honourRollRankOneStudyScore);

  if (input.examMarks.length !== input.subject.examWeights.length) {
    throw new Error("The exam mark count does not match this subject.");
  }

  for (const [index, examMark] of input.examMarks.entries()) {
    const maximumMark = input.subject.examMaximumMarks[index];
    if (!Number.isFinite(examMark) || examMark < 0 || examMark > maximumMark) {
      throw new Error(`Exam marks must be between 0 and ${maximumMark}.`);
    }
  }

  const schoolRankAdjustment = calculateSchoolRankAdjustment(input.school);
  const hasHonourRollAnchor =
    input.honourRollRankOneStudyScore !== null &&
    input.honourRollRankOneStudyScore !== undefined;
  const unit3Performance = hasHonourRollAnchor
    ? rawStudyScoreToPerformance(
        calculateRelativeStudyScoreValue({
          school: input.school,
          honourRollRankOneStudyScore: input.honourRollRankOneStudyScore,
          rank: input.unit3Rank,
          cohortSize: input.unit3CohortSize,
        }),
      )
    : clamp(
        rankToPercentile(input.unit3Rank, input.unit3CohortSize) + schoolRankAdjustment,
        0,
        100,
      );
  const unit4Performance = hasHonourRollAnchor
    ? rawStudyScoreToPerformance(
        calculateRelativeStudyScoreValue({
          school: input.school,
          honourRollRankOneStudyScore: input.honourRollRankOneStudyScore,
          rank: input.unit4Rank,
          cohortSize: input.unit4CohortSize,
        }),
      )
    : clamp(
        rankToPercentile(input.unit4Rank, input.unit4CohortSize) + schoolRankAdjustment,
        0,
        100,
      );
  const examPerformances = input.examMarks.map((mark, index) =>
    rawMarkToExamPerformance(
      mark,
      input.subject.examMaximumMarks[index],
      input.subject.examPerformanceAnchors,
    ),
  );

  const weightedPerformance =
    unit3Performance * input.subject.unit3Weight +
    unit4Performance * input.subject.unit4Weight +
    examPerformances.reduce(
      (total, performance, index) =>
        total + performance * input.subject.examWeights[index],
      0,
    );

  if (
    input.unit3Rank === 1 &&
    input.unit4Rank === 1 &&
    examPerformances.every((performance) => performance === 100)
  ) {
    return 50;
  }

  return Math.round(performanceToRawStudyScore(weightedPerformance));
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

export function groupAtarContributions(
  contributions: readonly AtarContribution[],
): readonly AtarContributionGroup[] {
  const groupDefinitions: readonly {
    title: AtarContributionGroup["title"];
    role: AtarContribution["role"];
  }[] = [
    { title: "Top 4", role: "primary" },
    { title: "Bottom 2", role: "increment" },
    { title: "Other subjects", role: "unused" },
  ];

  return groupDefinitions
    .map(({ title, role }) => ({
      title,
      contributions: contributions
        .filter((contribution) => contribution.role === role)
        .sort((first, second) => {
          if (role === "primary" && first.subject.englishGroup !== second.subject.englishGroup) {
            return first.subject.englishGroup ? -1 : 1;
          }
          return second.scaledStudyScore - first.scaledStudyScore;
        }),
    }))
    .filter((group) => group.contributions.length > 0);
}
