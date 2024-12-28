import { delay } from "https://deno.land/x/delay@v0.2.0/mod.ts";
import { stdout } from "node:process";

async function renderMap(map: string[][]) {
  const str = map.map((row) => row.join(" ")).join("\n");
  stdout.write("\x1b[H\x1b[J");
  console.log(str);
  await delay(16);
}

function isPositionOutsideMap(
  x: number,
  y: number,
  width: number,
  height: number,
): boolean {
  return x <= 0 || x >= width || y <= 0 || y >= height;
}

function isValidMove(x: number, y: number, map: string[][]): boolean {
  return map[y][x] != "#";
}

export async function solve(
  map: string[][],
  x: number,
  y: number,
): Promise<string[][]> {
  const height = map.length;
  const width = map[0].length;

  while (!isPositionOutsideMap(x, y, width, height)) {
    if (map[y][x] == ">") {
      if (isValidMove(x + 1, y, map)) {
        map[y][x] = "X";
        map[y][x + 1] = ">";
        x = x + 1;
      } else {
        map[y][x] = "v";
      }
    }
    if (map[y][x] == "<") {
      if (isValidMove(x - 1, y, map)) {
        map[y][x] = "X";
        map[y][x - 1] = "<";
        x = x - 1;
      } else {
        map[y][x] = "^";
      }
    }
    if (map[y][x] == "^") {
      if (isValidMove(x, y - 1, map)) {
        map[y][x] = "X";
        map[y - 1][x] = "^";
        y = y - 1;
      } else {
        map[y][x] = ">";
      }
    }
    if (map[y][x] == "v") {
      if (isValidMove(x, y + 1, map)) {
        map[y][x] = "X";
        map[y + 1][x] = "v";
        y = y + 1;
      } else {
        map[y][x] = "<";
      }
    }
    await renderMap(map);
  }
  map[y][x] = "X";
  return map;
}

if (import.meta.main) {
  const result = await solve(
    (await Deno.readTextFile("./input.txt")).split("\n").map((row) => {
      const arr = [];
      for (const char of row) {
        arr.push(char);
      }
      return arr;
    }),
    67,
    89,
  );
  for (const row of result) {
    console.log(row.join(""));
  }

  const count = result.reduce((prev, curr) => {
    return curr.filter((char) => char == "X").length + prev;
  }, 0);
  console.log(count);
}
