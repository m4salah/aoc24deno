function intersection(a: number[], b: number[]): boolean {
  return a.filter((value) => b.includes(value)).length > 0;
}
function solve(input: string) {
  const [rules, lines] = input.split("\n\n");
  const rulesMap = new Map<number, number[]>();
  for (const rule of rules.split("\n")) {
    const [before, after] = rule.split("|");
    if (before && after) {
      const mapAfter = rulesMap.get(parseInt(after));
      if (mapAfter) {
        mapAfter.push(parseInt(before));
      } else {
        rulesMap.set(parseInt(after), [parseInt(before)]);
      }
    }
  }

  let result = 0;
  for (const line of lines.split("\n")) {
    const ns = line
      .split(",")
      .filter(Boolean)
      .map((n) => parseInt(n));

    if (ns.length) {
      let valid = true;
      for (let i = 0; i < ns.length - 1; i++) {
        const shouldBefore = rulesMap.get(ns[i])!;
        if (intersection(shouldBefore, ns.slice(i + 1))) {
          valid = false;
        }
      }
      if (valid) {
        result += ns[Math.floor(ns.length / 2)];
      }
    }
  }

  return result;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const result = solve(await Deno.readTextFile("./input.txt"));
  console.log(result);
}
