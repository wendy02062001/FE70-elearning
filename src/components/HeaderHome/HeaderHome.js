import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { layDanhMucKhoaHocAction } from "../../redux/actions/quanLyKhoaHocAction";
import { ACCESSTOKEN, history, USER_LOGIN } from "../../utils/setting";

export default function HeaderHome() {
  const { arrDanhMuc } = useSelector(
    (rootReducer) => rootReducer.quanLyKhoaHocReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhMucKhoaHocAction());
  }, []);

  const renderBtn = () => {
    if (localStorage.getItem(USER_LOGIN)) {
      let usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
      console.log(usLogin);
      return (
        <div className="d-flex justify-content-center align-items-center">
          <p className="mt-3 mr-3">
            <i class="fas fa-user"></i>
            <span className="pl-2">Hi {usLogin.hoTen}!</span>
          </p>
          <button
            className="btn default-button my-2 mr-4 my-sm-0"
            type="button"
            onClick={() => {
              localStorage.setItem(USER_LOGIN, "");
              localStorage.setItem(ACCESSTOKEN, "");
              history.push("/");
            }}
          >
            Đăng xuất
          </button>
        </div>
      );
    } else {
      return (
        <>
          <button
            className="btn default-button my-2 mr-4 my-sm-0"
            type="button"
            onClick={() => {
              history.push("/dang-ky");
            }}
          >
            Đăng ký
          </button>
          <button
            className="btn default-button my-2 my-sm-0"
            type="button"
            onClick={() => {
              history.push("/dang-nhap");
            }}
          >
            Đăng nhập
          </button>
        </>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-white">
      <NavLink className="navbar-brand p-0" to="/">
        <img
          src="./images/mainbg.png"
          alt="..."
          style={{ maxHeight: "80px" }}
        />
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse d-flex" id="collapsibleNavId">
        <div className="col-4">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item dropdown">
              <a
                // className='nav-link dropdown-toggle'
                id="dropdownId"
                data-toggle="dropdown"
                // aria-haspopup='true'
                // aria-expanded='false'
                className="p-2 px-3 btn default-button"
                style={{ color: "#33272a", backgroundColor: "#ff8ba7" }}
              >
                <i className="fas fa-list"></i>&nbsp; Danh mục khoá học
              </a>
              <div className="dropdown-menu mt-2" aria-labelledby="dropdownId">
                {arrDanhMuc.map((danhmuc, idx) => {
                  let dmDir =
                    "/danhMucKhoaHoc?MaDanhMuc=" + `${danhmuc.maDanhMuc}`;
                  return (
                    <NavLink
                      className="dropdown-item"
                      activeClassName="current"
                      key={idx}
                      to={dmDir}
                    >
                      {danhmuc.tenDanhMuc}
                    </NavLink>
                  );
                })}
              </div>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <form className="my-2 my-lg-0" action="/timKiemKhoaHoc" method="GET">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Tìm khoá học"
              name="kwKhoaHoc"
            />
          </form>
        </div>
        <div
          className="col-4 d-flex justify-content-end "
          style={{ paddingRight: "30px" }}
        >
          {renderBtn()}
        </div>
      </div>
    </nav>
  );
}
