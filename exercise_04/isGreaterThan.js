/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */

/**
 * Check whether one number is greater than a given number.
 * @param {number} value - The number to be checked.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} - True if 'value' is greater than 'threshold', false otherwise.
 */
export default function isGreaterThan(value, threshold) {
  return value > threshold;
}
