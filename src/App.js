import { Route, Switch, Router } from "react-router-dom";
import DangKy from "./pages/DangKy/DangKy";
import DangNhap from "./pages/DangNhap/DangNhap";
import Home from "./pages/Home/Home";
import { HomeTemplate } from "./templates/HomeTemplate";
import { LoginTemplate } from "./templates/LoginTemplate";
import { AdminTemplate } from "./templates/AdminTemplate";
import { history } from "./utils/setting";
import QuanLyNguoiDung from "./pages/QuanLyNguoiDung/QuanLyNguoiDung";
import ThemNguoiDung from "./pages/QuanLyNguoiDung/ThemNguoiDung";
import TimKiemKhoaHoc from "./pages/TimKiemKhoaHoc/TimKiemKhoaHoc";
import ChiTietKhoaHoc from "./pages/ChiTietKhoaHoc/ChiTietKhoaHoc";
import ThongTinCaNhan from "./pages/ThongTinCaNhan/ThongTinCaNhan";
import SuaNguoiDung from './pages/QuanLyNguoiDung/SuaNguoiDung';
import QuanLyKhoaHoc from './pages/QuanLyKhoaHoc/QuanLyKhoaHoc';
import ThemKhoaHoc from './pages/QuanLyKhoaHoc/ThemKhoaHoc';
import SuaKhoaHoc from './pages/QuanLyKhoaHoc/SuaKhoaHoc';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path={"/home"} component={Home} />
        <HomeTemplate path={"/timKiemKhoaHoc"} component={TimKiemKhoaHoc} />
        <HomeTemplate path={"/chiTietKhoaHoc"} component={ChiTietKhoaHoc} />
        <HomeTemplate path={"/thongTinCaNhan"} component={ThongTinCaNhan} />
        <LoginTemplate path={"/dang-nhap"} component={DangNhap} />
        <LoginTemplate path={"/dang-ky"} component={DangKy} />
        <AdminTemplate
          path={"/admin/quanlynguoidung/home"}
          component={QuanLyNguoiDung}
        />
        <AdminTemplate
          path={"/admin/quanlynguoidung/them-nguoi-dung"}
          component={ThemNguoiDung}
        />
        <AdminTemplate
          path={'/admin/quanlynguoidung/sua-nguoi-dung'}
          component={SuaNguoiDung}
        />
        <AdminTemplate
          path={'/admin/quanlykhoahoc/home'}
          component={QuanLyKhoaHoc}
        />
        <AdminTemplate
          path={'/admin/quanlykhoahoc/them-khoa-hoc'}
          component={ThemKhoaHoc}
        />
        <AdminTemplate
          path={'/admin/quanlykhoahoc/sua-khoa-hoc'}
          component={SuaKhoaHoc}
        />
        <HomeTemplate path={'/'} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
