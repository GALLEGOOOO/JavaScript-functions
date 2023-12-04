import isGreaterThan from "../exercise_04/isGreaterThan.js";

/**
 * Write JS function "emitSanction" to check wether a vehicle has exceeded allowed speed limit or not
    - if speed exceeds, then return string "🔴"
    - otherwise, return lower case string "🟢"
 * input: speed, limit
 * output: string
 */

/**
 *
 * @param {number} speed
 * @param {number} limit
 * @returns {string}
 */

const emitSanction = function (speed, limit) {
  const exceedsLimit = isGreaterThan(speed, limit);

  return exceedsLimit === true ? "🔴" : "🟢";
};

export default emitSanction;
