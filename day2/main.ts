function isSafeReport(arr: number[]): boolean {
  const mode: "inc" | "dec" = arr[0] < arr[1] ? "inc" : "dec";

  for (let i = 1; i < arr.length; i++) {
    // Maintain the mode
    const diff = arr[i] - arr[i - 1];
    if (diff == 0) {
      return false;
    }

    if (mode == "dec" && diff > 0) {
      return false;
    }

    if (mode == "inc" && diff < 0) {
      return false;
    }

    if (Math.abs(diff) > 3) {
      return false;
    }
  }

  return true;
}

export function safeReportsCounter(input: string) {
  const lines = input.split("\n");
  let result = 0;
  for (const line of lines) {
    const arr = line
      .split(" ")
      .filter(Boolean)
      .map((n) => parseInt(n));

    if (arr?.length && isSafeReport(arr)) {
      result++;
    }
  }
  return result;
}

export function safeReportsCounterWithDampener(input: string) {
  const lines = input.split("\n");
  let result = 0;
  for (const line of lines) {
    const arr = line
      .split(" ")
      .filter(Boolean)
      .map((n) => parseInt(n));

    if (arr?.length) {
      if (isSafeReport(arr)) {
        result++;
      } else {
        // Brute force solution.
        for (let i = 0; i < arr.length; i++) {
          const removedI = [...arr.slice(0, i), ...arr.slice(i + 1)];
          if (isSafeReport(removedI)) {
            result++;
            break;
          }
        }
      }
    }
  }
  return result;
}

if (import.meta.main) {
  const input = await Deno.readTextFile("./input.txt");
  const count = safeReportsCounterWithDampener(input);
  console.log(count);
}
