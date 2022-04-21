import { Route } from "react-router-dom";
import FooterHome from "../components/FooterHome/FooterHome";
import HeaderHome from "../components/HeaderHome/HeaderHome";

export const HomeTemplate = (props) => {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <>
            <HeaderHome />
            <div className="pt-2 pb-5">
              <props.component {...propsRoute} />
            </div>
            <FooterHome />
          </>
        );
      }}
    ></Route>
  );
};
