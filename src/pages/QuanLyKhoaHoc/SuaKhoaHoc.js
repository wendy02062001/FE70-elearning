import '../../style/form.css';
import { history } from '../../utils/setting';
import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import '../../style/form.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateKhoaHoc } from '../../redux/actions/quanLyKhoaHocAction';

export default function SuaKhoaHoc(props) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [course, setCourse] = useState([]);
  const dispatch = useDispatch();
  const courseTenTaiKhoan = props.match.params.id;
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${courseTenTaiKhoan}`,
      );
      setCourse(res.data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleChangeInputUpdate = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: onchange,
  });

  const taiKhoan = '';
  const hoTen = '';
  if (course !== undefined) {
    // const { tenLoaiNguoiDung } = course.nguoiTao;
    // taiKhoan = course.nguoiTao;
    // hoTen = course.nguoiTao.hoTen;
  }
  console.log(taiKhoan, hoTen);

  const onSubmit = (data) => {
    const image = new FormData();
    image.append('file', data.hinhAnh[0]);
    image.append('tenKhoaHoc', data.tenKhoaHoc);
    console.log(image);
    try {
      const uploadFile = async () => {
        const res = await axios.post(
          'http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc',
          image,
        );
      };
      uploadFile();
    } catch (error) {
      console.log(error);
    }

    const formData = {
      maKhoaHoc: data.maKhoaHoc,
    };
    console.log(formData);
    // const action = updateKhoaHoc(data);
    // dispatch(action);
    // history.push('/admin/quanlykhoahoc/home');
  };
  return (
    <>
      <h2>Sửa khoá học</h2>
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
                  {...register('maKhoaHoc', {
                    // required: 'Vui lòng không bỏ trống mã khoá học',
                  })}
                  onChange={handleChangeInputUpdate}
                  defaultValue={course.maKhoaHoc}
                />
              </div>
              <div className='text-danger'>{errors.maKhoaHoc?.message}</div>
            </div>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='fas fa-star'></i>
                <input
                  className='form-control form-input'
                  type='input'
                  placeholder='Đánh giá'
                  {...register('danhGia', {
                    // required: 'Vui lòng không bỏ trống mã khoá học',
                  })}
                  onChange={handleChangeInputUpdate}
                  defaultValue={course.danhGia}
                  name='danhGia'
                />
              </div>
              <div className='text-danger'>{errors.danhGia?.message}</div>
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
                    // required: 'Vui lòng không bỏ trống tên khoá học',
                  })}
                  onChange={handleChangeInputUpdate}
                  defaultValue={course.tenKhoaHoc}
                />
              </div>
              <div className='text-danger'>{errors.tenKhoaHoc?.message}</div>
            </div>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='fas fa-eye'></i>
                <input
                  className='form-control form-input'
                  type='text'
                  placeholder='Lượt xem'
                  {...register('luotXem', {
                    // required: 'Vui lòng không bỏ trống lượt xem',
                  })}
                  onChange={handleChangeInputUpdate}
                  defaultValue={course.luotXem}
                  name='luotXem'
                />
              </div>
              <div className='text-danger'>{errors.luotXem?.message}</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='far fa-list-alt'></i>
                <select
                  className='form-control form-input'
                  type='text'
                  defaultValue={course.danhMucKhoaHoc}
                  {...register('danhMucKhoaHoc', {
                    // required: 'Vui lòng chọn danh mục khoá học',
                  })}
                  onChange={handleChangeInputUpdate}
                  name='danhMucKhoaHoc'
                >
                  <option value='HV'>Lập trình FrontEnd</option>
                  <option value='GV'>Lập trình BackEnd</option>
                </select>
              </div>
              <div className='text-danger'>
                {errors.danhMucKhoaHoc?.message}
              </div>
            </div>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='fas fa-user'></i>
                <select
                  className='form-control form-input'
                  type='text'
                  defaultValue={course.nguoiTao}
                  {...register('nguoiTao', {
                    // required: 'Vui lòng không bỏ trống người tạo',
                  })}
                  onChange={handleChangeInputUpdate}
                  name='nguoiTao'
                >
                  <option value='' disabled hidden>
                    Người tạo
                  </option>
                  <option value='HV'>TRƯƠNG TẤN KHẢI</option>
                  <option value='GV'>TOIDICODEDAO</option>
                </select>
              </div>
              <div className='text-danger'>{errors.nguoiTao?.message}</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='fas fa-calendar'></i>
                <input
                  className='form-control form-input'
                  type='date'
                  {...register('ngayTao', {
                    // required: 'Vui lòng chọn ngày tạo',
                  })}
                  name='ngayTao'
                  onChange={handleChangeInputUpdate}
                  defaultValue={course.ngayTao}
                />
              </div>
              <div className='text-danger'>{errors.ngayTao?.message}</div>
            </div>
            <div className='col-6'>
              <div className='form-group mt-3 d-flex'>
                <i className='fas fa-image'></i>
                <input
                  className='form-control form-input'
                  type='file'
                  placeholder='Hình ảnh'
                  {...register('hinhAnh', {
                    // required: 'Vui lòng chọn hình ảnh',
                  })}
                  onChange={handleChangeInputUpdate}
                  defaultValue={course.hinhAnh}
                />
              </div>
              <div className='text-danger'>{errors.hinhAnh?.message}</div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='form-group mt-3 d-flex'>
                <textarea
                  className='form-control form-input'
                  {...register(
                    'moTa',
                    // { required: 'Vui lòng chọn hình ảnh' }
                  )}
                  rows='5'
                  placeholder='Mô tả'
                  onChange={handleChangeInputUpdate}
                  defaultValue={course.moTa}
                  name='moTa'
                ></textarea>
              </div>
              <div className='text-danger'>{errors.moTa?.message}</div>
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
              <button className='w-100 btn default-button mr-2' type='submit'>
                Lưu
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
