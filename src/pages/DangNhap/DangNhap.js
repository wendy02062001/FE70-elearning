import React, { useState } from "react";

export default function DangNhap() {
  const [infoDangNhap, setInfoDangNhap] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setInfoDangNhap((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="form w-50">
      <h3 className="text-center">Đăng nhập</h3>
      <div className="form-group mt-3 d-flex">
        <i
          className="fas fa-user"
          style={{ padding: "10px", backgroundColor: "#ffc6c7", color: "#fff" }}
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
      <div className="form-group mt-3 d-flex">
        <i
          className="fas fa-key"
          style={{ padding: "10px", backgroundColor: "#ffc6c7", color: "#fff" }}
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

      <div className="form-group mt-3">
        <button
          className="w-100 btn font-weight-bold rounded"
          type="submit"
          disabled={
            infoDangNhap.taiKhoan === "" || infoDangNhap.matKhau === ""
              ? true
              : false
          }
          style={{ color: "#33272a", backgroundColor: "#ff8ba7" }}
        >
          Đăng nhập
        </button>
      </div>
      <p className="text-center">
        Bạn chưa có tài khoản? <a href="/dang-ky">Đăng ký ngay</a>
      </p>
    </div>
  );
}
