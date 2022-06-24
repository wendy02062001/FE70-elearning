import React from 'react';
import { Link } from 'react-router-dom';
import { history } from '../../utils/setting';
import { useForm } from 'react-hook-form';

export default function ThemKhoaHoc() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: onchange,
  });

  const onSubmit = (data) => {
    console.log(data);
    // history.push('/dang-nhap');
  };
  return (
    <>
      <h2>Thêm khoá học</h2>
      <div className='form w-75'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='fas fa-address-book'></i>
                <input
                  className='form-control form-input'
                  type='text'
                  placeholder='Mã khoá học'
                  {...register('maKhoaHoc', { required: true })}
                />
              </div>
              <div className='text-danger'>
                {errors.maKhoaHoc?.type === 'required' &&
                  'Vui lòng không bỏ trống mã khoá học'}
              </div>
            </div>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='fas fa-star'></i>
                <input
                  className='form-control form-input'
                  type='input'
                  placeholder='Đánh giá'
                  {...register('danhGia', { required: true })}
                />
              </div>
              <div className='text-danger'>
                {errors.danhGia?.type === 'required' &&
                  'Vui lòng không bỏ trống đánh giá'}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='fas fa-user-cog'></i>
                <input
                  className='form-control form-input form-input'
                  type='text'
                  placeholder='Tên khoá học'
                  {...register('tenKhoaHoc', {
                    required: true,
                  })}
                />
              </div>
              <div className='text-danger'>
                {errors.tenKhoaHoc?.type === 'required' &&
                  'Vui lòng không bỏ trống tên khoá học'}
                {errors.tenKhoaHoc?.message}
              </div>
            </div>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='fas fa-eye'></i>
                <input
                  className='form-control form-input'
                  type='text'
                  placeholder='Lượt xem'
                  {...register('luotXem', { required: true })}
                />
              </div>
              <div className='text-danger'>
                {errors.luotXem?.type === 'required' &&
                  'Vui lòng không bỏ trống lượt xem'}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='far fa-list-alt'></i>
                <select
                  className='form-control form-input'
                  type='text'
                  defaultValue=''
                  {...register('danhMucKhoaHoc', { required: true })}
                >
                  <option value='' disabled hidden>
                    Danh mục khoá học
                  </option>
                  <option value='HV'>Lập trình FrontEnd</option>
                  <option value='GV'>Lập trình BackEnd</option>
                </select>
              </div>
              <div className='text-danger'>
                {errors.danhMucKhoaHoc?.type === 'required' &&
                  'Vui lòng chọn danh mục khoá học'}
              </div>
            </div>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='fas fa-user'></i>
                <select
                  className='form-control form-input'
                  type='text'
                  defaultValue=''
                  {...register('nguoiTao', { required: true })}
                >
                  <option value='' disabled hidden>
                    Người tạo
                  </option>
                  <option value='HV'>TRƯƠNG TẤN KHẢI</option>
                  <option value='GV'>TOIDICODEDAO</option>
                </select>
              </div>
              <div className='text-danger'>
                {errors.nguoiTao?.type === 'required' &&
                  'Vui lòng không bỏ trống người tạo'}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='fas fa-calendar'></i>
                <input
                  className='form-control form-input'
                  type='date'
                  {...register('ngayTao', { required: true })}
                />
              </div>
              <div className='text-danger'>
                {errors.ngayTao?.type === 'required' &&
                  'Vui lòng chọn ngày tạo'}
              </div>
            </div>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='fas fa-image'></i>
                <input
                  className='form-control form-input'
                  type='file'
                  placeholder='Hình ảnh'
                  {...register('hinhAnh', { required: true })}
                />
              </div>
              <div className='text-danger'>
                {errors.hinhAnh?.type === 'required' &&
                  'Vui lòng chọn hình ảnh'}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='form-group mt-3 d-flex'>
                <textarea
                  className='form-control form-input'
                  {...register('moTa', { required: true })}
                  rows='5'
                  placeholder='Mô tả'
                ></textarea>
              </div>
              <div className='text-danger'>
                {errors.moTa?.type === 'required' && 'Vui lòng nhập mô tả'}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-9'>
              <button
                className='btn btn-default'
                onClick={() => history.goBack()}
              >
                <i className='fas fa-angle-double-left'></i> Trở lại
              </button>
            </div>
            <div className='col-3 d-flex'>
              <button className='w-100 btn default-button mr-2' type='submit'>
                Thêm
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
