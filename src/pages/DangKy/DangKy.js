import { Link } from "react-router-dom";
import { history } from "../../utils/setting";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { dangKyAction } from "../../redux/actions/quanLyNguoiDungActions";
import { Axios } from "axios";

export default function DangKy() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: onchange,
  });

  const onSubmit = (values) => {
    dispatch(dangKyAction(values));
  };

  return (
    <div className="form w-75">
      <h3 className="text-center">Đăng ký Thành viên</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12">
            <div className="form-group mt-3 d-flex">
              <i className="fas fa-user"></i>
              <input
                className="form-control form-input form-input"
                type="text"
                placeholder="Họ tên"
                {...register("hoTen", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z].*[\s\.]*$/i,
                    message: "Họ tên sai định dạng",
                  },
                })}
              />
            </div>
            <div className="text-danger">
              {errors.hoTen?.type === "required" &&
                "Vui lòng không bỏ trống họ tên"}
              {errors.hoTen?.message}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-group mt-3 d-flex">
              <i className="fas fa-user"></i>
              <input
                className="form-control form-input"
                type="text"
                placeholder="Tài khoản"
                name="taiKhoan"
                {...register("taiKhoan", { required: true })}
              />
            </div>
            <div className="text-danger">
              {errors.taiKhoan?.type === "required" &&
                "Vui lòng không bỏ trống tài khoản"}
            </div>
          </div>
          <div className="col-6">
            <div className="form-group mt-3 d-flex">
              <i className="fas fa-key"></i>
              <input
                className="form-control form-input"
                type="password"
                placeholder="Mật khẩu"
                name="matKhau"
                {...register("matKhau", { required: true })}
              />
            </div>
            <div className="text-danger">
              {errors.matKhau?.type === "required" &&
                "Vui lòng không bỏ trống mật khẩu"}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-group mt-3 d-flex">
              <i className="fas fa-envelope"></i>
              <input
                className="form-control form-input"
                type="email"
                placeholder="Email"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email không hợp lệ",
                  },
                })}
              />
            </div>
            <div className="text-danger">
              {errors.email?.type === "required" &&
                "Vui lòng không bỏ trống Email"}
              {errors.email?.message}
            </div>
          </div>
          <div className="col-6">
            <div className="form-group mt-3 d-flex">
              <i className="fas fa-phone"></i>
              <input
                className="form-control form-input"
                type="text"
                placeholder="Số điện thoại: xxxx xxx xxx"
                name="soDT"
                {...register("soDT", {
                  required: true,
                  pattern: {
                    value: /\(?([0-9]{4})\)?([ .-]?)([0-9]{3})\2([0-9]{3})/,
                    message: "Số điện thoại không hợp lệ",
                  },
                })}
              />
            </div>
            <div className="text-danger">
              {errors.soDT?.type === "required" &&
                "Vui lòng không bỏ trống số điện thoại"}
              {errors.soDT?.message}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-group mt-3 d-flex">
              <i className="fas fa-users"></i>
              <select
                className="form-control form-input"
                defaultValue=""
                {...register("maNhom", { required: true })}
              >
                <option value="" disabled hidden>
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
            <div className="text-danger">
              {errors.maNhom?.type === "required" && "Vui lòng chọn mã nhóm"}
            </div>
          </div>
          <div className="col-6">
            <div className="form-group mt-3 d-flex">
              <i className="fas fa-user-cog"></i>
              <select
                className="form-control form-input"
                type="text"
                defaultValue=""
                {...register("maLoaiNguoiDung", { required: true })}
              >
                <option value="" disabled hidden>
                  Mã loại người dùng
                </option>
                <option value="HV">HV</option>
              </select>
            </div>
            <div className="text-danger">
              {errors.maLoaiNguoiDung?.type === "required" &&
                "Vui lòng chọn mã loại người dùng"}
            </div>
          </div>
        </div>

        <div className="form-group mt-3">
          <button className="w-100 btn font-weight-bold rounded" type="submit">
            Đăng ký
          </button>
        </div>
      </form>
      <p className="text-center">
        Bạn đã có tài khoản?{" "}
        <Link to="/dang-nhap" onClick={() => history.push("/dang-nhap")}>
          Đăng nhập
        </Link>
      </p>
    </div>
  );
}
