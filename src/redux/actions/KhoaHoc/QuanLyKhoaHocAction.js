import { http } from "../../../utils/setting";

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
