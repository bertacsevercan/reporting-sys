import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import {postReport, getReport} from "./report";

export default combineReducers({
  auth,
  message,
  postReport,
  getReport
});
