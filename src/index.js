import { fetchWithTimeout } from "./services";
const movies = require("./data/movies.json");
export function fetchMovies() {
  const resolveFunction = () => movies;
  return fetchWithTimeout(1000).then(resolveFunction);
}

const moviePromise = fetchMovies();

moviePromise.then((results) => {
  console.log(results);
});

// export async function fetchMovies() {
//     const resolveFunction = () => movies;
//     const result = await fetchWithTimeout(1000);
//     return resolveFunction(result);
// }
