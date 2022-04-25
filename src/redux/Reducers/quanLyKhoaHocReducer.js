const stateDefault = {
  arrKhoaHoc: [],
};

export const quanLyKhoaHocReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LAY_DANH_SACH_KHOA_HOC": {
      state.arrKhoaHoc = action.arrKhoaHoc;
      return { ...state };
    }
    default:
      return state;
  }
};
