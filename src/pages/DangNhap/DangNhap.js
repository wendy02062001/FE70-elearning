import { Link } from "react-router-dom";
import { history } from "../../utils/setting";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { DangNhapAction } from "../../redux/actions/NguoiDung/QuanLyNguoiDungAction";

export default function DangNhap() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: onchange,
  });

  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState({ taiKhoan: "", matKhau: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const onSubmit = (values) => {
    dispatch(DangNhapAction(values));
  };

  return (
    <div className="form w-50">
      <h3 className="text-center">Đăng nhập</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mt-3 d-flex">
          <i className="fas fa-user"></i>
          <input
            className="form-control form-input"
            type="text"
            placeholder="Tài khoản"
            name="taiKhoan"
            {...register("taiKhoan", { required: true })}
            onChange={handleChange}
          />
        </div>
        <div className="text-danger">
          {errors.taiKhoan?.type === "required" &&
            "Vui lòng không bỏ trống tài khoản"}
        </div>
        <div className="form-group mt-3 d-flex">
          <i className="fas fa-key"></i>
          <input
            className="form-control form-input"
            type="password"
            placeholder="Mật khẩu"
            name="matKhau"
            {...register("matKhau", { required: true })}
            onChange={handleChange}
          />
        </div>
        <div className="text-danger">
          {errors.matKhau?.type === "required" &&
            "Vui lòng không bỏ trống mật khẩu"}
        </div>

        <div className="form-group mt-3">
          <button className="w-100 btn font-weight-bold rounded" type="submit">
            Đăng nhập
          </button>
        </div>
      </form>
      <p className="text-center">
        Bạn chưa có tài khoản?{" "}
        <Link to="/dang-ky" onClick={() => history.push("/dang-ky")}>
          Đăng ký ngay
        </Link>
      </p>
    </div>
  );
}
