import { DOMAIN, http } from "../../../utils/setting";

export const layDanhSachKhoaHocAction = (dispatch) => {
  return async (dispatch) => {
    try {
      let result = await http.get("/DanhSachKhoaHoc");
      dispatch({
        type: "LAY_DANH_SACH_KHOA_HOC",
        arrKhoaHoc: result.data,
      });
    } catch (err) {}
  };
};
