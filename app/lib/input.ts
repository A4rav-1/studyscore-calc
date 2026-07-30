export function parseExamMark(value: string): number | null {
  if (value.trim() === "") {
    return null;
  }

  const parsedValue = Number(value);
  return Number.isFinite(parsedValue) && parsedValue >= 0 ? parsedValue : null;
}

type RankInput = {
  rank: string;
  cohortSize: string;
  label: string;
};

export type StudyInputIssues = {
  unit3: string | null;
  unit4: string | null;
  examMarks: readonly (string | null)[];
  firstError: string | null;
};

function parseWholeNumber(value: string): number | null {
  if (value.trim() === "") {
    return null;
  }

  const parsedValue = Number(value);
  return Number.isInteger(parsedValue) ? parsedValue : null;
}

function getRankIssue({ rank, cohortSize, label }: RankInput): string | null {
  const parsedRank = parseWholeNumber(rank);
  const parsedCohortSize = parseWholeNumber(cohortSize);

  if (rank.trim() === "" || cohortSize.trim() === "") {
    return null;
  }
  if (parsedRank === null || parsedCohortSize === null) {
    return `${label} rank and cohort must be whole numbers.`;
  }
  if (parsedCohortSize < 1) {
    return `${label} cohort must be at least 1.`;
  }
  if (parsedRank < 1 || parsedRank > parsedCohortSize) {
    return `${label} rank must be between 1 and ${parsedCohortSize}.`;
  }

  return null;
}

export function getStudyInputIssues(input: {
  unit3Rank: string;
  unit3CohortSize: string;
  unit4Rank: string;
  unit4CohortSize: string;
  examMarks: readonly string[];
  examMaximumMarks: readonly number[];
}): StudyInputIssues {
  const unit3 = getRankIssue({
    rank: input.unit3Rank,
    cohortSize: input.unit3CohortSize,
    label: "Unit 3",
  });
  const unit4 = getRankIssue({
    rank: input.unit4Rank,
    cohortSize: input.unit4CohortSize,
    label: "Unit 4",
  });
  const examMarks = input.examMaximumMarks.map((maximumMark, index) => {
    const value = input.examMarks[index] ?? "";
    const mark = parseExamMark(value);

    if (value.trim() === "") {
      return null;
    }
    if (mark === null || mark > maximumMark) {
      return `Enter a mark from 0 to ${maximumMark}.`;
    }
    return null;
  });
  const firstError = [unit3, unit4, ...examMarks].find(
    (issue): issue is string => issue !== null,
  ) ?? null;

  return { unit3, unit4, examMarks, firstError };
}
