import { ActionTypes } from "../constants/actionTypes";

export const setStations = (stations) => {
  return {
    type: ActionTypes.SET_STATIONS,
    payload: stations,
  };
};
