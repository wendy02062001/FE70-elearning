import { Route } from "react-router-dom";

export const LoginTemplate = (props) => {
  return (
    <Route
      path={props.path}
      render={(propsRoute) => {
        return (
          <div className="d-flex">
            <div className="img" style={{ height: "100vh" }}>
              <img
                src="https://picsum.photos/200"
                alt="..."
                className="w-100 h-100"
              />
            </div>
            <div className="d-flex justify-content-center align-items-center w-25 m-auto">
              <props.component {...propsRoute} />
            </div>
          </div>
        );
      }}
    />
  );
};
