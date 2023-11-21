/**
 * #7 :: Export JS function "isTypeOf" to check if the type of value matches the type received as an argument
 * hint :: array should be treated in a different way. Use Array.isArray() to check it
 * doc :: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * input: 'string' | 'number' | 'boolean' | 'array' (value)
 * input: boolean (type)
 * output:
 */

/**
 * Checks if the type of a value matches the specified type.
 * For arrays, it uses Array.isArray() to check.
 * @param {string|number|boolean|Array} valueToBeChecked - The value to check the type of.
 * @param {boolean} type - The expected type (true for array, false for other types).
 * @returns {boolean} - True if the type matches, false otherwise.
 */
export default function isTypeOf(valueToBeChecked, type) {
  if (type === true && Array.isArray(valueToBeChecked)) return true;
  return typeof valueToBeChecked === type;
}
