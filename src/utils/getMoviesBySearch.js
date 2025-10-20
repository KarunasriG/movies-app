export const getMoviesBySearch = (movies, value) => {
  const filteredMovies =
    value?.length > 0
      ? movies?.length > 0 &&
        movies.filter(
          (movie) =>
            movie.Title.toLowerCase().includes(value.toLowerCase()) ||
            movie.Year.includes(value) ||
            movie.director.toLowerCase().includes(value.toLowerCase())
        )
      : movies;
  return filteredMovies;
};
