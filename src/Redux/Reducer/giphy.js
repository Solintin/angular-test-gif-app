const initailState = {
  gifs: [],
  loading: false,
};
const giphy = (state = initailState, action) => {
  switch (action.type) {
    case "FETCH_GIF_SUCCESS":
      return {
        ...state,
        gifs: action.payload,
      };
    case "FETCH_GIF_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_GIF_END":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default giphy;
