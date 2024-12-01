async function distenceAcc() {
  const lines = await Deno.readTextFile("./day1.txt").then((txt) =>
    txt.split("\n"),
  );

  const arr1: number[] = [];
  const arr2: number[] = [];
  for (const line of lines) {
    const [dis1, dis2] = line.split("   ");
    const n1 = parseInt(dis1);
    const n2 = parseInt(dis2);
    if (!isNaN(n1)) {
      arr1.push(n1);
    }
    if (!isNaN(n2)) {
      arr2.push(n2);
    }
  }
  const arr1sorted = arr1.sort();
  const arr2sorted = arr2.sort();
  let res = 0;
  for (let i = 0; i < arr1.length; i++) {
    res += Math.abs(arr1sorted[i] - arr2sorted[i]);
  }
  return res;
}

async function similarityScore() {
  const lines = await Deno.readTextFile("./day1.txt").then((txt) =>
    txt.split("\n"),
  );

  const arr1: number[] = [];
  const arr2: number[] = [];
  for (const line of lines) {
    const [dis1, dis2] = line.split("   ");
    const n1 = parseInt(dis1);
    const n2 = parseInt(dis2);
    if (!isNaN(n1)) {
      arr1.push(n1);
    }
    if (!isNaN(n2)) {
      arr2.push(n2);
    }
  }
  const nFreq = new Map<number, number>();
  for (const n of arr2) {
    const freq = nFreq.get(n);
    if (freq) {
      nFreq.set(n, freq + 1);
    } else {
      nFreq.set(n, 1);
    }
  }

  let res = 0;
  for (const n of arr1) {
    const freq = nFreq.get(n);
    if (freq) {
      res += freq * n;
    }
  }
  return res;
}

export function add(a: number, b: number): number {
  return a + b;
}
const distenceAccRes = await distenceAcc();
console.log(distenceAccRes);

const similarityScoreRes = await similarityScore();
console.log(similarityScoreRes);
