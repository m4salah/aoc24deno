import { assertEquals } from "@std/assert";
import { countXMAS } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(
    countXMAS(`..X...
.SAMX.
.A..A.
XMAS.S
.X....`),
    4,
  );
});

Deno.test(function addTest() {
  assertEquals(
    countXMAS(`....XXMAS.
.SAMXMS...
...S..A...
..A.A.MS.X
XMASAMX.MM
X.....XA.A
S.S.S.S.SS
.A.A.A.A.A
..M.M.M.MM
.X.X.XMASX`),
    18,
  );
});
