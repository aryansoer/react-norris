// https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf

/**
 * Creates a throttled function that only invokes `func` at most once per every `limit` milliseconds
 *
 * @param {Function} func
 * @param {number} limit
 */
export function throttle(func, limit) {
  let lastFunc;
  let lastRan;

  return function() {
    const context = this;
    const args = arguments;

    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);

      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  }
}

/**
 * Replaces text in a string, using search string
 *
 * @param {string} str
 * @param {string} searchValue
 * @param {string} replaceValue
 */
export function replace(str, searchValue, replaceValue) {
  const regExp = new RegExp(searchValue, 'g');
  return str.replace(regExp, replaceValue);
}
