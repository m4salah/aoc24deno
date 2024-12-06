function isFoundForward(rows: string[], x: number, y: number): boolean {
  return (
    rows[y][x] == "X" &&
    rows[y]?.[x + 1] == "M" &&
    rows[y]?.[x + 2] == "A" &&
    rows[y]?.[x + 3] == "S"
  );
}

function isFoundBackward(rows: string[], x: number, y: number): boolean {
  return (
    rows[y][x] == "X" &&
    rows[y]?.[x - 1] == "M" &&
    rows[y]?.[x - 2] == "A" &&
    rows[y]?.[x - 3] == "S"
  );
}

function isFoundAbove(rows: string[], x: number, y: number): boolean {
  return (
    rows[y][x] == "X" &&
    rows[y - 1]?.[x] == "M" &&
    rows[y - 2]?.[x] == "A" &&
    rows[y - 3]?.[x] == "S"
  );
}

function isFoundBottom(rows: string[], x: number, y: number): boolean {
  return (
    rows[y][x] == "X" &&
    rows[y + 1]?.[x] == "M" &&
    rows[y + 2]?.[x] == "A" &&
    rows[y + 3]?.[x] == "S"
  );
}

function isAboveFoward(rows: string[], x: number, y: number): boolean {
  return (
    rows[y][x] == "X" &&
    rows[y - 1]?.[x + 1] == "M" &&
    rows[y - 2]?.[x + 2] == "A" &&
    rows[y - 3]?.[x + 3] == "S"
  );
}

function isAboveBackward(rows: string[], x: number, y: number): boolean {
  return (
    rows[y][x] == "X" &&
    rows[y - 1]?.[x - 1] == "M" &&
    rows[y - 2]?.[x - 2] == "A" &&
    rows[y - 3]?.[x - 3] == "S"
  );
}

function isBottomForward(rows: string[], x: number, y: number): boolean {
  return (
    rows[y][x] == "X" &&
    rows[y + 1]?.[x + 1] == "M" &&
    rows[y + 2]?.[x + 2] == "A" &&
    rows[y + 3]?.[x + 3] == "S"
  );
}

function isBottomBackward(rows: string[], x: number, y: number): boolean {
  return (
    rows[y][x] == "X" &&
    rows[y + 1]?.[x - 1] == "M" &&
    rows[y + 2]?.[x - 2] == "A" &&
    rows[y + 3]?.[x - 3] == "S"
  );
}

export function countXMAS(input: string): number {
  const rows = input.split("\n");
  const n_row = rows.length;
  const n_col = rows[0].length;
  rows.forEach(function (entry) {
    console.log(entry);
  });

  let result = 0;
  for (let y = 0; y < n_row; y++) {
    for (let x = 0; x < n_col; x++) {
      if (rows[y][x] == "X") {
        if (isFoundForward(rows, x, y)) {
          console.log("found X forward", x, y);
          result += 1;
        }
        if (isFoundBackward(rows, x, y)) {
          console.log("found X backward", x, y);
          result += 1;
        }
        if (isFoundAbove(rows, x, y)) {
          console.log("found X above", x, y);
          result += 1;
        }
        if (isFoundBottom(rows, x, y)) {
          console.log("found X bottom", x, y);
          result += 1;
        }
        if (isAboveFoward(rows, x, y)) {
          console.log("found X above foward", x, y);
          result += 1;
        }
        if (isAboveBackward(rows, x, y)) {
          console.log("found X above backward", x, y);
          result += 1;
        }
        if (isBottomForward(rows, x, y)) {
          console.log("found X bottom forward", x, y);
          result += 1;
        }
        if (isBottomBackward(rows, x, y)) {
          console.log("found X bottom backward", x, y);
          result += 1;
        }
      }
    }
  }
  return result;
}

if (import.meta.main) {
  const result = countXMAS(await Deno.readTextFile("./input.txt"));
  console.log(result);
}
