import axios from "axios";
import { history, http } from "../../../utils/setting";
import { DOMAIN, TOKEN_LINH } from "../../../utils/setting";

export const dangKyAction = (userDK) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${DOMAIN}QuanLyNguoiDung/DangKy`,
        method: "POST",
        data: userDK,
      });
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const DangNhapAction = (userDN) => {
  return async (dispatch) => {
    try {
      console.log(userDN);
      let result = await axios({
        url: `${DOMAIN}QuanLyNguoiDung/DangNhap`,
        method: "POST",
        data: userDN,
      });
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
};
