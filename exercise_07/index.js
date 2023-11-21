// Import isTypeOf and execute
import isTypeOf from "./isTypeOf.js";

console.log(
  `Check an array if a boolean: ${isTypeOf(["Apple", "Banana"], "boolean")}`
);
console.log(
  `Check an array if a number: ${isTypeOf(["Apple", "Banana"], "number")}`
);
console.log(
  `Check an array if an array: ${isTypeOf(["Apple", "Banana"], true)}`
);
console.log(
  `Check an array if a string: ${isTypeOf(["Apple", "Banana"], "string")}`
);
