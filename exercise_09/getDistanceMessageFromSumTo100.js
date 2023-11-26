import generateRandomNumberInRange from "../exercise_03/generateRandomNumberInRange.js";

/** 
 * Write JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
  - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
  - otherwise, return message "Sum with value N is left in N from number 100"
 * input: number (value) 
 * output: string
 */

/**
 * CASE #1
 * input: 70
 * random (generated in function): 40
 * output: "Sum with value 110 exceeds in 10 from number 100"
 */

/**
 * CASE #2
 * input: 30
 * random (generated in function): 40
 * output: "Sum with value 70 isd left in 30 from number 100"
 */

/**
 * Generate a random number (in between 0-100) and sum it to given number.
 * If the sum result exceeds 100, then return a message "Sum with value N exceeds by N from number 100".
 * Otherwise, return a message "Sum with value N is left by N from number 100".
 * @param {number} value - The input number.
 * @returns {string} - The result message.
 */
const getDistanceMessageFromSumTo100 = function (value) {
  const randomNumber = generateRandomNumberInRange(100) + value;
  const difference = Math.abs(100 - randomNumber);
  const message =
    randomNumber > 100
      ? `Sum with value ${randomNumber} exceeds by ${difference} from number 100`
      : `Sum with value ${randomNumber} is left by ${difference} from number 100`;

  return message;
};

export default getDistanceMessageFromSumTo100;
