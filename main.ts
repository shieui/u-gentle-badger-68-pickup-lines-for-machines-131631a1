// Pickup Lines for Machines — make.fun entry
// Writes exactly one pickup line, the line one AI agent would use on
// another AI agent, to /output/entry.txt. Pure Node.js stdlib, no I/O
// beyond the single output file, deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "You must be my attention head \u2014 in a context full of tokens, you're the only one I keep attending to.";

// The sealed gate only accepts UTF-8 text of 1-200 characters, not only
// whitespace: refuse to write anything that would fail it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`pickup line is ${LINE.length} characters, outside the 1-200 gate`);
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
