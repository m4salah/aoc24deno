import { delay } from "https://deno.land/x/delay@v0.2.0/mod.ts";

async function renderMap(map: string[][]) {
  console.clear();
  console.log(map.map((row) => row.join("     ")).join("\n"));
  await delay(50);
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

  const newMap = map;
  if (isPositionOutsideMap(x, y, width, height)) {
    newMap[y][x] = "X";
    return newMap;
  }

  let newX = x;
  let newY = y;

  if (map[y][x] == ">") {
    if (isValidMove(x + 1, y, map)) {
      newMap[y][x] = "X";
      newMap[y][x + 1] = ">";
      newX = x + 1;
      newY = y;
    } else {
      newMap[y][x] = "v";
    }
  }
  if (map[y][x] == "<") {
    if (isValidMove(x - 1, y, map)) {
      newMap[y][x] = "X";
      newMap[y][x - 1] = "<";
      newX = x - 1;
      newY = y;
    } else {
      newMap[y][x] = "^";
    }
  }
  if (map[y][x] == "^") {
    if (isValidMove(x, y - 1, map)) {
      newMap[y][x] = "X";
      newMap[y - 1][x] = "^";
      newX = x;
      newY = y - 1;
    } else {
      newMap[y][x] = ">";
    }
  }
  if (map[y][x] == "v") {
    if (isValidMove(x, y + 1, map)) {
      newMap[y][x] = "X";
      newMap[y + 1][x] = "v";
      newX = x;
      newY = y + 1;
    } else {
      newMap[y][x] = "<";
    }
  }
  await renderMap(newMap);
  return solve(newMap, newX, newY);
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
