import checkCollectionHasElements from "../exercise_06/checkCollectionHasElements.js";
/**
 * Write JS function "transformCollectionToString" to transform collection into string
    - if array has elements, then return array as string, joined by '|' (pipe character)
    - otherwise, return an empty string
 * input: array (collection) 
 * output: string
 */

/**
 * CASE #1
 * input: ['apple', 'grapes', 'strawberries']
 * output: "apple | grapes | strawberries"
 */

/**
 * CASE #2
 * input: []
 * output: ""
 */
/**
 * Transforma una colección en una cadena.
 * Si el array tiene elementos, devuelve el array como una cadena, unidos por '|' (carácter de barra vertical).
 * De lo contrario, devuelve una cadena vacía.
 * @param {*} collection - La colección de entrada.
 * @returns {string} - La cadena transformada.
 */
const transformCollectionToString = function (collection) {
  if (checkCollectionHasElements(collection)) {
    return collection.join(" | ");
  }
  return "";
};

export default transformCollectionToString;
