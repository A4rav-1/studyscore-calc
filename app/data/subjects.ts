export type SubjectDefinition = {
  code: string;
  name: string;
  englishGroup: boolean;
  unit3Weight: number;
  unit4Weight: number;
  examWeights: readonly number[];
  examLabels: readonly string[];
  examMaximumMarks: readonly number[];
  examPerformanceAnchors: readonly (readonly [number, number])[];
  scaling: readonly [number, number, number, number, number, number, number];
};

type SubjectSeed = readonly [
  code: string,
  name: string,
  profile: AssessmentProfileName,
  scaling: SubjectDefinition["scaling"],
  englishGroup?: boolean,
];

const ASSESSMENT_PROFILES = {
  standard: {
    unit3Weight: 0.25,
    unit4Weight: 0.25,
    examWeights: [0.5],
    examLabels: ["Written exam"],
  },
  science: {
    unit3Weight: 0.2,
    unit4Weight: 0.3,
    examWeights: [0.5],
    examLabels: ["Written exam"],
  },
  courseworkHeavy: {
    unit3Weight: 0.3,
    unit4Weight: 0.3,
    examWeights: [0.4],
    examLabels: ["Written exam"],
  },
  examHeavy: {
    unit3Weight: 0.2,
    unit4Weight: 0.2,
    examWeights: [0.6],
    examLabels: ["Written exam"],
  },
  mathematics: {
    unit3Weight: 0.15,
    unit4Weight: 0.15,
    examWeights: [0.3, 0.4],
    examLabels: ["Exam 1", "Exam 2"],
  },
  methods: {
    unit3Weight: 0.2,
    unit4Weight: 0.2,
    examWeights: [0.2, 0.4],
    examLabels: ["Exam 1", "Exam 2"],
  },
  language: {
    unit3Weight: 0.25,
    unit4Weight: 0.25,
    examWeights: [0.125, 0.375],
    examLabels: ["Oral exam", "Written exam"],
  },
  performance: {
    unit3Weight: 0.2,
    unit4Weight: 0.2,
    examWeights: [0.35, 0.25],
    examLabels: ["Performance exam", "Written exam"],
  },
  appliedComputing: {
    unit3Weight: 0.2,
    unit4Weight: 0.3,
    examWeights: [0.5],
    examLabels: ["Written exam"],
  },
  visualArts: {
    unit3Weight: 0.6,
    unit4Weight: 0.1,
    examWeights: [0.3],
    examLabels: ["Written exam"],
  },
  foundationMathematics: {
    unit3Weight: 0.4,
    unit4Weight: 0.2,
    examWeights: [0.4],
    examLabels: ["Written exam"],
  },
  generalMathematics: {
    unit3Weight: 0.2,
    unit4Weight: 0.2,
    examWeights: [0.3, 0.3],
    examLabels: ["Exam 1", "Exam 2"],
  },
  dance: {
    unit3Weight: 0.125,
    unit4Weight: 0.125,
    examWeights: [0.5, 0.25],
    examLabels: ["Performance exam", "Written exam"],
  },
  drama: {
    unit3Weight: 0.2,
    unit4Weight: 0.2,
    examWeights: [0.35, 0.25],
    examLabels: ["Solo performance exam", "Written exam"],
  },
  theatre: {
    unit3Weight: 0.225,
    unit4Weight: 0.225,
    examWeights: [0.25, 0.3],
    examLabels: ["Monologue exam", "Written exam"],
  },
  chineseFirstLanguage: {
    unit3Weight: 0.25,
    unit4Weight: 0.25,
    examWeights: [0.1, 0.4],
    examLabels: ["Oral exam", "Written exam"],
  },
  chineseLanguageCultureSociety: {
    unit3Weight: 0.25,
    unit4Weight: 0.25,
    examWeights: [0.15, 0.35],
    examLabels: ["Oral exam", "Written exam"],
  },
  productDesign: {
    unit3Weight: 0.2,
    unit4Weight: 0.5,
    examWeights: [0.3],
    examLabels: ["Written exam"],
  },
  media: {
    unit3Weight: 0.2,
    unit4Weight: 0.4,
    examWeights: [0.4],
    examLabels: ["Written exam"],
  },
  physics: {
    unit3Weight: 0.3,
    unit4Weight: 0.2,
    examWeights: [0.5],
    examLabels: ["Written exam"],
  },
} as const;

type AssessmentProfileName = keyof typeof ASSESSMENT_PROFILES;

/**
 * Maximum raw marks for the components students enter. These are the 2025
 * VCAA paper or performance-rubric totals, never VCAA grade-distribution
 * standardised totals. Oral examinations use the two-assessor combined total.
 */
export const RAW_EXAM_MAXIMUMS_BY_CODE: Readonly<Record<string, readonly number[]>> = {
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

const DEFAULT_EXAM_PERFORMANCE_ANCHORS: readonly (readonly [number, number])[] = [
  [0, 0],
  [100, 100],
];

/**
 * Historical raw-mark anchors. The second value is the exam-performance level
 * used by the estimator after accounting for paper difficulty.
 */
const EXAM_PERFORMANCE_ANCHORS_BY_CODE: Readonly<
  Record<string, readonly (readonly [number, number])[]>
> = {
  IT03: [
    [0, 0],
    [60, 60],
    [70, 82],
    [80, 96],
    [87, 100],
    [100, 100],
  ],
};

function resolveExamMaximumMarks(
  code: string,
  examWeights: readonly number[],
): readonly number[] {
  const rawMarks = RAW_EXAM_MAXIMUMS_BY_CODE[code];
  if (!rawMarks) {
    throw new Error(`Missing raw VCAA exam mark data for ${code}.`);
  }
  if (rawMarks.length !== examWeights.length) {
    throw new Error(`Raw exam mark data does not match the assessment profile for ${code}.`);
  }
  return rawMarks;
}

function resolveExamPerformanceAnchors(
  code: string,
): readonly (readonly [number, number])[] {
  return EXAM_PERFORMANCE_ANCHORS_BY_CODE[code] ?? DEFAULT_EXAM_PERFORMANCE_ANCHORS;
}

const SUBJECT_SEEDS: readonly SubjectSeed[] = [
  ["AC", "Accounting", "standard", [20, 25, 31, 36, 41, 46, 50]],
  ["AH", "Agricultural & Horticultural Studies", "courseworkHeavy", [15, 19, 24, 29, 34, 41, 50]],
  ["AL03", "Algorithmics (HESS)", "examHeavy", [24, 31, 38, 43, 47, 50, 51]],
  ["IT02", "Data Analytics", "appliedComputing", [16, 21, 26, 32, 38, 44, 50]],
  ["IT03", "Software Development", "appliedComputing", [17, 22, 28, 33, 39, 45, 50]],
  ["AT", "Art Creative Practice", "visualArts", [16, 21, 27, 32, 38, 44, 50]],
  ["SA", "Art Making and Exhibiting", "visualArts", [15, 20, 25, 31, 37, 44, 50]],
  ["BI", "Biology", "science", [19, 25, 31, 36, 41, 46, 50]],
  ["BM", "Business Management", "standard", [17, 22, 27, 32, 38, 44, 50]],
  ["CH", "Chemistry", "science", [22, 28, 34, 39, 44, 47, 50]],
  ["CC", "Classical Studies", "standard", [19, 25, 30, 36, 41, 46, 50]],
  ["DA", "Dance", "dance", [18, 23, 27, 32, 37, 43, 50]],
  ["DR", "Drama", "drama", [18, 23, 28, 33, 39, 45, 50]],
  ["EC", "Economics", "standard", [20, 26, 31, 37, 42, 46, 50]],
  ["EN", "English", "standard", [17, 22, 28, 33, 39, 45, 50], true],
  ["EF", "English as an Additional Language", "standard", [15, 21, 27, 33, 40, 46, 50], true],
  ["EG", "English Language", "standard", [22, 27, 33, 38, 43, 47, 50], true],
  ["EV", "Environmental Science", "standard", [18, 23, 28, 33, 39, 44, 50]],
  ["XI03", "Extended Investigation", "standard", [22, 27, 33, 38, 42, 47, 50]],
  ["FT", "Food Studies", "courseworkHeavy", [14, 19, 23, 29, 35, 42, 50]],
  ["GE", "Geography", "standard", [18, 23, 28, 34, 39, 45, 50]],
  ["HH", "Health and Human Development", "standard", [16, 21, 26, 31, 37, 43, 50]],
  ["HI17", "History: Ancient History", "standard", [16, 21, 27, 33, 39, 45, 50]],
  ["HA", "History: Australian History", "standard", [18, 23, 29, 34, 40, 45, 50]],
  ["HR", "History: Revolutions", "standard", [18, 23, 29, 34, 40, 45, 50]],
  ["LS", "Legal Studies", "standard", [18, 23, 28, 34, 40, 45, 50]],
  ["LI", "Literature", "standard", [20, 26, 31, 36, 41, 46, 50], true],
  ["MA10", "Foundation Mathematics", "foundationMathematics", [12, 16, 20, 26, 32, 40, 50]],
  ["NF", "General Mathematics", "generalMathematics", [18, 23, 28, 33, 38, 44, 50]],
  ["NJ", "Mathematical Methods", "methods", [21, 28, 35, 41, 46, 49, 51]],
  ["NS", "Specialist Mathematics", "methods", [29, 36, 43, 48, 51, 54, 55]],
  ["ME", "Media", "media", [16, 21, 26, 32, 38, 44, 50]],
  ["OS", "Outdoor and Environmental Studies", "courseworkHeavy", [15, 20, 24, 30, 36, 42, 50]],
  ["PL", "Philosophy", "standard", [19, 24, 29, 35, 40, 45, 50]],
  ["PE", "Physical Education", "standard", [17, 22, 27, 33, 38, 44, 50]],
  ["PH", "Physics", "physics", [20, 26, 32, 37, 42, 47, 50]],
  ["PS06", "Politics", "standard", [21, 27, 32, 37, 42, 46, 50]],
  ["DT", "Product Design and Technologies", "productDesign", [14, 19, 24, 29, 36, 42, 50]],
  ["PY", "Psychology", "science", [18, 23, 28, 34, 39, 45, 50]],
  ["RS", "Religion and Society", "standard", [18, 23, 28, 34, 39, 45, 50]],
  ["SO03", "Sociology", "standard", [15, 20, 25, 31, 38, 44, 50]],
  ["SE03", "Systems Engineering", "productDesign", [17, 21, 26, 32, 37, 43, 50]],
  ["TS", "Theatre Studies", "theatre", [18, 23, 28, 34, 39, 45, 50]],
  ["VC", "Visual Communication Design", "productDesign", [16, 21, 26, 32, 38, 44, 50]],
  ["AR", "Arabic", "language", [20, 25, 30, 34, 39, 44, 50]],
  ["CN", "Chinese First Language", "chineseFirstLanguage", [18, 25, 33, 39, 45, 48, 50]],
  ["LO57", "Chinese Language, Culture and Society", "chineseLanguageCultureSociety", [22, 28, 33, 38, 43, 47, 50]],
  ["CK", "Chinese Second Language Advanced", "language", [24, 31, 37, 42, 47, 50, 52]],
  ["CL", "Chinese Second Language", "language", [29, 35, 41, 45, 49, 52, 54]],
  ["FR", "French", "language", [30, 36, 41, 45, 49, 51, 53]],
  ["GN", "German", "language", [27, 34, 39, 44, 48, 51, 53]],
  ["MG", "Greek", "language", [24, 30, 35, 40, 44, 47, 50]],
  ["HI", "Hindi", "language", [23, 30, 36, 42, 46, 50, 52]],
  ["IX", "Indonesian Second Language", "language", [26, 32, 38, 42, 46, 49, 52]],
  ["IL", "Italian", "language", [27, 33, 38, 42, 45, 48, 50]],
  ["JS", "Japanese Second Language", "language", [26, 32, 38, 43, 46, 49, 51]],
  ["KS", "Korean Second Language", "language", [21, 29, 36, 42, 47, 51, 53]],
  ["LA", "Latin", "standard", [35, 42, 46, 50, 53, 54, 55]],
  ["PN", "Persian", "language", [16, 20, 24, 29, 34, 40, 50]],
  ["LO49", "Punjabi", "language", [22, 28, 33, 39, 43, 47, 50]],
  ["RU", "Russian", "language", [23, 29, 34, 39, 44, 47, 50]],
  ["SP", "Spanish", "language", [26, 31, 35, 40, 44, 47, 50]],
  ["TU", "Turkish", "language", [21, 25, 29, 34, 38, 43, 50]],
  ["LO31", "Vietnamese Second Language", "language", [26, 31, 36, 40, 43, 47, 50]],
];

export const SUBJECTS: readonly SubjectDefinition[] = SUBJECT_SEEDS.map(
  ([code, name, profileName, scaling, englishGroup = false]) => ({
    code,
    name,
    englishGroup,
    ...ASSESSMENT_PROFILES[profileName],
    examMaximumMarks: resolveExamMaximumMarks(
      code,
      ASSESSMENT_PROFILES[profileName].examWeights,
    ),
    examPerformanceAnchors: resolveExamPerformanceAnchors(code),
    scaling,
  }),
);

export const SUBJECT_BY_CODE: ReadonlyMap<string, SubjectDefinition> = new Map(
  SUBJECTS.map((subject) => [subject.code, subject]),
);
