import { Route } from "react-router-dom";
import HeaderHome from "../components/HeaderHome/HeaderHome";

export const LoginTemplate = (props) => {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <>
            <HeaderHome />
            <div className="d-flex">
              <div className="img" style={{ height: "80vh" }}>
                <img
                  src="./img/dang-nhap.webp"
                  alt="..."
                  className="w-100 h-100"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center w-100">
                <props.component {...propsRoute} />
              </div>
            </div>
          </>
        );
      }}
    />
  );
};
