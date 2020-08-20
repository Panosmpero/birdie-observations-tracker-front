import { combineReducers } from "redux";
import { observationsReducer } from "./observationsReducer";

const rootReducer = combineReducers({
  observations: observationsReducer,
});
export default rootReducer;
