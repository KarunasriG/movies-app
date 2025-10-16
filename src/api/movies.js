import axios from "axios";
import { setMovies } from "../slice/movieSlice";

export const getMovies = () => async (dispatch) => {
  //   const url =
  //     "https://65518c74-040e-493e-8aac-8288d481eb90-00-6yny70aq1nej.sisko.replit.dev/api/movies";
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
