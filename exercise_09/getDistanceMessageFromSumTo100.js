import generateRandomNumberInRange from "../exercise_03/generateRandomNumberInRange.js";
import getDistanceFromThreshold from "../exercise_01/getDistanceFromThreshold.js";
import isGreaterThan from "../exercise_04/isGreaterThan.js";

/**
 * generate a random number (in between 0-100) and sum it to given number
 * @param {number} value
 * @returns {string}
 */

function getDistanceMessageFromSumTo100(value) {
  const random = generateRandomNumberInRange(100);
  const sum = value + random;
  const exceeded = isGreaterThan(sum, 100);
  const difference = getDistanceFromThreshold(sum, 100);

  return `Sum with value ${sum} ${
    exceeded ? "exceeds" : "is left in"
  } ${difference} from number 100`;
}

export default getDistanceMessageFromSumTo100;
