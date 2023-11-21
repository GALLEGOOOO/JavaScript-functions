/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */

/**
 * Finds the difference between a number and a threshold value.
 *
 * @param {number} value - The input number.
 * @param {number} threshold - The threshold value.
 * @returns {number} - The difference between the input number and the threshold.
 */
const getDistanceFromThreshold = function (value, threshold) {
  if (typeof value !== "number" || typeof threshold !== "number") {
    throw new Error("Both input parameters must be numbers.");
  }

  return Math.abs(value - threshold);
};

export default getDistanceFromThreshold;
