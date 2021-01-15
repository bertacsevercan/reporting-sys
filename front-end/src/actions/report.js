import {
  CREATE_REPORT_FAIL,
  CREATE_REPORT_SUCCESS,
  FETCH_REPORT_FAIL,
  FETCH_REPORT_SUCCESS,
  SET_MESSAGE,
} from "./types";

import { createReport, getReports } from "../services/report.service";

export const createNewReport = (
  saleAmount,
  saleType,
  userId,
  time,
  location,
  estateType,
  roomSize
) => (dispatch) => {
  return createReport(
    saleAmount,
    saleType,
    userId,
    time,
    location,
    estateType,
    roomSize
  ).then(
    (data) => {
      dispatch({
        type: CREATE_REPORT_SUCCESS,
        payload: { report: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: CREATE_REPORT_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const fetchReports = (userId) => (dispatch) => {
  return getReports(userId).then(
    (res) => {
      return dispatch({
        type: FETCH_REPORT_SUCCESS,
        payload: res.data,
      });

      //return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: FETCH_REPORT_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
