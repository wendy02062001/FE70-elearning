import { DOMAIN, http } from "../../../utils/setting";

export const layDanhSachKhoaHocAction = (maNhom) => {
  return async (dispatch) => {
    try {
      // let maNhom = "GP01";
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

