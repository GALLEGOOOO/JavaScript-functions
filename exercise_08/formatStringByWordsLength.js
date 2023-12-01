import getTotalWordsFromString from "../exercise_02/getTotalWordsFromString.js";
import isGreaterterThan from "../exercise_04/isGreaterThan.js";

/**
* Write JS function "formatStringByWordsLength" to check number of words contained in given string
- if total number of words is greater then
/**
 * Write JS function "formatStringByWordsLength" to check number of words contained in given string
    - if total number of words is greater then 5, then return uppercase string
    - otherwise, return lower case string
 * input: string (sentence) 
 * output: string
 */

/**
 * CASE #1
 * input: "This is a long, long, long sentence."
 * output: "THIS IS A LONG, LONG, LONG SENTENCE."
 */

/**
 * CASE #2 * input: "This is short one."
 * output: "this is short one."
 */

/**
 * Format a string based on the number of words.
 * If the number of words is greater than a threshold, return the uppercase string;
 * otherwise, return the lowercase string.
 * @param {string} sentence - The input string (sentence).
 * @returns {string} - The formatted string.
 */
const formatStringByWordsLength = function (sentence, wordThreshold) {
  const numberOfWords = getTotalWordsFromString(sentence);
  return isGreaterterThan(numberOfWords, 5)
    ? sentence.toUpperCase()
    : sentence.toLowerCase();
};

export default formatStringByWordsLength;
