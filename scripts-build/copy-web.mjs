// Copies the static site into www/ (the folder Capacitor packs into the Android app).
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const out = path.join(root, "www");

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);

for (const entry of fs.readdirSync(root)) {
  if (entry.endsWith(".html")) fs.copyFileSync(path.join(root, entry), path.join(out, entry));
}
for (const dir of ["scripts", "style"]) {
  fs.cpSync(path.join(root, dir), path.join(out, dir), { recursive: true });
}
console.log("Copied web files to www/");
