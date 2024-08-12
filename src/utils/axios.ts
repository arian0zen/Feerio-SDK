/* eslint-disable no-unused-vars */
import { BASE_URL, PLAIN_DOMAIN_URL } from "../constants";

// const axios_ = require("axios").default;
import axios_ from "axios";
const axios = axios_.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
// Function to get cookie value by name
// const getCookie = (name: string) => {
//   const cookieString = document.cookie;
//   const cookies = cookieString.split('; ');
//   for (let i = 0; i < cookies.length; i++) {
//     const cookie = cookies[i].split('=');
//     if (cookie[0] === name) {
//       return cookie[1];
//     }
//   }
//   return null;
// };
// Manually attach the cookie to the request headers before sending

// Manually attach the cookie to the request headers before sending
// axios.interceptors.request.use(config => {
//   const cookieValue = getCookie('x-auth-token');
//   if (cookieValue) {
//     config.headers['Cookie'] = `x-auth-token=${cookieValue}`;
//   }
//   return config;
// });

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // whatever you want to do with the error
    // console.log("axios.interceptors.response.use", error);
    if (error?.response?.status === 401) {
      console.log("Cookies ", document.cookie);
      console.log("Origin ", window.location.origin);
      console.log("error?.response?.status === 401", error.config.url);
      localStorage.removeItem("user");
      localStorage.removeItem("currentUserEmail");
      localStorage.removeItem("accountType");
      localStorage.removeItem("owner");
      localStorage.removeItem("x-auth-token");
      localStorage.removeItem("currentWorkspace");
      document.cookie = `x-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${PLAIN_DOMAIN_URL}; SameSite=None; Secure`;
      document.cookie = `ownerEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${PLAIN_DOMAIN_URL}; SameSite=None; Secure`;
      window.location.href = "/login";
    }
  }
);

export default axios;
