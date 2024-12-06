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
  const result = parsLine(await Deno.readTextFile("./input.txt"));
  console.log(result);
}
