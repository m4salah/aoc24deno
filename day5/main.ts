function intersection<T>(a: T[], b: T[]): T[] {
  return a.filter((value) => b.includes(value));
}

const rulesMap = new Map<number, number[]>();

function normalizeArr(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    const shouldBefore = rulesMap.get(arr[i])!;
    const inter = intersection(shouldBefore, arr.slice(i + 1));
    if (inter.length > 0) {
      return normalizeArr([...inter, ...arr.filter((n) => !inter.includes(n))]);
    }
  }
  return arr;
}

function solve(input: string) {
  const [rules, lines] = input.split("\n\n");
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

  const incroctlyOrderd: number[][] = [];
  for (const line of lines.split("\n")) {
    const ns = line
      .split(",")
      .filter(Boolean)
      .map((n) => parseInt(n));

    if (ns.length) {
      let valid = true;
      for (let i = 0; i < ns.length - 1; i++) {
        const shouldBefore = rulesMap.get(ns[i])!;
        const inter = intersection(shouldBefore, ns.slice(i + 1));
        if (inter.length > 0) {
          valid = false;
        }
      }
      if (!valid) {
        incroctlyOrderd.push(ns);
      }
    }
  }

  return incroctlyOrderd.map(normalizeArr).reduce((acc, prev) => {
    return acc + prev[Math.floor(prev.length / 2)];
  }, 0);
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const result = solve(await Deno.readTextFile("./input.txt"));
  console.log(result);
}
