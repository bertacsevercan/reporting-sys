import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://report-sys-server.herokuapp.com/api/report";

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

export const getAllReports = (userId) => {
  return userId
    ? axios.get(API_URL + "?userId=" + userId, { headers: authHeader() })
    : axios.get(API_URL, { headers: authHeader() });
};

export const getLocationReports = (userId, type) => {
  return axios.get(API_URL + "/location?userId=" + userId + "&type=" + type, {
    headers: authHeader(),
  });
};

export const getEstateReports = (userId, type) => {
  return axios.get(API_URL + "/estate?userId=" + userId + "&type=" + type, {
    headers: authHeader(),
  });
};

export const getRoomReports = (userId, type) => {
  return axios.get(API_URL + "/rooms?userId=" + userId + "&type=" + type, {
    headers: authHeader(),
  });
};

export const getDateReports = (userId, type) => {
  return axios.get(API_URL + "/date?userId=" + userId + "&type=" + type, {
    headers: authHeader(),
  });
};
