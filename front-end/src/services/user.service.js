import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://report-sys-server.herokuapp.com/api/test/";

export const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

export const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

export const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

/* export default {
  getPublicContent,
  getUserBoard,
  getAdminBoard,
};
 */
