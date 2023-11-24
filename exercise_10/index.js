import transformCollectionToString from "./transformCollectionToString.js";

const result1 = transformCollectionToString([
  "apple",
  "grapes",
  "strawberries",
]);
console.log(result1);

const result2 = transformCollectionToString([]);
console.log(result2);