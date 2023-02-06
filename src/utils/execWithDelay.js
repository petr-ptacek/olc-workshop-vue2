/**
 * @template {(...argArr: any[]) => any} Fn
 * @param {Fn} fn
 * @param {number} [delay]
 * @returns {Promise<ReturnType<Fn>>}
 */
export function execWithDelay(fn, delay = 500) {
  return new Promise(resolve => {
    setTimeout(() => resolve(fn()), delay);
  });
}