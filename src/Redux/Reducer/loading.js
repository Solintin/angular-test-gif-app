
const initailState = {
    loading: false,
  };
  const Loading = (state = initailState, action) => {
    switch (action.type) {
      case "ACTION_BEGIN":
        return {
          ...state,
          loading: true,
        };
      case "ACTION_END":
        return {
          ...state,
          loading: false,
        };
  
      default:
        return state;
    }
  };
  
  export default Loading;
  