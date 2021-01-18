import axios from "axios";

const API_URL = "https://report-sys-server.herokuapp.com/api/auth/";

export const authRegister = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

export const authLogin = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const authLogout = () => {
  localStorage.removeItem("user");
};

/* export default {
  register,
  login,
  logout,
}; */
