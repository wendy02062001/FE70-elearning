import React from 'react';
import { history } from '../../utils/setting';
import GhiDanhKhoaHoc from './GhiDanhKhoaHoc';

export default function QuanLyKhoaHoc() {
  return (
    <div className=' p-0'>
      <button
        className='btn default-button mb-lg-3'
        onClick={() => {
          history.push('/admin/quanlykhoahoc/them-khoa-hoc');
        }}
      >
        Thêm khoá học
      </button>
      <form className='my-2 my-lg-0'>
        <input
          className='form-control mr-sm-2'
          type='text'
          placeholder='Nhập vào tài khoản hoặc họ tên người dùng'
        />
      </form>
      <table className='table table-striped mt-3'>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã khoá học</th>
            <th>Tên khoá học</th>
            <th>Hình ảnh</th>
            <th>Lượt xem</th>
            <th>Người tạo</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>1</td>
            <td>LTFE</td>
            <td>*********</td>
            <td>*****</td>
            <td>*******</td>
            <td>Khải</td>
            <td className='d-flex'>
              <button
                className='btn btn-primary mr-2'
                data-toggle='modal'
                data-target='#exampleModal'
              >
                <span className='small'>Ghi danh</span>
              </button>
              <button
                className='btn btn-success mr-2'
                onClick={() => {
                  history.push('/admin/quanlykhoahoc/sua-khoa-hoc');
                }}
              >
                <span className='small'>Sửa</span>
              </button>
              <button className='btn btn-danger'>
                <span className='small'>Xoá</span>
              </button>
            </td>
          </tr>
          <tr>
            <td scope='row'>2</td>
            <td>LTFE</td>
            <td>*********</td>
            <td>*****</td>
            <td>*******</td>
            <td>Khải</td>
            <td className='d-flex'>
              <button
                className='btn btn-primary mr-2'
                data-toggle='modal'
                data-target='#exampleModal'
              >
                <span className='small'>Ghi danh</span>
              </button>
              <button
                className='btn btn-success mr-2'
                onClick={() => {
                  history.push('/admin/quanlykhoahoc/sua-khoa-hoc');
                }}
              >
                <span className='small'>Sửa</span>
              </button>
              <button className='btn btn-danger'>
                <span className='small'>Xoá</span>
              </button>
            </td>
          </tr>
          <tr>
            <td scope='row'>3</td>
            <td>LTFE</td>
            <td>*********</td>
            <td>*****</td>
            <td>*******</td>
            <td>Khải</td>
            <td className='d-flex'>
              <button
                className='btn btn-primary mr-2'
                data-toggle='modal'
                data-target='#exampleModal'
              >
                <span className='small'>Ghi danh</span>
              </button>
              <button
                className='btn btn-success mr-2'
                onClick={() => {
                  history.push('/admin/quanlykhoahoc/sua-khoa-hoc');
                }}
              >
                <span className='small'>Sửa</span>
              </button>
              <button className='btn btn-danger'>
                <span className='small'>Xoá</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <GhiDanhKhoaHoc />
    </div>
  );
}
