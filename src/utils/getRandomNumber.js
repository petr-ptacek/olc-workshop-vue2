/**
 * @param {number} [f]
 * @param {number} [t]
 * @returns {number}
 */
export function getRandomNumber(f, t) {
  return Math.floor(Math.random() * (t - f + 1)) + f;
}