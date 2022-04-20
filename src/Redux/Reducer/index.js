import { combineReducers } from "redux";
import Giphy from "./giphy";

const rootReducer = combineReducers({
  giphy: Giphy,
});

export default rootReducer;
