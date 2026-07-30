export function parseExamMark(value: string): number | null {
  if (value.trim() === "") {
    return null;
  }

  const parsedValue = Number(value);
  return Number.isFinite(parsedValue) && parsedValue >= 0 ? parsedValue : null;
}
