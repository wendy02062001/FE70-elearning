import React from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../utils/setting";

export default function HeaderHome() {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-white'>
      <NavLink className='navbar-brand p-0' to='/'>
        <img
          src='./images/test2pink-removebg-preview.png'
          style={{ maxHeight: '80px' }}
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
                className='p-2 px-3 btn default-button'
                style={{ color: '#33272a', backgroundColor: '#ff8ba7' }}
              >
                <i className='fas fa-list'></i>&nbsp; Danh mục khoá học
              </a>
              <div className="dropdown-menu mt-2" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Action 1
                </a>
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <form className="my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Tìm khoá học"
            />
          </form>
        </div>
        <div
          className='col-4 d-flex justify-content-end '
          style={{ paddingRight: '30px' }}
        >
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
        </div>
      </div>
    </nav>
  );
}
