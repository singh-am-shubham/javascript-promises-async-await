export function fetchWithTimeout(delay) {
  return new Promise((resolve) => {
      return setTimeout(resolve, delay);
  });
}
