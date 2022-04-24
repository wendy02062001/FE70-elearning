import { Route, Switch, Router } from 'react-router-dom';
import DangKy from './pages/DangKy/DangKy';
import DangNhap from './pages/DangNhap/DangNhap';
import Home from './pages/Home/Home';
import { HomeTemplate } from './templates/HomeTemplate';
import { LoginTemplate } from './templates/LoginTemplate';
import { AdminTemplate } from './templates/AdminTemplate';
import { history } from './utils/setting';
import QuanLyNguoiDung from './pages/QuanLyNguoiDung/QuanLyNguoiDung';
import ThemNguoiDung from './pages/QuanLyNguoiDung/ThemNguoiDung';
import SuaNguoiDung from './pages/QuanLyNguoiDung/SuaNguoiDung';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path={'/home'} component={Home} />
        <LoginTemplate path={'/dang-nhap'} component={DangNhap} />
        <LoginTemplate path={'/dang-ky'} component={DangKy} />
        <AdminTemplate
          path={'/admin/quanlynguoidung/home'}
          component={QuanLyNguoiDung}
        />
        <AdminTemplate
          path={'/admin/quanlynguoidung/them-nguoi-dung'}
          component={ThemNguoiDung}
        />
        <AdminTemplate
          path={'/admin/quanlynguoidung/sua-nguoi-dung'}
          component={SuaNguoiDung}
        />
        <HomeTemplate path={'/'} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
