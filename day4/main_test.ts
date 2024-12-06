import { assertEquals } from "@std/assert";
import { countX_MAS, countXMAS } from "./main.ts";

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

Deno.test(function addTest() {
  assertEquals(
    countX_MAS(`M.S
.A.
M.S`),
    1,
  );
});

Deno.test(function addTest() {
  assertEquals(
    countX_MAS(`.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........`),
    9,
  );
});
