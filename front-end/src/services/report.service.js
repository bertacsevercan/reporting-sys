import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/report";

export const createReport = (
  saleAmount,
  saleType,
  userId,
  time,
  location,
  estateType,
  roomSize
) => {
  return axios.post(API_URL, {
    saleAmount,
    saleType,
    userId,
    estateType,
    roomSize,
    time,
    location,
  });
};

export const getReports = (userId) => {
  return userId
    ? axios.get(API_URL + "?userId=" + userId, { headers: authHeader() })
    : axios.get(API_URL, { headers: authHeader() });
};
