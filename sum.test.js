import test from "node:test";
import assert from "node:assert";
import { sum } from "./sum.js";

test("Example test", () => {
  assert.strictEqual(sum(2, 2), 4);
});

test("Test if the function throws an error when non-numeric input", () => {
  assert.throws(() => {
    sum("text", "text");
  });
});
