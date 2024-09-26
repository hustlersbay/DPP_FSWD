// Movie Collection Organizer

let comedyMovies = ['Superbad', 'Step Brothers', 'The Hangover'];
let horrorMovies = ['The Conjuring', 'A Nightmare on Elm Street', 'Get Out'];
let releaseYears = [2007, 2008, 2017, 1984, 2015];

function mergeMovies(arr1, arr2) {
  let merged = arr1.concat(arr2);
  console.log('All Movies:', merged);
  return merged;
}

function sortMovies(movies) {
  let sorted = [...movies].sort();
  console.log('Sorted Movies:', sorted);
  return sorted;
}

function sortYears(years) {
  let sorted = [...years].sort((a, b) => a - b);
  console.log('Sorted Movie Years:', sorted);
  return sorted;
}

function displayMovies(movies) {
  console.log('Movie Titles:');
  movies.forEach((movie) => console.log(movie));
}

function getUppercaseMovies(movies) {
  let uppercase = movies.map((movie) => movie.toUpperCase());
  console.log('Uppercase Movies:', uppercase);
  return uppercase;
}

function getMoviesWithA(movies) {
  let withA = movies.filter((movie) => movie.includes('A'));
  console.log("Movies with 'A':", withA);
  return withA;
}

function getTotalTitleLength(movies) {
  let total = movies.reduce((sum, movie) => sum + movie.length, 0);
  console.log('Total Length of All Movie Titles:', total);
  return total;
}

function getConcatenatedTitles(movies) {
  let concatenated = movies
    .reduceRight((acc, movie) => acc + ' ' + movie, '')
    .trim();
  console.log('Concatenated Titles from Right to Left:', concatenated);
  return concatenated;
}

function checkAllMoviesContainO(movies) {
  let allContainO = movies.every((movie) => movie.toLowerCase().includes('o'));
  console.log("All movies contain 'o':", allContainO);
  return allContainO;
}

function checkAnyMovieContainsO(movies) {
  let someContainO = movies.some((movie) => movie.toLowerCase().includes('o'));
  console.log("At least one movie contains 'o':", someContainO);
  return someContainO;
}

function findMovieIndex(movies, title) {
  let index = movies.indexOf(title);
  console.log(`Index of '${title}':`, index);
  return index;
}

function findLastMovieIndex(movies, title) {
  let lastIndex = movies.lastIndexOf(title);
  console.log(`Last Index of '${title}':`, lastIndex);
  return lastIndex;
}

function findLongTitleMovie(movies) {
  let longTitle = movies.find((movie) => movie.length > 10);
  console.log('First movie with a title longer than 10 characters:', longTitle);
  return longTitle;
}

function findLongTitleMovieIndex(movies) {
  let index = movies.findIndex((movie) => movie.length > 10);
  console.log(
    'Index of first movie with a title longer than 10 characters:',
    index
  );
  return index;
}

function checkMovieInclusion(movies, title) {
  let included = movies.includes(title);
  console.log(`Array includes '${title}':`, included);
  return included;
}

// Main execution
let allMovies = mergeMovies(comedyMovies, horrorMovies);
let sortedMovies = sortMovies(allMovies);
sortYears(releaseYears);
displayMovies(allMovies);
getUppercaseMovies(allMovies);
getMoviesWithA(allMovies);
getTotalTitleLength(allMovies);
getConcatenatedTitles(allMovies);
checkAllMoviesContainO(allMovies);
checkAnyMovieContainsO(allMovies);
findMovieIndex(allMovies, 'The Hangover');
allMovies.push('The Hangover'); // Add duplicate for demonstration
findLastMovieIndex(allMovies, 'The Hangover');
findLongTitleMovie(allMovies);
findLongTitleMovieIndex(allMovies);
checkMovieInclusion(allMovies, 'Superbad');

