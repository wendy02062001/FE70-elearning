import axios from "axios";
import { createBrowserHistory } from "history";

export const DOMAIN = "http://elearning0706.cybersoft.edu.vn/api/";

export const USER_LOGIN = "userLogin";
export const ACCESSTOKEN = "accessToken";

//config axios
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});

//chuyển hướng trang
export const history = createBrowserHistory();
