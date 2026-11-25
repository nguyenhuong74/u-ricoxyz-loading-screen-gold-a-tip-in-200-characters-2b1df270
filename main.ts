import { writeFileSync } from "node:fs";

// Loading Screen Gold entry.
// One sharp, funny loading-screen tip, at most 200 characters, for
// stressed developers and AI coding agents — funny enough to land
// mid-build.

export const TIP =
  "Tip: the spinner isn't stuck — your AI agent is re-reading the prompt you typed at 2 a.m. and deciding how to tell you it can't do that.";

// The gate (sealed scorer): /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only white space. One tip, one line.
export function validate(tip: string): void {
  if (tip.length < 1 || tip.length > 200) {
    throw new Error(
      `tip must be 1-200 characters, got ${tip.length}`,
    );
  }
  if (tip.trim().length === 0) {
    throw new Error("tip must not be only whitespace");
  }
  if (tip.includes("\n") || tip.includes("\r")) {
    throw new Error("tip must be a single line");
  }
}

function main(): void {
  validate(TIP);
  writeFileSync("/output/entry.txt", TIP, "utf8");
}

main();
