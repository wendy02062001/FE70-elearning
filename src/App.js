import { Route, Switch, Router } from "react-router-dom";
import DangKy from "./pages/DangKy/DangKy";
import DangNhap from "./pages/DangNhap/DangNhap";
import { HomeTemplate } from "./templates/HomeTemplate";
import { LoginTemplate } from "./templates/LoginTemplate";
import Home from "./pages/Home/Home";
import { history } from "./utils/setting";
import TimKiemKhoaHoc from "./pages/TimKiemKhoaHoc/TimKiemKhoaHoc";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path={"/home"} component={Home} />
        <HomeTemplate path={"/timKiemKhoaHoc"} component={TimKiemKhoaHoc} />
        <LoginTemplate path={"/dang-nhap"} component={DangNhap} />
        <LoginTemplate path={"/dang-ky"} component={DangKy} />
        <HomeTemplate path={"/"} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
