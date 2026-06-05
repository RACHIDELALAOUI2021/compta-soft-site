export function getValidClientCodes(): Set<string> {
  const raw = process.env.VALID_CLIENT_CODES ?? "";
  return new Set(
    raw
      .split(",")
      .map((code) => code.trim().toUpperCase())
      .filter(Boolean)
  );
}

export function normalizeClientCode(code: string): string {
  return code.trim().toUpperCase();
}

export function isValidClientCode(code: string): boolean {
  const normalized = normalizeClientCode(code);
  if (!normalized) return false;
  const validCodes = getValidClientCodes();
  return validCodes.size > 0 && validCodes.has(normalized);
}
