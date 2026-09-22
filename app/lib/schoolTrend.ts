export const MEDIAN_STUDY_SCORE_YEARS = [2021, 2022, 2023, 2024, 2025] as const;

export type MedianStudyScoreYear = (typeof MEDIAN_STUDY_SCORE_YEARS)[number];
export type MedianStudyScoreHistory = Readonly<
  Record<`${MedianStudyScoreYear}`, number | null>
>;

export type SchoolMedianTrend = {
  annualChange: number | null;
  effectiveMedianStudyScore: number | null;
  usesImprovementAdjustment: boolean;
};

function roundToHundredth(value: number): number {
  return Math.round(value * 100) / 100;
}

export function calculateSchoolMedianTrend(
  history: MedianStudyScoreHistory,
): SchoolMedianTrend {
  const currentMedian = history["2025"];
  const observations = MEDIAN_STUDY_SCORE_YEARS.flatMap((year) => {
    const median = history[String(year) as `${MedianStudyScoreYear}`];
    if (median === null) {
      return [];
    }
    if (!Number.isFinite(median) || median < 0 || median > 50) {
      throw new Error("School median study scores must be between 0 and 50.");
    }
    return [{ year, median }];
  });

  if (currentMedian === null) {
    return {
      annualChange: null,
      effectiveMedianStudyScore: null,
      usesImprovementAdjustment: false,
    };
  }
  if (observations.length < 3) {
    return {
      annualChange: null,
      effectiveMedianStudyScore: currentMedian,
      usesImprovementAdjustment: false,
    };
  }

  const meanYear = observations.reduce((total, item) => total + item.year, 0) /
    observations.length;
  const meanMedian = observations.reduce((total, item) => total + item.median, 0) /
    observations.length;
  const denominator = observations.reduce(
    (total, item) => total + (item.year - meanYear) ** 2,
    0,
  );
  const annualChange = observations.reduce(
    (total, item) =>
      total + (item.year - meanYear) * (item.median - meanMedian),
    0,
  ) / denominator;

  if (annualChange <= 0) {
    return {
      annualChange: roundToHundredth(annualChange),
      effectiveMedianStudyScore: currentMedian,
      usesImprovementAdjustment: false,
    };
  }

  return {
    annualChange: roundToHundredth(annualChange),
    effectiveMedianStudyScore: roundToHundredth(
      Math.min(50, currentMedian + annualChange / 2),
    ),
    usesImprovementAdjustment: true,
  };
}
