import React, { useState } from "react";

export default function DangKy() {
  const [infoDangKy, setinfoDangKy] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "m",
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
      if (obj[attr] === "") return true;
      console.log(obj[attr]);
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
              className="fas fa-users"
              style={{
                padding: "10px",
                backgroundColor: "#ffc6c7",
                color: "#fff",
              }}
            ></i>
            <input
              className="form-control"
              type="text"
              name="maNhom"
              placeholder="Mã nhóm"
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
              className="fas fa-user-cog"
              style={{
                padding: "10px",
                backgroundColor: "#ffc6c7",
                color: "#fff",
              }}
            ></i>
            <input
              className="form-control"
              type="text"
              name="maLoaiNguoiDung"
              placeholder="Mã loại người dùng"
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
