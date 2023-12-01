import generateRandomNumberInRange from "../exercise_03/generateRandomNumberInRange.js";
import getDistanceFromThreshold from "../exercise_01/getDistanceFromThreshold.js";

/**
 * Generate a random number (in between 0-100) and sum it to given number.
 * If the sum result exceeds 100, then return a message "Sum with value N exceeds by N from number 100".
 * Otherwise, return a message "Sum with value N is left by N from number 100".
 * @param {number} value - The input number.
 * @returns {string} - The result message.
 */

const getDistanceMessageFromSumTo100 = function (value) {
  const randomNumber = generateRandomNumberInRange(100) + value;
  const difference = getDistanceFromThreshold(randomNumber, 100);
  const message =
    randomNumber > 100
      ? `Sum with value ${randomNumber} exceeds by ${difference} from number 100`
      : `Sum with value ${randomNumber} is left by ${difference} from number 100`;

  return message;
};

export default getDistanceMessageFromSumTo100;
