import examMarksJson from "./exam-marks.json" with { type: "json" };

export type SubjectDefinition = {
  code: string;
  name: string;
  englishGroup: boolean;
  unit3Weight: number;
  unit4Weight: number;
  examWeights: readonly number[];
  examLabels: readonly string[];
  examMaximumMarks: readonly number[];
  scaling: readonly [number, number, number, number, number, number, number];
};

type SubjectSeed = readonly [
  code: string,
  name: string,
  profile: keyof typeof ASSESSMENT_PROFILES,
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
} as const;

const examMaximumMarksByVCAAName = examMarksJson as Record<
  string,
  readonly number[]
>;

const VCAA_NAME_ALIASES: Readonly<Record<string, string>> = {
  "agricultural & horticultural studies":
    "Agricultural and Horticultural Studies",
  "data analytics": "Applied Computing: Data Analytics",
  "software development": "Applied Computing: Software Development",
  "history: ancient history": "Ancient History",
  "history: australian history": "Australian History",
  "history: revolutions": "History Revolutions",
};

const EXTERNAL_ASSESSMENT_OVERRIDES: Readonly<Record<string, readonly number[]>> = {
  "Extended Investigation": [200],
};

function resolveExamMaximumMarks(
  subjectName: string,
  examWeights: readonly number[],
): readonly number[] {
  const canonicalName =
    VCAA_NAME_ALIASES[subjectName.toLowerCase()] ?? subjectName;
  const publishedMarks =
    EXTERNAL_ASSESSMENT_OVERRIDES[subjectName] ??
    examMaximumMarksByVCAAName[canonicalName];

  if (!publishedMarks) {
    throw new Error(`Missing VCAA exam mark data for ${subjectName}.`);
  }

  if (publishedMarks.length === examWeights.length) {
    return publishedMarks;
  }

  if (publishedMarks.length === 1 && examWeights.length === 2) {
    const totalWeight = examWeights.reduce((total, weight) => total + weight, 0);
    return examWeights.map((weight) =>
      Math.round((publishedMarks[0] * weight) / totalWeight),
    );
  }

  throw new Error(`Exam mark data does not match the assessment profile for ${subjectName}.`);
}

const SUBJECT_SEEDS: readonly SubjectSeed[] = [
  ["AC", "Accounting", "standard", [20, 25, 31, 36, 41, 46, 50]],
  ["AH", "Agricultural & Horticultural Studies", "courseworkHeavy", [15, 19, 24, 29, 34, 41, 50]],
  ["AL03", "Algorithmics (HESS)", "examHeavy", [24, 31, 38, 43, 47, 50, 51]],
  ["IT02", "Data Analytics", "standard", [16, 21, 26, 32, 38, 44, 50]],
  ["IT03", "Software Development", "standard", [17, 22, 28, 33, 39, 45, 50]],
  ["AT", "Art Creative Practice", "courseworkHeavy", [16, 21, 27, 32, 38, 44, 50]],
  ["SA", "Art Making and Exhibiting", "courseworkHeavy", [15, 20, 25, 31, 37, 44, 50]],
  ["BI", "Biology", "science", [19, 25, 31, 36, 41, 46, 50]],
  ["BM", "Business Management", "standard", [17, 22, 27, 32, 38, 44, 50]],
  ["CH", "Chemistry", "science", [22, 28, 34, 39, 44, 47, 50]],
  ["CC", "Classical Studies", "standard", [19, 25, 30, 36, 41, 46, 50]],
  ["DA", "Dance", "performance", [18, 23, 27, 32, 37, 43, 50]],
  ["DR", "Drama", "performance", [18, 23, 28, 33, 39, 45, 50]],
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
  ["MA10", "Foundation Mathematics", "standard", [12, 16, 20, 26, 32, 40, 50]],
  ["NF", "General Mathematics", "mathematics", [18, 23, 28, 33, 38, 44, 50]],
  ["NJ", "Mathematical Methods", "methods", [21, 28, 35, 41, 46, 49, 51]],
  ["NS", "Specialist Mathematics", "methods", [29, 36, 43, 48, 51, 54, 55]],
  ["ME", "Media", "standard", [16, 21, 26, 32, 38, 44, 50]],
  ["OS", "Outdoor and Environmental Studies", "courseworkHeavy", [15, 20, 24, 30, 36, 42, 50]],
  ["PL", "Philosophy", "standard", [19, 24, 29, 35, 40, 45, 50]],
  ["PE", "Physical Education", "standard", [17, 22, 27, 33, 38, 44, 50]],
  ["PH", "Physics", "science", [20, 26, 32, 37, 42, 47, 50]],
  ["PS06", "Politics", "standard", [21, 27, 32, 37, 42, 46, 50]],
  ["DT", "Product Design and Technologies", "courseworkHeavy", [14, 19, 24, 29, 36, 42, 50]],
  ["PY", "Psychology", "science", [18, 23, 28, 34, 39, 45, 50]],
  ["RS", "Religion and Society", "standard", [18, 23, 28, 34, 39, 45, 50]],
  ["SO03", "Sociology", "standard", [15, 20, 25, 31, 38, 44, 50]],
  ["SE03", "Systems Engineering", "courseworkHeavy", [17, 21, 26, 32, 37, 43, 50]],
  ["TS", "Theatre Studies", "performance", [18, 23, 28, 34, 39, 45, 50]],
  ["VC", "Visual Communication Design", "courseworkHeavy", [16, 21, 26, 32, 38, 44, 50]],
  ["AR", "Arabic", "language", [20, 25, 30, 34, 39, 44, 50]],
  ["CN", "Chinese First Language", "language", [18, 25, 33, 39, 45, 48, 50]],
  ["LO57", "Chinese Language, Culture and Society", "language", [22, 28, 33, 38, 43, 47, 50]],
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
  ["LA", "Latin", "language", [35, 42, 46, 50, 53, 54, 55]],
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
      name,
      ASSESSMENT_PROFILES[profileName].examWeights,
    ),
    scaling,
  }),
);

export const SUBJECT_BY_CODE: ReadonlyMap<string, SubjectDefinition> = new Map(
  SUBJECTS.map((subject) => [subject.code, subject]),
);
