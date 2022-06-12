import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/form.css';
import { history } from '../../utils/setting';
import { useForm } from 'react-hook-form';
// import { searchNguoiDung } from '../../redux/actions/quanLyNguoiDungAction';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateNguoiDung } from '../../redux/actions/quanLyNguoiDungActions';

export default function SuaNguoiDung(props) {
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();
  const userTaiKhoan = props.match.params.id;
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?tuKhoa=${userTaiKhoan}`,
      );
      setUser(res.data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // searchNguoiDung(userTaiKhoan);
    // console.log(searchNguoiDung(userTaiKhoan));
    fetchData();
  }, []);
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: onchange,
  });

  const handleChangeInputUpdate = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    delete data.tenLoaiNguoiDung;
    console.log(data);
    // const action = updateNguoiDung(data);
    // dispatch(action);
    // history.push('/admin/quanlynguoidung/home');
  };
  return (
    <>
      <h2>Sửa người dùng</h2>
      <div className='form w-75'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='fas fa-user'></i>
                <input
                  {...register('hoTen', {
                    // required: 'Vui lòng không bỏ trống họ tên',
                  })}
                  className='form-control form-input form-input'
                  type='text'
                  placeholder='Họ tên'
                  defaultValue={user.hoTen}
                  onChange={handleChangeInputUpdate}
                />
              </div>
              <div className='text-danger'>{errors.hoTen?.message}</div>
            </div>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='fas fa-envelope'></i>
                <input
                  className='form-control form-input'
                  type='email'
                  placeholder='Email'
                  {...register('email', {
                    // required: 'Vui lòng không bỏ trống Email',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email không hợp lệ',
                    },
                  })}
                  defaultValue={user.email}
                  onChange={handleChangeInputUpdate}
                />
              </div>
              <div className='text-danger'>{errors.email?.message}</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='fas fa-user'></i>
                <input
                  className='form-control form-input'
                  type='text'
                  placeholder='Tài khoản'
                  {...register('taiKhoan', {
                    // required: 'Vui lòng không bỏ trống Email',
                  })}
                  defaultValue={user.taiKhoan}
                  onChange={handleChangeInputUpdate}
                />
              </div>
              <div className='text-danger'>{errors.taiKhoan?.message}</div>
            </div>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='fas fa-key'></i>
                <input
                  className='form-control form-input'
                  type='password'
                  placeholder='Mật khẩu'
                  {...register('matKhau', {
                    // required: 'Vui lòng không bỏ trống Email',
                  })}
                  defaultValue={user.matKhau}
                  onChange={handleChangeInputUpdate}
                />
              </div>
              <div className='text-danger'>{errors.matKhau?.message}</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='fas fa-phone'></i>
                <input
                  className='form-control form-input'
                  type='text'
                  placeholder='Số điện thoại: xxxx xxx xxx'
                  {...register('soDT', {
                    // required: 'Vui lòng không bỏ trống Email',
                    pattern: {
                      value: /\(?([0-9]{4})\)?([ .-]?)([0-9]{3})\2([0-9]{3})/,
                      message: 'Số điện thoại không hợp lệ',
                    },
                  })}
                  defaultValue={user.soDt}
                  onChange={handleChangeInputUpdate}
                />
              </div>
              <div className='text-danger'>{errors.soDT?.message}</div>
            </div>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='fas fa-user-cog'></i>
                <select
                  className='form-control form-input'
                  type='text'
                  defaultValue={user.maLoaiNguoiDung}
                  {...register('maLoaiNguoiDung', {
                    // required: 'Vui lòng không bỏ trống Email',
                  })}
                  onChange={handleChangeInputUpdate}
                >
                  <option value='' disabled hidden>
                    Mã loại người dùng
                  </option>
                  <option value='HV'>Học Viên</option>
                  <option value='GV'>Giáo Vụ</option>
                </select>
              </div>
              <div className='text-danger'>
                {errors.maLoaiNguoiDung?.message}
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-9'>
              <button
                className='btn default-button'
                onClick={() => history.goBack()}
              >
                <i className='fas fa-angle-double-left'></i> Trở lại
              </button>
            </div>
            <div className='col-3 d-flex'>
              <button className='w-100 btn default-button' type='submit'>
                Lưu
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
