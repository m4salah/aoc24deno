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
  let result = 0;
  for (let y = 0; y < n_row; y++) {
    for (let x = 0; x < n_col; x++) {
      if (rows[y][x] == "X") {
        if (isFoundForward(rows, x, y)) {
          result += 1;
        }
        if (isFoundBackward(rows, x, y)) {
          result += 1;
        }
        if (isFoundAbove(rows, x, y)) {
          result += 1;
        }
        if (isFoundBottom(rows, x, y)) {
          result += 1;
        }
        if (isAboveFoward(rows, x, y)) {
          result += 1;
        }
        if (isAboveBackward(rows, x, y)) {
          result += 1;
        }
        if (isBottomForward(rows, x, y)) {
          result += 1;
        }
        if (isBottomBackward(rows, x, y)) {
          result += 1;
        }
      }
    }
  }
  return result;
}

function isAboveFowardX(
  rows: string[],
  x: number,
  y: number,
): [boolean, number, number] {
  return [
    rows[y][x] == "M" &&
      rows[y - 1]?.[x + 1] == "A" &&
      rows[y - 2]?.[x + 2] == "S",
    x + 1,
    y - 1,
  ];
}

function isAboveBackwardX(
  rows: string[],
  x: number,
  y: number,
): [boolean, number, number] {
  return [
    rows[y][x] == "M" &&
      rows[y - 1]?.[x - 1] == "A" &&
      rows[y - 2]?.[x - 2] == "S",
    x - 1,
    y - 1,
  ];
}

function isBottomForwardX(
  rows: string[],
  x: number,
  y: number,
): [boolean, number, number] {
  return [
    rows[y][x] == "M" &&
      rows[y + 1]?.[x + 1] == "A" &&
      rows[y + 2]?.[x + 2] == "S",
    x + 1,
    y + 1,
  ];
}

function isBottomBackwardX(
  rows: string[],
  x: number,
  y: number,
): [boolean, number, number] {
  return [
    rows[y][x] == "M" &&
      rows[y + 1]?.[x - 1] == "A" &&
      rows[y + 2]?.[x - 2] == "S",
    x - 1,
    y + 1,
  ];
}
export function countX_MAS(input: string): number {
  const rows = input.split("\n");
  const n_row = rows.length;
  const n_col = rows[0].length;
  rows.forEach(function (entry) {
    console.log(entry);
  });

  const mapA = new Map<string, number>();
  for (let y = 0; y < n_row; y++) {
    for (let x = 0; x < n_col; x++) {
      if (rows[y][x] == "M") {
        const isAboveFoward = isAboveFowardX(rows, x, y);
        const isAboveBackward = isAboveBackwardX(rows, x, y);
        const isBottomForward = isBottomForwardX(rows, x, y);
        const isBottomBackward = isBottomBackwardX(rows, x, y);
        if (isAboveFoward[0]) {
          const k = mapA.get(`${isAboveFoward[1]},${isAboveFoward[2]}`);
          if (k) {
            mapA.set(`${isAboveFoward[1]},${isAboveFoward[2]}`, k + 1);
          } else {
            mapA.set(`${isAboveFoward[1]},${isAboveFoward[2]}`, 1);
          }
        }
        if (isAboveBackward[0]) {
          const k = mapA.get(`${isAboveBackward[1]},${isAboveBackward[2]}`);
          if (k) {
            mapA.set(`${isAboveBackward[1]},${isAboveBackward[2]}`, k + 1);
          } else {
            mapA.set(`${isAboveBackward[1]},${isAboveBackward[2]}`, 1);
          }
        }

        if (isBottomForward[0]) {
          const k = mapA.get(`${isBottomForward[1]},${isBottomForward[2]}`);
          if (k) {
            mapA.set(`${isBottomForward[1]},${isBottomForward[2]}`, k + 1);
          } else {
            mapA.set(`${isBottomForward[1]},${isBottomForward[2]}`, 1);
          }
        }

        if (isBottomBackward[0]) {
          const k = mapA.get(`${isBottomBackward[1]},${isBottomBackward[2]}`);
          if (k) {
            mapA.set(`${isBottomBackward[1]},${isBottomBackward[2]}`, k + 1);
          } else {
            mapA.set(`${isBottomBackward[1]},${isBottomBackward[2]}`, 1);
          }
        }
      }
    }
  }
  console.log(mapA);
  return Array.from(mapA.values().filter((v) => v == 2)).length;
}

if (import.meta.main) {
  const result = countX_MAS(await Deno.readTextFile("./input.txt"));
  console.log(result);
}
