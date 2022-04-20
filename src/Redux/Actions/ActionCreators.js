// Action Creators
import * as type from "./Types";
import axios from "axios";

const fetchGifSuccess = (data) => {
  return {
    type: type.FETCH_GIF_SUCCESS,
    payload: data,
  };
};
const fetchGifStart = () => {
  return {
    type: type.FETCH_GIF_START,
  };
};
const fetchGifStop = () => {
  return {
    type: type.FETCH_GIF_END,
  };
};

const fetchGiphy = (searchQuery) => {
  return (dispatch) => {
    dispatch(fetchGifStart());
    try {
      axios
        .get(
          `https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&&limit=25&offset=0&rating=Y&lang=en&q=${searchQuery}`
        )
        .then((res) => {
          console.log(res);
          dispatch(fetchGifSuccess(res.data.data));
          dispatch(fetchGifStop());
        });
    } catch (error) {
      dispatch(fetchGifStop());

      console.log(error);
    }
  };
};
export { fetchGiphy };
