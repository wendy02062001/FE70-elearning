import axios from 'axios';
import { TOKENCYBERSOFT, token } from '../../utils/setting';
export const getAllKhoaHoc = () => {
  return async (dispatch, getState) => {
    try {
      let result = await axios({
        url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc',
        method: 'GET',
      });

      const action = {
        type: 'GET_ALL_KHOA_HOC',
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
        url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc',
        method: 'POST',
        data: course,
        headers: {
          Authorization: 'Bearer ' + token,
          TokenCybersoft: TOKENCYBERSOFT,
        },
      });
      console.log('result', result.data);
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
          'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=' +
          maKhoaHoc,
        method: 'DELETE',
        headers: { Authorization: 'Bearer ' + TOKENCYBERSOFT },
      });
      console.log('result', result.data);
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
        url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHoc',
        method: 'PUT',
        data: course,
        headers: { Authorization: 'Bearer ' + TOKENCYBERSOFT },
      });
      console.log('result', result.data);
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
        method: 'GET',
        headers: { Authorization: 'Bearer ' + TOKENCYBERSOFT },
      });
      console.log('result', result.data);
    } catch (error) {
      console.log(error);
    }
  };
};
