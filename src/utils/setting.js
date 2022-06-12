import axios from "axios";
import { createBrowserHistory } from "history";

export const DOMAIN = "https://elearning0706.cybersoft.edu.vn/api/";
export const TOKEN_LINH =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzAiLCJIZXRIYW5TdHJpbmciOiIxNC8xMC8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NjU3MDU2MDAwMDAiLCJuYmYiOjE2Mzc0Mjc2MDAsImV4cCI6MTY2NTg1MzIwMH0.RAzH9H37ZyQ8ZT6A62fw3_bDfJOCq0A9vz08qT262EU";

export const TOKEN_KHAI =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2hhaSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNTYwNTQ3MzUxLCJleHAiOjE1NjA1NTA5NTF9.bD1nzTHtVYg7avgF4kegdWhUWjh9kzJPkQEXcqwx4_Q";
export const USER_LOGIN = "userLogin";
export const ACCESSTOKEN = "accessToken";

//config axios
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});

// export const httpUser = axios.create({
//   baseURL: DOMAIN + "QuanLyNguoiDung",
//   timeout: 30000,
// });

// httpUser.interceptors.request.use(
//   (config) => {
//     config.headers = {
//       ...config.headers,
//       TokenCybersoft: TOKEN_LINH,
//     };
//     return config;
//   },
//   (errors) => {
//     return Promise.reject(errors);
//   }
// );

//chuyển hướng trang
export const history = createBrowserHistory();
