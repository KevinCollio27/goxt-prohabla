import type { Logo } from "@/lib/logos";

const LEGAL_SUFFIXES = /\b(spa|s\.?a\.?|ltda|limitada|eirl|inc|corp|corporation)\b\.?/gi;
const DIACRITICS = new RegExp("[\\u0300-\\u036f]", "g");

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(DIACRITICS, "")
    .toLowerCase()
    .replace(LEGAL_SUFFIXES, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function resolveCompanyLogo(companyName: string, logos: Logo[]): string | undefined {
  const target = normalize(companyName);
  if (!target) return undefined;

  const exact = logos.find((logo) => normalize(logo.name) === target);
  if (exact) return exact.src;

  const partial = logos.find((logo) => {
    const logoName = normalize(logo.name);
    return logoName.length > 0 && (logoName.includes(target) || target.includes(logoName));
  });

  return partial?.src;
}
