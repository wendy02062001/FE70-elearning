import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setinfoDangKy((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    checkFormFill(infoDangKy);
  };

  let checkFormFill = (obj) => {
    for (var attr in obj) {
      if (obj[attr] === "" && attr !== "email" && attr !== "soDT") return true;
    }
    return false;
  };
  return (
    <div className="form w-75">
      <h3 className="text-center">Đăng ký Thành viên</h3>
      <div className="row">
        <div className="col-12">
          <div className="form-group mt-3 d-flex">
            <i
              className="fas fa-user"
              style={{
                padding: "10px",
                backgroundColor: "#ffc6c7",
                color: "#fff",
              }}
            ></i>
            <input
              className="form-control"
              type="text"
              name="hoTen"
              placeholder="Họ tên"
              required
              onChange={handleChangeInput}
              style={{
                backgroundColor: "#faeee7",
                color: "#33272a",
                outline: "none",
              }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="form-group mt-3 d-flex">
            <i
              className="fas fa-user"
              style={{
                padding: "10px",
                backgroundColor: "#ffc6c7",
                color: "#fff",
              }}
            ></i>
            <input
              className="form-control"
              type="text"
              name="taiKhoan"
              placeholder="Tài khoản"
              required
              onChange={handleChangeInput}
              style={{
                backgroundColor: "#faeee7",
                color: "#33272a",
                outline: "none",
              }}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group mt-3 d-flex">
            <i
              className="fas fa-key"
              style={{
                padding: "10px",
                backgroundColor: "#ffc6c7",
                color: "#fff",
              }}
            ></i>
            <input
              className="form-control"
              type="password"
              name="matKhau"
              placeholder="Mật khẩu"
              required
              onChange={handleChangeInput}
              style={{
                backgroundColor: "#faeee7",
                color: "#33272a",
                outline: "none",
              }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="form-group mt-3 d-flex">
            <i
              className="fas fa-envelope"
              style={{
                padding: "10px",
                backgroundColor: "#ffc6c7",
                color: "#fff",
              }}
            ></i>
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChangeInput}
              style={{
                backgroundColor: "#faeee7",
                color: "#33272a",
                outline: "none",
              }}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group mt-3 d-flex">
            <i
              className="fas fa-phone"
              style={{
                padding: "10px",
                backgroundColor: "#ffc6c7",
                color: "#fff",
              }}
            ></i>
            <input
              className="form-control"
              type="text"
              name="soDT"
              placeholder="Số điện thoại"
              onChange={handleChangeInput}
              style={{
                backgroundColor: "#faeee7",
                color: "#33272a",
                outline: "none",
              }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="form-group mt-3 d-flex">
            <i
              className="fas fa-users"
              style={{
                padding: "10px",
                backgroundColor: "#ffc6c7",
                color: "#fff",
              }}
            ></i>
            <select
              className="form-control"
              name="maNhom"
              required
              onChange={handleChangeInput}
              style={{
                backgroundColor: "#faeee7",
                outline: "none",
              }}
            >
              <option style={{ color: "#33272a" }} value="" disabled selected>
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
        </div>
        <div className="col-6">
          <div className="form-group mt-3 d-flex">
            <i
              className="fas fa-user-cog"
              style={{
                padding: "10px",
                backgroundColor: "#ffc6c7",
                color: "#fff",
              }}
            ></i>
            <select
              className="form-control"
              type="text"
              name="maLoaiNguoiDung"
              placeholder="Mã loại người dùng"
              onChange={handleChangeInput}
              style={{
                backgroundColor: "#faeee7",
                color: "#33272a",
                outline: "none",
              }}
            >
              <option value="" disabled selected>
                Mã loại người dùng
              </option>
              <option value="HV">HV</option>
              <option value="GV">GV</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-group mt-3">
        <button
          className="w-100 btn font-weight-bold rounded"
          type="submit"
          disabled={checkFormFill(infoDangKy)}
          style={{ color: "#33272a", backgroundColor: "#ff8ba7" }}
        >
          Đăng ký
        </button>
      </div>
      <p className="text-center">
        Bạn đã có tài khoản? <a href="/dang-nhap">Đăng nhập</a>
      </p>
    </div>
  );
}
