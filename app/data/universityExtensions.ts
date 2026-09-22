export type UniversityExtensionStudy = Readonly<{
  id: string;
  subjectName: string;
}>;

export type UniversityExtensionProvider = Readonly<{
  universityName: string;
  studies: readonly UniversityExtensionStudy[];
}>;

export type UniversityExtensionOption = UniversityExtensionStudy &
  Readonly<{
    universityName: string;
  }>;

export const UNIVERSITY_EXTENSION_SOURCE = {
  year: 2026,
  url: "https://vcaa.vic.edu.au/sites/default/files/2026-04/2026HigherEducationStudiesSummaryOfCourses.docx",
} as const;

export const UNIVERSITY_EXTENSION_PROVIDERS = [
  {
    universityName: "Deakin University",
    studies: [
      { id: "deakin-accounting", subjectName: "Accounting" },
      { id: "deakin-criminology", subjectName: "Criminology" },
      {
        id: "deakin-disability-diversity-inclusion",
        subjectName: "Disability, Diversity and Inclusion",
      },
      {
        id: "deakin-exercise-nutrition-science",
        subjectName: "Exercise and Nutrition Science",
      },
      { id: "deakin-food-nutrition", subjectName: "Food and Nutrition" },
      {
        id: "deakin-health-practice-research",
        subjectName: "Health Practice and Research",
      },
      { id: "deakin-journalism", subjectName: "Journalism" },
      { id: "deakin-law", subjectName: "Law" },
      { id: "deakin-management-law", subjectName: "Management and Law" },
      {
        id: "deakin-management-marketing",
        subjectName: "Management and Marketing",
      },
      {
        id: "deakin-physical-education-sport-science",
        subjectName: "Physical Education and Sport Science",
      },
      {
        id: "deakin-psychological-science",
        subjectName: "Psychological Science",
      },
      { id: "deakin-public-relations", subjectName: "Public Relations" },
      { id: "deakin-sport-management", subjectName: "Sport Management" },
      { id: "deakin-future-technologies", subjectName: "Future Technologies" },
      { id: "deakin-science", subjectName: "Science" },
      {
        id: "deakin-robotics-data-science",
        subjectName: "Robotics and Data Science",
      },
    ],
  },
  {
    universityName: "Federation University",
    studies: [
      { id: "federation-biological-science", subjectName: "Biological Science" },
      {
        id: "federation-health-physical-education",
        subjectName: "Health and Physical Education",
      },
      {
        id: "federation-information-technology",
        subjectName: "Information Technology",
      },
      {
        id: "federation-introduction-psychology",
        subjectName: "Introduction to Psychology",
      },
      { id: "federation-maths-analysis", subjectName: "Maths and Analysis" },
      { id: "federation-business", subjectName: "Business" },
      {
        id: "federation-criminology-criminal-justice",
        subjectName: "Criminology and Criminal Justice",
      },
      {
        id: "federation-humanities-social-sciences",
        subjectName: "Humanities and Social Sciences",
      },
    ],
  },
  {
    universityName: "La Trobe University",
    studies: [
      { id: "latrobe-health-sciences", subjectName: "Health Sciences" },
      { id: "latrobe-human-biosciences", subjectName: "Human Biosciences" },
      { id: "latrobe-law", subjectName: "Law" },
      {
        id: "latrobe-politics-philosophy-economics",
        subjectName: "Politics, Philosophy and Economics",
      },
      { id: "latrobe-criminology", subjectName: "Criminology" },
    ],
  },
  {
    universityName: "Monash University",
    studies: [
      { id: "monash-climate-change", subjectName: "Climate Change" },
      { id: "monash-history", subjectName: "History" },
      { id: "monash-astronomy", subjectName: "Astronomy" },
      { id: "monash-criminology", subjectName: "Criminology" },
    ],
  },
  {
    universityName: "Planetshakers College",
    studies: [
      {
        id: "planetshakers-theological-biblical-studies",
        subjectName: "Introduction to Theological and Biblical Studies",
      },
    ],
  },
  {
    universityName: "RMIT University",
    studies: [
      {
        id: "rmit-industrial-digital-design",
        subjectName: "Industrial and Digital Design",
      },
    ],
  },
  {
    universityName: "Swinburne University",
    studies: [
      { id: "swinburne-space-industry", subjectName: "Space Industry" },
      { id: "swinburne-bachelor-laws", subjectName: "Bachelor of Laws" },
      {
        id: "swinburne-marketing-consumer-experience",
        subjectName: "Marketing and the Consumer Experience",
      },
    ],
  },
  {
    universityName: "University of Melbourne",
    studies: [
      { id: "unimelb-advanced-french", subjectName: "Advanced French" },
      { id: "unimelb-advanced-german", subjectName: "Advanced German" },
      { id: "unimelb-advanced-japanese", subjectName: "Advanced Japanese" },
      { id: "unimelb-biology", subjectName: "Biology" },
      { id: "unimelb-french", subjectName: "French" },
      {
        id: "unimelb-further-advanced-japanese",
        subjectName: "Further Advanced Japanese",
      },
      { id: "unimelb-german", subjectName: "German" },
      { id: "unimelb-hebrew", subjectName: "Hebrew" },
      { id: "unimelb-italian", subjectName: "Italian" },
      { id: "unimelb-japanese", subjectName: "Japanese" },
      { id: "unimelb-mathematics", subjectName: "Mathematics" },
      { id: "unimelb-philosophy", subjectName: "Philosophy" },
      { id: "unimelb-physics", subjectName: "Physics" },
      { id: "unimelb-psychology", subjectName: "Psychology" },
    ],
  },
  {
    universityName: "Victoria University",
    studies: [
      {
        id: "victoria-educating-future",
        subjectName: "Educating for the Future",
      },
    ],
  },
] as const satisfies readonly UniversityExtensionProvider[];

export const UNIVERSITY_EXTENSION_OPTIONS: readonly UniversityExtensionOption[] =
  UNIVERSITY_EXTENSION_PROVIDERS.flatMap((provider) =>
    provider.studies.map((study) => ({
      ...study,
      universityName: provider.universityName,
    })),
  );

export const UNIVERSITY_EXTENSION_OPTION_BY_ID = new Map(
  UNIVERSITY_EXTENSION_OPTIONS.map((option) => [option.id, option]),
);

export function formatUniversityExtensionOption(
  option: UniversityExtensionOption,
): string {
  return `${option.subjectName} - ${option.universityName}`;
}

export function parseUniversityExtensionOptionId(value: string | null): string {
  return value !== null && UNIVERSITY_EXTENSION_OPTION_BY_ID.has(value) ? value : "";
}
