import React, { useState } from "react";
import { Redirect, Link, NavLink } from "react-router-dom";
import "../../style/form.css";
import { history } from "../../utils/setting";

export default function DangKy() {
  const [infoDangKy, setinfoDangKy] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDT: "",
    maNhom: "",
    maLoaiNguoiDung: "",
  });

  const [errorDangKy, setErrorDangKy] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDT: "",
    maNhom: "",
    maLoaiNguoiDung: "",
  });

  const handleChangeInput = (e) => {
    const { name, value, type } = e.target;

    setinfoDangKy((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    let newError = { ...errorDangKy };

    let errorMess = "";
    if (value === "") {
      errorMess = "Vui lòng không bỏ trống";
    }

    if (type === "email") {
      let regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!regexEmail.test(value)) {
        errorMess = "Email không đúng định dạng";
      }
    }

    if (name === "soDT") {
      let regexSDT = /\(?([0-9]{4})\)?([ .-]?)([0-9]{3})\2([0-9]{3})/;
      let regexSDT1 = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
      if (!regexSDT.test(value) && !regexSDT1.test(value)) {
        errorMess = "Số điện thoại không đúng định dạng";
      }
    }

    newError[name] = errorMess;

    setErrorDangKy(newError);

    checkFormFill(infoDangKy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/dang-nhap");
  };

  let checkFormFill = (obj) => {
    for (let attr in obj) {
      if (obj[attr] === "") return true;
    }

    for (let err in errorDangKy) {
      if (errorDangKy[err] !== "") return true;
    }

    return false;
  };

  return (
    <div className="form w-75">
      <h3 className="text-center">Đăng ký Thành viên</h3>
      <div className="row">
        <div className="col-12">
          <div className="form-group mt-3 d-flex">
            <i className="fas fa-user"></i>
            <input
              className="form-control form-input form-input"
              type="text"
              name="hoTen"
              placeholder="Họ tên"
              required
              onChange={handleChangeInput}
            />
          </div>
          <div className="text-danger">{errorDangKy.hoTen}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="form-group mt-3 d-flex">
            <i className="fas fa-user"></i>
            <input
              className="form-control form-input"
              type="text"
              name="taiKhoan"
              placeholder="Tài khoản"
              required
              onChange={handleChangeInput}
            />
          </div>
          <div className="text-danger">{errorDangKy.taiKhoan}</div>
        </div>
        <div className="col-6">
          <div className="form-group mt-3 d-flex">
            <i className="fas fa-key"></i>
            <input
              className="form-control form-input"
              type="password"
              name="matKhau"
              placeholder="Mật khẩu"
              required
              onChange={handleChangeInput}
            />
          </div>
          <div className="text-danger">{errorDangKy.matKhau}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="form-group mt-3 d-flex">
            <i className="fas fa-envelope"></i>
            <input
              className="form-control form-input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChangeInput}
            />
          </div>
          <div className="text-danger">{errorDangKy.email}</div>
        </div>
        <div className="col-6">
          <div className="form-group mt-3 d-flex">
            <i className="fas fa-phone"></i>
            <input
              className="form-control form-input"
              type="text"
              name="soDT"
              placeholder="Số điện thoại: xxxx xxx xxx"
              onChange={handleChangeInput}
            />
          </div>
          <div className="text-danger">{errorDangKy.soDT}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="form-group mt-3 d-flex">
            <i className="fas fa-users"></i>
            <select
              className="form-control form-input"
              name="maNhom"
              defaultValue="0"
              required
              onChange={handleChangeInput}
            >
              <option style={{ color: "#33272a" }} value="0" disabled>
                Mã nhóm
              </option>
              <option value="GP01">GP01</option>
              <option value="GP02">GP02</option>
              <option value="GP03">GP03</option>
              <option value="GP04">GP04</option>
              <option value="GP05">GP05</option>
              <option value="GP06">GP06</option>
              <option value="GP07">GP07</option>
              <option value="GP08">GP08</option>
              <option value="GP09">GP09</option>
              <option value="GP10">GP10</option>
            </select>
          </div>
          <div className="text-danger">{errorDangKy.maNhom}</div>
        </div>
        <div className="col-6">
          <div className="form-group mt-3 d-flex">
            <i className="fas fa-user-cog"></i>
            <select
              className="form-control form-input"
              type="text"
              name="maLoaiNguoiDung"
              defaultValue="0"
              placeholder="Mã loại người dùng"
              onChange={handleChangeInput}
            >
              <option value="0" disabled>
                Mã loại người dùng
              </option>
              <option value="HV">HV</option>
              <option value="GV">GV</option>
            </select>
          </div>
          <div className="text-danger">{errorDangKy.maLoaiNguoiDung}</div>
        </div>
      </div>

      <div className="form-group mt-3">
        <button
          className="w-100 btn font-weight-bold rounded"
          type="submit"
          disabled={checkFormFill(infoDangKy)}
          onClick={handleSubmit}
        >
          Đăng ký
        </button>
      </div>
      <p className="text-center">
        Bạn đã có tài khoản?{" "}
        <Link to="/dang-nhap" onClick={() => history.push("/dang-nhap")}>
          Đăng nhập
        </Link>
      </p>
    </div>
  );
}
