import axios from "axios";
import { history, ACCESSTOKEN, USER_LOGIN } from "../../utils/setting";
import { token, TOKENCYBERSOFT } from "./types/quanLyNguoiDungType";

export const getAllNguoiDung = () => {
  return async (dispatch, getState) => {
    try {
      let result = await axios({
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung",
        method: "GET",
      });

      const action = {
        type: "GET_ALL_NGUOI_DUNG",
        arrNguoiDung: result.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const addNguoiDung = (user) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
        method: "POST",
        data: user,
        headers: {
          Authorization: "Bearer " + token,
          TokenCybersoft: TOKENCYBERSOFT,
        },
      });
      console.log("result", result.data);
      const action = getAllNguoiDung();
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteNguoiDung = (taiKhoanNguoiDung) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=" +
          taiKhoanNguoiDung,
        method: "DELETE",
        headers: {
          // TokenCybersoft: TOKENCYBERSOFT,
          Authorization: "Bearer " + TOKENCYBERSOFT,
        },
      });
      console.log("result", result.data);
      const action = getAllNguoiDung();
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateNguoiDung = (user) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        method: "PUT",
        data: user,
        headers: { Authorization: "Bearer " + TOKENCYBERSOFT },
      });
      console.log("result", result.data);
      const action = getAllNguoiDung();
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchNguoiDung = (info) => {
  return async () => {
    try {
      let result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?tuKhoa=${info}`,
        method: "GET",
        headers: { Authorization: "Bearer " + TOKENCYBERSOFT },
      });
      console.log("result", result.data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const dangKyAction = (userDK) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        method: "POST",
        data: userDK,
        headers: {
          Authorization: "Bearer " + token,
          TokenCybersoft: TOKENCYBERSOFT,
        },
      });
      history.push("/dang-nhap");
    } catch (error) {
      alert("Username has already existed!");
      console.log(error);
    }
  };
};

export const DangNhapAction = (userDN) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: userDN,
        headers: {
          Authorization: "Bearer " + token,
          TokenCybersoft: TOKENCYBERSOFT,
        },
      });
      console.log(result.data);
      let usLogin = result.data;
      localStorage.setItem(ACCESSTOKEN, usLogin.accessToken);
      localStorage.setItem(USER_LOGIN, JSON.stringify(usLogin));

      history.push("/home");
    } catch (error) {
      console.log(error);
    }
  };
};
