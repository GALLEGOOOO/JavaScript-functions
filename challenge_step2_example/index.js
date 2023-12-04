//import => node
import emitSanction from "./emitSanction.js";

const result1 = emitSanction(20, 120);
console.log(result1); //🟢

const result2 = emitSanction(200, 120);
console.log(result2); // 🔴

const result3 = emitSanction(120, 120);
console.log(result3); //🟢
