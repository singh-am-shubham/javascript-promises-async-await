export function fetchWithTimeout(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
export function fetchMovies() {
  return fetch("./data/movies.json")
    .then((response) => response.json())
    .then((movies) => movies)
    .catch((error) => console.log(error));
}

export function fetchBooks() {
  return fetch("./data/books.json")
    .then((response) => response.json())
    .then((books) => books)
    .catch((error) => console.log(error));
}

export async function asyncFetchMovies() {
  try {
    const response = await fetch("./data/movies.json");
    const results = await response.json();
  } catch (error) {
    console.log(error)
  }
}

export async function asyncFetchBooks() {
  try {
    const response = await fetch("./data/books.json");
    const results = await response.json();
  } catch (error) {
    console.log(error)
  }
}

// export async function fetchMovies(){
//     try {
//         const response = await fetch("./data/movies.json");
//         const movies = await response.json();
//         return movies;
//     }
//     catch (error) {
//         return console.log(error);
//     }
// }
