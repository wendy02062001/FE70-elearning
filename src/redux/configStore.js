import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { quanLyNguoiDungReducer } from "./reducers/quanLyNguoiDungReducer";
import { quanLyKhoaHocReducer } from "./reducers/quanLyKhoaHocReducer";

const rootReducer = combineReducers({
  //Nơi chứa các state của ứng dụng
  quanLyNguoiDungReducer,
  quanLyKhoaHocReducer,
});

let middleware = applyMiddleware(reduxThunk);

let composeCustom = compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(rootReducer, composeCustom);
