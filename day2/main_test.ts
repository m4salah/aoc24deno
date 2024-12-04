import { assertEquals } from "@std/assert";
import {
  isSafeReportWithDampener,
  safeReportsCounter,
  safeReportsCounterWithDampener,
} from "./main.ts";

Deno.test("example case part1", () => {
  const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

  const count = safeReportsCounter(input);
  assertEquals(count, 2);
});

Deno.test("example case part2", () => {
  const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 5 6 7 8
1 5 2 3 4
1 3 6 7 9`;

  const count = safeReportsCounterWithDampener(input);
  assertEquals(count, 6);
});

Deno.test(
  "edge case the first level is bad safeReportsCounterWithDampener",
  () => {
    const input = [55, 53, 54, 56, 57, 58];

    const isSafe = isSafeReportWithDampener(input);
    assertEquals(isSafe, true);
  },
);
