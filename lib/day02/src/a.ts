import { readFileIntoArray } from "@brees-kerv/aoc-utils";

const data = readFileIntoArray("../../data/day02/data.txt");

let total = 0;

const isRepeatingNumber = (numberStr: string): boolean => {
  if (numberStr.length % 2 !== 0) return false; // Odd length strings can't be wholely repeated sections

  const firstHalf = numberStr.substring(0, numberStr.length / 2);
  const secondHalf = numberStr.substring(numberStr.length / 2);

  const repeats = firstHalf === secondHalf;

  // console.log(`Is repeating ${numberStr} ${firstHalf}/${secondHalf}: ${repeats}`);
  return repeats;
};

for (const line of data) {
  for (const clause of line.split(",")) {

    if (clause.trim() === "") continue; // Skip empty clauses (eg end of line)

    const parts = clause.split("-");

    for (
      let i = Number.parseInt(parts[0]!);
      i <= Number.parseInt(parts[1]!);
      i++
    ) {
      const nextId = `${i}`;
      total += isRepeatingNumber(nextId) ? i : 0;
    }
  }
}

console.log(total);
