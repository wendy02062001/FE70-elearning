const stateDefault = {
  arrKhoaHoc: [],
  arrDanhMuc: [],
  arrKHtheoDM: {
    tenDM: "",
    arrKH: [],
  },
  arrKHTimKiem: [],
  detailKH: {},
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

    case "LAY_KHOA_HOC_THEO_DM": {
      state.arrKHtheoDM.arrKH = action.arrKhoaHoc;
      state.arrKHtheoDM.tenDM =
        action.arrKhoaHoc[0].danhMucKhoaHoc.tenDanhMucKhoaHoc;
      return { ...state };
    }

    case "LAY_KHOA_HOC_TIM_KIEM": {
      state.arrKHTimKiem = action.arrKhoaHoc;
      return { ...state };
    }

    case "LAY_THONG_TIN_KHOA_HOC": {
      state.detailKH = action.detailKH;
      return { ...state };
    }

    default:
      return state;
  }
};
