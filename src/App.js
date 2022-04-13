import { Route, Switch, Router } from "react-router-dom";
import DangKy from "./pages/DangKy/DangKy";
import DangNhap from "./pages/DangNhap/DangNhap";
import Home from "./pages/Home/Home";
import { LoginTemplate } from "./templates/LoginTemplate";
import { history } from "./utils/setting";
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/home"} component={Home} />
        <LoginTemplate exact path={"/dang-nhap"} component={DangNhap} />
        <LoginTemplate exact path={"/dang-ky"} component={DangKy} />
        <Route exact path={"/"} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
