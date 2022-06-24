import { USER_LOGIN } from "../../utils/setting";

let userDN;

if (localStorage.getItem(USER_LOGIN)) {
  userDN = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userDangNhap: userDN,
  userThongTin: {},
};

export const quanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LAY_THONG_TIN":
      state.userThongTin = action.userThongTin;
      return { ...state };

    default:
      return state;
  }
};
