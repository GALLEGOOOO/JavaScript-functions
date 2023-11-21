/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 * Generate a rounded random number within the specified range.
 * @param {number} limit - The upper limit for the random number.
 * @returns {number} - A rounded random number within the specified range.
 */
export default function generateRandomNumberInRange(limit) {
  return Math.round(Math.random() * limit);
}
