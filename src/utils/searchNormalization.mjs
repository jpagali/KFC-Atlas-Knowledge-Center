export function normalizeText(value) {
  return (value || '')
    .normalize('NFKC')
    .toLocaleLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

export function buildNormalizedSearchFields({title, headings, body}) {
  return {
    normalizedTitle: normalizeText(title),
    normalizedHeadings: normalizeText(Array.isArray(headings) ? headings.join(' ') : headings),
    normalizedBody: normalizeText(body),
  };
}
