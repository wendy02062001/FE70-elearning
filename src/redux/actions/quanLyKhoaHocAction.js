import axios from "axios";
import { TOKENCYBERSOFT, token, http } from "../../utils/setting";

export const getAllKhoaHoc = () => {
  return async (dispatch, getState) => {
    try {
      let result = await axios({
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
        method: "GET",
      });

      const action = {
        type: "GET_ALL_KHOA_HOC",
        arrKhoaHoc: result.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const addKhoaHoc = (course) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc",
        method: "POST",
        data: course,
        headers: {
          Authorization: "Bearer " + token,
          TokenCybersoft: TOKENCYBERSOFT,
        },
      });
      console.log("result", result.data);
      const action = getAllKhoaHoc();
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteKhoaHoc = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=" +
          maKhoaHoc,
        method: "DELETE",
        headers: { Authorization: "Bearer " + TOKENCYBERSOFT },
      });
      console.log("result", result.data);
      const action = getAllKhoaHoc();
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateKhoaHoc = (course) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHoc",
        method: "PUT",
        data: course,
        headers: { Authorization: "Bearer " + TOKENCYBERSOFT },
      });
      console.log("result", result.data);
      const action = getAllKhoaHoc();
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchKhoaHoc = (tenKhoaHoc, maNhom) => {
  return async () => {
    try {
      let result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=${maNhom}`,
        method: "GET",
        headers: { Authorization: "Bearer " + TOKENCYBERSOFT },
      });
      console.log("result", result.data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const layDanhSachKhoaHocAction = (maNhom) => {
  return async (dispatch) => {
    try {
      let result = await http.get(
        "QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=",
        maNhom
      );
      dispatch({
        type: "LAY_DANH_SACH_KHOA_HOC",
        arrKhoaHoc: result.data,
      });
    } catch (err) {}
  };
};

export const layDanhMucKhoaHocAction = (dispatch) => {
  return async (dispatch) => {
    try {
      let result = await http.get("QuanLyKhoaHoc/LayDanhMucKhoaHoc");
      dispatch({
        type: "LAY_DANH_MUC_KHOA_HOC",
        arrDanhMuc: result.data,
      });
    } catch (err) {}
  };
};

export const layKhoaHocTheoDMAction = (maDM) => {
  return async (dispatch) => {
    try {
      let result = await http.get(
        "QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=" + maDM + "&MaNhom=GP01"
      );
      dispatch({
        type: "LAY_KHOA_HOC_THEO_DM",
        arrKhoaHoc: result.data,
      });
    } catch (err) {}
  };
};

export const layKhoaHocTimKiemAction = (keyword) => {
  return async (dispatch) => {
    try {
      let result = await http.get(
        "QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=" +
          keyword +
          "&MaNhom=GP01"
      );
      dispatch({
        type: "LAY_KHOA_HOC_TIM_KIEM",
        arrKhoaHoc: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const layThongTinKhoaHocAction = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      let result = await http.get(
        "QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=" + maKhoaHoc
      );
      dispatch({
        type: "LAY_THONG_TIN_KHOA_HOC",
        detailKH: result.data,
      });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
};
