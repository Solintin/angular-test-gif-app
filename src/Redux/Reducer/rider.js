const initailState = {
  profile: [],
  trips: [],
  riderTrips : [],
  availableTrips: [],
  pageName: "",
};
const Riders = (state = initailState, action) => {
  switch (action.type) {
    case "GET_RIDER_SUCCESS":
      return {
        ...state,
        profile: action.payload,
      };
    case "GET_TRIPS":
      return {
        ...state,
        trips: action.payload,
      };
    case "GET_AVAILABLE_TRIPS":
      return {
        ...state,
        availableTrips: action.payload,
      };
    case "GET_RIDER_TRIPS":
      return {
        ...state,
        riderTrips: action.payload,
      };
    case "GET_PAGENAME":
      return {
        ...state,
        pageName: action.payload,
      };

    default:
      return state;
  }
};

export default Riders;
