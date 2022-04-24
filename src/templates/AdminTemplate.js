import { Route } from 'react-router-dom';
import HeaderAdmin from '../components/HeaderAdmin/HeaderAdmin';
import { Link } from 'react-router-dom';
import { history } from '../utils/setting';

export const AdminTemplate = (props) => {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <>
            <HeaderAdmin />
            <div className='row py-5'>
              <div className='col-3 pl-5'>
                <Link
                  to='/admin/quanlynguoidung/home'
                  onClick={() => history.push('/admin/quanlynguoidung/home')}
                >
                  <p>Quản lý người dùng</p>
                </Link>
                <Link
                  to='/admin/quanlykhoahoc/home'
                  onClick={() => history.push('/admin/quanlykhoahoc/home')}
                >
                  <p className=''>Quản lý khóa học</p>
                </Link>
              </div>
              <div className='col-8 p-0' style={{ maxWidth: '1400px' }}>
                <props.component {...propsRoute} />
              </div>
            </div>
          </>
        );
      }}
    />
  );
};
