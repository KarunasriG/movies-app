import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../api/movies";
import MovieCard from "../components/MovieCard";
import { Grid } from "@mui/material";
import { getMoviesBySearch } from "../utils/getMoviesBySearch";

const Home = () => {
  const dispatch = useDispatch();

  const { movies, searchValue } = useSelector((state) => state.movies);
  // console.log(movies);

  const filterByMovieName = getMoviesBySearch(movies, searchValue);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <>
      <Navbar />

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {filterByMovieName?.length > 0 &&
          filterByMovieName.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </Grid>
    </>
  );
};

export default Home;
