import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const FOLDERS = ["empresas", "colaboran"];

async function trimFolder(folder) {
  const srcDir = path.join(PUBLIC_DIR, folder);
  const destDir = path.join(PUBLIC_DIR, `${folder}-trimmed`);
  fs.mkdirSync(destDir, { recursive: true });

  const files = fs
    .readdirSync(srcDir)
    .filter((f) => /\.(png|jpe?g|webp)$/i.test(f));

  for (const file of files) {
    const src = path.join(srcDir, file);
    const dest = path.join(destDir, file);
    await sharp(src).trim().toFile(dest);
    console.log(`${folder}/${file} trimmed`);
  }

  console.log(`\n${folder}: ${files.length} logos processed -> ${destDir}`);
}

for (const folder of FOLDERS) {
  await trimFolder(folder);
}
