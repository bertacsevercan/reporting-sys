import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://report-sys-server.herokuapp.com/api/report";
const API_URL_STAGE = "http://localhost:8080/api/report";

export const createReport = (
  saleAmount,
  saleType,
  userId,
  time,
  location,
  estateType,
  roomSize
) => {
  return axios.post(API_URL_STAGE, {
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
    ? axios.get(API_URL_STAGE + "?userId=" + userId, { headers: authHeader() })
    : axios.get(API_URL_STAGE, { headers: authHeader() });
};

export const getLocationReports = (userId, type) => {
  return axios.get(
    API_URL_STAGE + "/location?userId=" + userId + "&type=" + type,
    {
      headers: authHeader(),
    }
  );
};

export const getEstateReports = (userId, type) => {
  return axios.get(
    API_URL_STAGE + "/estate?userId=" + userId + "&type=" + type,
    {
      headers: authHeader(),
    }
  );
};

export const getRoomReports = (userId, type) => {
  return axios.get(
    API_URL_STAGE + "/rooms?userId=" + userId + "&type=" + type,
    {
      headers: authHeader(),
    }
  );
};

export const getDateReports = (userId, type) => {
  return axios.get(API_URL_STAGE + "/date?userId=" + userId + "&type=" + type, {
    headers: authHeader(),
  });
};
