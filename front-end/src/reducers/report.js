import {
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_FAIL,
  FETCH_REPORT_FAIL,
  FETCH_REPORT_SUCCESS,
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  saleAmount: "",
  saleType: "",
  userId: user,
  time: "",
  location: "",
  estateType: "",
  roomSize: "",
};

export const postReport = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_REPORT_SUCCESS:
      return {
        ...state,
        saleAmount: payload,
        saleType: payload,
        userId: payload,
        time: payload,
        location: payload,
        estateType: payload,
        roomSize: payload,
      };
    case CREATE_REPORT_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const getReport = (state = { reports: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_REPORT_SUCCESS:
      return {
        ...state,
        reports: payload,
      };
    case FETCH_REPORT_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
