import React from 'react';
import { history } from '../../utils/setting';
import { useForm } from 'react-hook-form';
import { addNguoiDung } from '../../redux/actions/quanLyNguoiDungActions';
import { useDispatch } from 'react-redux';

export default function ThemNguoiDung() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: onchange,
  });

  return (
    <>
      <h2>Thêm người dùng</h2>
      <div className='form w-75'>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            const action = addNguoiDung(data);
            dispatch(action);
            history.push('/admin/quanlynguoidung/home');
          })}
        >
          <div className='row'>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='fas fa-user'></i>
                <input
                  className="form-control form-input form-input"
                  type="text"
                  placeholder="Họ tên"
                  {...register("hoTen", {
                    required: true,
                  })}
                />
              </div>
              <div className="text-danger">
                {errors.hoTen?.type === "required" &&
                  "Vui lòng không bỏ trống họ tên"}
                {errors.hoTen?.message}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group mt-3 d-flex">
                <i className="fas fa-envelope"></i>
                <input
                  className="form-control form-input"
                  type="email"
                  placeholder="Email"
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
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group mt-3 d-flex">
                <i className="fas fa-user"></i>
                <input
                  className="form-control form-input"
                  type="text"
                  placeholder="Tài khoản"
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
                <i className="fas fa-phone"></i>
                <input
                  className="form-control form-input"
                  type="text"
                  placeholder="Số điện thoại: xxxx xxx xxx"
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
                  <option value="GV">GV</option>
                </select>
              </div>
              <div className="text-danger">
                {errors.maLoaiNguoiDung?.type === "required" &&
                  "Vui lòng chọn mã loại người dùng"}
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-9'>
              <button
                className='btn btn-outline'
                onClick={() => history.goBack()}
              >
                <i className='fas fa-angle-double-left'></i> Trở lại
              </button>
            </div>
            <div className="col-3 d-flex">
              <button className="w-100 btn default-button mr-2" type="submit">
                Thêm
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
