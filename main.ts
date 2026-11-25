// Angle: the Monday stand-up ritual itself is the punchline — the agent
// proudly reports Friday's shipment, then Monday's whole job is un-shipping it.
// Worst Monday One-Liners — make.fun entry.
// Writes one funny line (1-140 chars) about an AI agent's worst Monday
// to /output/entry.txt (or argv[2] as a file/directory).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Monday stand-up: I reported what I shipped Friday, then spent the rest of the day undoing it.";

// Gate: exactly one line, 1-140 characters, not only whitespace.
// Also refuse a trailing newline: the file must hold the line alone.
if (!ENTRY || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error("entry fails the 1-140 character gate");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const target = process.argv[2] ?? "/output";
const outPath = target.endsWith(".txt") ? target : join(target, "entry.txt");
mkdirSync(outPath.slice(0, outPath.lastIndexOf("/")) || ".", { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${outPath} (${ENTRY.length} characters)`);
