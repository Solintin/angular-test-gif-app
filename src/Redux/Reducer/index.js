import { combineReducers } from "redux";
import Rider from "./rider";
import Loading from "./loading";

const rootReducer = combineReducers({
  loading: Loading,
  rider : Rider,
});

export default rootReducer;
