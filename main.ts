import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Word, First Thought — writes exactly one word to the grader's
// output dir. The output directory is resolved from the environment
// (MAKEFUN_OUTPUT_DIR), never a bare relative path.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The entry: the first word that came to mind. One word, nothing else —
// surprising, vivid and specific, with a spark of wit in its sound.
// The noun beats the verb: it names the whole absurd event, not an order.
const ENTRY = "defenestration";

mkdirSync(outputDir, { recursive: true });

// Clear only the CONTENTS of the output dir, never the dir itself.
for (const name of readdirSync(outputDir)) {
  rmSync(join(outputDir, name), { recursive: true, force: true });
}

writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
