import React from 'react';
import { history } from '../../utils/setting';
import GhiDanhNguoiDung from './GhiDanhNguoiDung';

export default function QuanLyNguoiDung() {
  return (
    <div className=' p-0'>
      <button
        className='btn default-button mb-lg-3'
        onClick={() => {
          history.push('/admin/quanlynguoidung/them-nguoi-dung');
        }}
      >
        Thêm người dùng
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
            <th>Tài khoản</th>
            <th>Mật khẩu</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>1</td>
            <td>truongtankhai</td>
            <td>*********</td>
            <td>Trương Tấn Khải</td>
            <td>truongtankhai@gmail.com</td>
            <td>0687965465</td>
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
                  history.push('/admin/quanlynguoidung/sua-nguoi-dung');
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
            <td>truongtankhai</td>
            <td>*********</td>
            <td>Trương Tấn Khải</td>
            <td>truongtankhai@gmail.com</td>
            <td>0687965465</td>
            <td>
              <button className='btn btn-primary mr-2'>
                <span className='small'>Ghi danh</span>
              </button>
              <button className='btn btn-success mr-2'>
                {' '}
                <span className='small'>Sửa</span>
              </button>
              <button className='btn btn-danger'>
                {' '}
                <span className='small'>Xoá</span>
              </button>
            </td>
          </tr>
          <tr>
            <td scope='row'>3</td>
            <td>truongtankhai</td>
            <td>*********</td>
            <td>Trương Tấn Khải</td>
            <td>truongtankhai@gmail.com</td>
            <td>0687965465</td>
            <td>
              <button className='btn btn-primary mr-2'>
                <span className='small'>Ghi danh</span>
              </button>
              <button className='btn btn-success mr-2'>
                <span className='small'>Sửa</span>
              </button>
              <button className='btn btn-danger'>
                <span className='small'>Xoá</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <GhiDanhNguoiDung />
    </div>
  );
}
