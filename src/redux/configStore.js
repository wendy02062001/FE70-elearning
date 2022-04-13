import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  //Nơi chứa các state của ứng dụng
});

let middleware = applyMiddleware(reduxThunk);

let composeCustom = compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(rootReducer, composeCustom);
