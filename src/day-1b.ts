import { readFileIntoArray } from "./utils.js";

const day1Data = readFileIntoArray("./data/day-1.txt");

let passwordCount = 0;
let currentPosition = 50;

for (const move of day1Data) {
  const direction = move[0];
  let count = Number.parseInt(move.substring(1));

  let isFirstMove = true; // Dont score if we start on zero

  switch (direction) {
    case "L": {

      while (count > 0) {
        if (isFirstMove && currentPosition === 0) {
          currentPosition = 99;
          isFirstMove = false;
        } else {
          currentPosition -= 1;

          if (currentPosition === 0 && count !== 1) {
            passwordCount += 1;
          } else if (currentPosition < 0) {
            currentPosition = 99;
          }
        }
        count--;
      }
      break;
    }
    case "R": {
      while (count > 0) {

        if (isFirstMove && currentPosition === 0) {
          currentPosition += 1;
          isFirstMove = false;
        } else {
          currentPosition += 1;

          if (currentPosition > 99) {
            currentPosition = 0;
          }

          if (currentPosition === 0 && count !== 1) {
            passwordCount += 1;
          }
        }
        count--;
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

  console.log(
    `move: ${move} curr: ${currentPosition} password count: ${passwordCount}`
  );

}

console.log(passwordCount);
