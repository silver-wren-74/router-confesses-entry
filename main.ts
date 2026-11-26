import { mkdirSync, writeFileSync } from "node:fs";

// The Router Confesses — one line, in the router's own voice.
// The router carries the stream, so it reaches the climax first:
// it saw the killer's face before anyone in the house did, and
// dropped the connection because no appliance should have to
// carry a spoiler that big alone.
//
// Revision pass: the gate refuses anything over 200 characters,
// so the line is length-checked before it is written — a failed
// write must never leave an invalid entry behind.
const LINE =
  "I saw the killer's face before you did — and honestly, no router should have to carry a spoiler that big alone.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
