import { Route, Switch, Router } from "react-router-dom";
import DangKy from "./pages/DangKy/DangKy";
import DangNhap from "./pages/DangNhap/DangNhap";
import Home from "./pages/Home/Home";
import { HomeTemplate } from "./tmp/HomeTemplate";
import { LoginTemplate } from "./tmp/LoginTemplate";
import { history } from "./utils/setting";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path={"/home"} component={Home} />
        <LoginTemplate path={"/dang-nhap"} component={DangNhap} />
        <LoginTemplate path={"/dang-ky"} component={DangKy} />
        <HomeTemplate path={"/"} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
