import axios from 'axios';
import { createBrowserHistory } from 'history';

export const DOMAIN = 'https://elearning0706.cybersoft.edu.vn/api/';

export const USER_LOGIN = 'userLogin';
export const ACCESSTOKEN = 'accessToken';

//config axios
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});

//chuyển hướng trang
export const history = createBrowserHistory();

export const TOKENCYBERSOFT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzAiLCJIZXRIYW5TdHJpbmciOiIxNC8xMC8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NjU3MDU2MDAwMDAiLCJuYmYiOjE2Mzc0Mjc2MDAsImV4cCI6MTY2NTg1MzIwMH0.RAzH9H37ZyQ8ZT6A62fw3_bDfJOCq0A9vz08qT262EU';
export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidHJ1b25nbGgiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJHViIsIm5iZiI6MTY1Mjk4MDI4MiwiZXhwIjoxNjUyOTgzODgyfQ.oB8z-j8XZwGhCy2Jv5G-FxBFjc3ZaRUJ1Mklh690XtE';
