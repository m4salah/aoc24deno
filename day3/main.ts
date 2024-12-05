export function parsLine(line: string): number {
  const muls = line.matchAll(/(?:mul\((\d+),(\d+)\))|(do\(\))|(don't\(\))/g);
  let enableMul = true;
  return muls.reduce((acc, prev) => {
    if (prev[0] === "don't()") {
      enableMul = false;
    } else if (prev[0] === "do()") {
      enableMul = true;
    } else if (enableMul) {
      return acc + parseInt(prev[1]!) * parseInt(prev[2]!);
    }
    return acc;
  }, 0);
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const lines = (await Deno.readTextFile("./input.txt"))
    .replace(/\r/g, "")
    .split("\n")
    .filter((x) => x != "");
  const result = parsLine(await Deno.readTextFile("./input.txt"));
  console.log(result);
}

// const input = await Deno.readTextFile("./input.txt");
// const lines = input
//   .replace(/\r/g, "")
//   .split("\n")
//   .filter((x) => x != "")
//   .map((x) => x.matchAll(/(?:mul\((\d+),(\d+)\))|(?:do\(\))|(?:don't\(\))/g));
//
// let enabled = true;
// console.log(
//   lines.reduce((a, x) => {
//     let result = 0;
//     for (let y of x) {
//       if (y[0] == "don't()") enabled = false;
//       else if (y[0] == "do()") enabled = true;
//       else if (enabled) result += parseInt(y[1]) * parseInt(y[2]);
//     }
//
//     return a + result;
//   }, 0),
// );
