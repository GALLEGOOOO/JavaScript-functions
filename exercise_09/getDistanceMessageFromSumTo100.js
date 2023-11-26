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
 * generate a random number (in between 0-100) and sum it to given number
  - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
  - otherwise, return message "Sum with value N is left in N from number 100
  * @param {input} value
  * @returns string
*/

const getDistanceMessageFromSumTo100 = function (value) {
  const randomNumber = generateRandomNumberInRange(100) + value;
  let diference = 100 - randomNumber;
  let message =
    "Sum with value " +
    randomNumber +
    " isd left in " +
    diference +
    " from number 100";
  if (randomNumber > 100) {
    diference = randomNumber - 100;
    message =
      "Sum with value " +
      randomNumber +
      " exceeds in " +
      diference +
      " from number 100";
  }
  return message;
};

export default getDistanceMessageFromSumTo100;
