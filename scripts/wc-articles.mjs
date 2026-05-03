import fs from "fs";
const src = fs.readFileSync("./lib/articles.ts", "utf8");
const slugs = [
  "architectural-fork",
  "integrated-delivery",
  "vendor-partner-trap",
  "agile-fall",
  "six-constellations",
  "beehive",
];
const stringRegex = /"((?:[^"\\]|\\.){40,}?)"/g;
for (let i = 0; i < slugs.length; i++) {
  const slug = slugs[i];
  const idx = src.indexOf(`slug: "${slug}"`);
  const nextSlugIdx =
    i === slugs.length - 1 ? src.length : src.indexOf(`slug: "${slugs[i + 1]}"`);
  const section = src.slice(idx, nextSlugIdx);
  let bodyOnly = "";
  let m;
  stringRegex.lastIndex = 0;
  while ((m = stringRegex.exec(section)) !== null) {
    let s = m[1];
    s = s.replace(/\\"/g, '"').replace(/\\\*/g, "*");
    s = s.replace(/\*\*/g, "").replace(/\*/g, "");
    if (s.length < 40) continue;
    bodyOnly += " " + s;
  }
  const words = bodyOnly.trim().split(/\s+/).filter(Boolean).length;
  console.log(`${slug}: ${words} words`);
}
