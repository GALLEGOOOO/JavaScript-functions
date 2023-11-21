/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */

/**
 * Check whether a collection has elements or is empty.
 * @param {Array} collection - The input array (collection).
 * @returns {boolean} - True if the collection has elements, false if it is empty.
 */
export default function checkCollectionHasElements(collection) {
  return collection.length > 0;
}
