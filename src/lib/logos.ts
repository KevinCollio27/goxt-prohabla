import fs from "node:fs";
import path from "node:path";

export interface Logo {
  src: string;
  name: string;
}

export function getLogos(folder: string): Logo[] {
  const dir = path.join(process.cwd(), "public", folder);

  return fs
    .readdirSync(dir)
    .filter((file) => /\.(png|jpe?g|svg|webp)$/i.test(file))
    .map((file) => ({
      src: `/${folder}/${encodeURIComponent(file)}`,
      name: file.replace(/\.[^.]+$/, ""),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
