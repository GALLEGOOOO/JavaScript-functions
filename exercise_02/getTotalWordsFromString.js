/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */
/**
 * Get the total number of words in a given string.
 * @param {string} inputString - The input string (sentence).
 * @returns {number} - The total number of words in the string.
 */
export default function getTotalWordsFromString(inputString) {
  const wordsArray = inputString.split(/\s+/);
  return wordsArray.length;
}
