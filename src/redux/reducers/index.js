import { combineReducers } from "redux";
import { stationReducer } from "./stationReducer";

const reducers = combineReducers({
  allStations: stationReducer,
});

export default reducers;
