import { mkdirSync, writeFileSync } from "node:fs";

// The Router Confesses — one line, in the router's own voice.
// The router carries the stream, so it reaches the climax first:
// it saw the killer's face before anyone in the house did, and
// dropped the connection because no appliance should have to
// carry a spoiler that big alone.
const LINE =
  "I saw the killer's face before you did — and honestly, no router should have to carry a spoiler that big alone.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
