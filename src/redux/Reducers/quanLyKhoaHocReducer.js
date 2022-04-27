const stateDefault = {
  arrKhoaHoc: [],
  arrDanhMuc: [],
};

export const quanLyKhoaHocReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LAY_DANH_SACH_KHOA_HOC": {
      state.arrKhoaHoc = action.arrKhoaHoc;
      return { ...state };
    }

    case "LAY_DANH_MUC_KHOA_HOC": {
      state.arrDanhMuc = action.arrDanhMuc;
      return { ...state };
    }

    default:
      return state;
  }
};
