import { readFileIntoArray } from "@brees-kerv/aoc-utils";

const day1Data = readFileIntoArray("../../data/day01/data.txt");

let passwordCount = 0;
let currentPosition = 50;

for (const move of day1Data) {
  const direction = move[0];
  const count = Number.parseInt(move.substring(1));

  switch (direction) {
    case "L": {
      currentPosition -= count;

      if (currentPosition < 0) {
        const remainder = Math.max(Math.abs(Math.floor(currentPosition / 100)), 1);
        currentPosition += remainder * 100;
      }
      break;
    }
    case "R": {
      currentPosition += count;

      if (currentPosition > 99) {
        const remainder = Math.max(Math.floor(currentPosition / 100), 1);
        currentPosition -= remainder * 100;
      }
      break;
    }

    default: {
      throw new Error(`Invalid direction ${direction}`);
    }
  }

  if (currentPosition === 0) {
    passwordCount += 1;
  }
}

console.log(passwordCount);
