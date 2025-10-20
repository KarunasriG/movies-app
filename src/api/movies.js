import axios from "axios";
import { setMovies } from "../slice/movieSlice";

const BaseURL =
  "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies";
export const getMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(BaseURL);
    dispatch(setMovies(response.data));
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getMoviesBySearch = (value) => async (dispatch) => {
  const url = BaseURL + "/search";

  try {
    const { data } = await axios.get(url, {
      params: {
        search: value,
      },
    });
    dispatch(setMovies(data));
  } catch (err) {
    return err;
  }
};
