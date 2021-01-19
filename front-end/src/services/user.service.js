import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://report-sys-server.herokuapp.com/api/test/";
const API_URL_STAGE = "http://localhost:8080/api/test/";

export const getPublicContent = () => {
  return axios.get(API_URL_STAGE + "all");
};

export const getUserBoard = () => {
  return axios.get(API_URL_STAGE + "user", { headers: authHeader() });
};

export const getAdminBoard = () => {
  return axios.get(API_URL_STAGE + "admin", { headers: authHeader() });
};

/* export default {
  getPublicContent,
  getUserBoard,
  getAdminBoard,
};
 */
