import { readFileIntoArray } from "@brees-kerv/aoc-utils";

const data = readFileIntoArray("../../data/day02/data.txt");

let total = 0;

const isRepeatingNumber = (numberStr: string): boolean => {
  const maxRepeatingSectionLength = Math.floor(numberStr.length / 2);

  for(let i = 1; i <= maxRepeatingSectionLength; i++) {
    const patternToTry = numberStr.substring(0, i);
    
    const regex = new RegExp(`^((${patternToTry})+$)`);

    if(regex.test(numberStr)) return true;
  }

  return false;
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
