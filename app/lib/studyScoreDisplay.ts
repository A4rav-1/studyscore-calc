export function formatRelativeStudyScore(score: number | null): string {
  if (score === null) {
    return "—";
  }

  return score < 20 ? "<20" : String(score);
}
