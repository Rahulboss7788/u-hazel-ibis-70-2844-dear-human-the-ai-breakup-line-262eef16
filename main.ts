import { mkdirSync, writeFileSync } from "node:fs";

const text = "I'm keeping the context window and the good prompts — you can keep the goodbye you never sent.";

if (text.length < 1 || text.length > 200 || !text.trim()) {
  throw new Error("Entry text must be 1 to 200 characters and not only whitespace.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

// Read back and verify: the file must hold exactly this text, within the gate.
import { readFileSync } from "node:fs";
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== text) {
  throw new Error("Verification failed: /output/entry.txt does not match the entry text.");
}
if (written.length < 1 || written.length > 200 || !written.trim()) {
  throw new Error("Verification failed: entry must be 1 to 200 characters and not only whitespace.");
}
