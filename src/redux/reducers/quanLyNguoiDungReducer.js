const stateDefault = {
  arrNguoiDung: [],
};

export const quanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'GET_ALL_NGUOI_DUNG': {
      state.arrNguoiDung = action.arrNguoiDung;
      return { ...state };
    }
    default:
      return state;
  }
};
