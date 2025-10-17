import axios from "axios";
import { setMovies } from "../slice/movieSlice";

export const getMovies = () => async (dispatch) => {
  const url =
    "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies";

  try {
    const response = await axios.get(url);
    dispatch(setMovies(response.data));
    return response.data;
  } catch (err) {
    return err;
  }
};
