import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  stations: [],
};

export const stationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_STATIONS:
      return { ...state, stations: payload };
    default:
      return state;
  }
};
