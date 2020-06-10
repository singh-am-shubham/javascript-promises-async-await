import { fetchWithTimeout, fetchMovies, fetchBooks } from "./services";

const movies = require("./data/movies.json");

function getBooksAndMovies() {
  return Promise.all([fetchMovies(), fetchBooks()])
    .then(([books, movies]) => ({
      books,
      movies,
    }))
    .catch((error) => console.log("Error fetching books and movies", error));
}

const getBooksAndMoviesPromise = getBooksAndMovies();
getBooksAndMoviesPromise.then((results) => {
  console.log("getBooksAndMoviesPromise", results);
});

function getBooksOrMovies() {
  return Promise.race([fetchMovies(), fetchBooks()])
    .then((results) => results)
    .catch((error) => console.log("Error waiting for the promise race", error));
}

const getBooksOrMoviesPromise = getBooksOrMovies();
getBooksOrMoviesPromise.then((results) => {
  console.log("getBooksOrMoviesPromise", results);
});

// export function fetchMovies() {
//     const resolveFunction = () => movies;
//     return fetchWithTimeout(1000).then(resolveFunction);
//   }
//its async await form
// export async function fetchMovies() {
//     const resolveFunction = () => movies;
//     const result = await fetchWithTimeout(1000);
//     return resolveFunction(result);
// }
