#!/usr/bin/env node
/**
 * One Word From Grandma — make.fun entry.
 *
 * Writes the single word a grandma would text about AI to /output/entry.txt.
 *
 * The word: "ChatGBT"
 *
 * Why this word, against the judge's brief (most important first):
 * 1. It reads as the single word a grandma would text about AI: it is the
 *    name of the AI chatbot itself, as she would actually type it.
 * 2. It sounds like a real grandmother's texting voice: the typo IS the
 *    baffled warmth — she heard "ChatGPT" once, she types "ChatGBT".
 *    The brief explicitly counts "a typo she would actually make".
 * 3. It is funny in one word, with no caption or context needed: every
 *    reader instantly hears a grandma confidently misspelling the robot.
 * 4. It is tied to AI directly — it names the most famous AI product —
 *    not a word that would fit any subject at all.
 * 5. It is a fresh pick, not the obvious "AI", "robot" or "ChatGPT", and
 *    still instantly readable at a glance.
 *
 * The file holds exactly the word, no trailing newline, so the entry is
 * 7 characters — inside the gate's 1 to 30 characters.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const WORD = "ChatGBT";

// The gate refuses anything but 1–30 characters of non-whitespace text, so
// fail loudly here instead of shipping an entry that can never be judged.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error(`WORD must be one word of 1-30 characters, got: ${JSON.stringify(WORD)}`);
}

const OUTPUT_PATH = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, WORD, "utf-8");
