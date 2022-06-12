import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  getAllNguoiDung,
  deleteNguoiDung,
} from '../../redux/actions/quanLyNguoiDungActions';
import { history } from '../../utils/setting';
import GhiDanhNguoiDung from './GhiDanhNguoiDung';

export default function QuanLyNguoiDung() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const { arrNguoiDung } = useSelector(
    (rootReducer) => rootReducer.quanLyNguoiDungReducer,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    let action = getAllNguoiDung();
    dispatch(action);
  }, []);
  console.log(arrNguoiDung);

  /*-----------------------HANDLE PAGINATION------------------------------------------------ */

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = arrNguoiDung.slice(indexOfFirstItem, indexOfLastItem);

  const pages = [];
  for (let i = 1; i <= Math.ceil(arrNguoiDung.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const handleClickPagination = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <button
          key={number}
          id={number}
          className={
            currentPage === number
              ? 'active btn btn-outline-primary ml-2'
              : 'btn btn-outline-primary ml-2'
          }
          onClick={handleClickPagination}
        >
          {number}
        </button>
      );
    } else {
      return null;
    }
  });

  const handleNextPagination = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlPrevPagination = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <button
        className='btn btn-outline-primary mr-2 ml-2'
        onClick={handleNextPagination}
      >
        &hellip;
      </button>
    );
  }
  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <button
        className='btn btn-outline-primary ml-2 mr-2'
        onClick={handlPrevPagination}
      >
        &hellip;
      </button>
    );
  }

  /*-------------------------------------------------------------------------------- */

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
          {currentItems.map((user, index) => {
            return (
              <tr key={index}>
                <td scope='row'>{index + 1}</td>
                <td>{user.taiKhoan}</td>
                <td>*********</td>
                <td>{user.hoTen}</td>
                <td>{user.email}</td>
                <td>{user.soDt}</td>
                <td className='d-flex'>
                  <button
                    className='btn btn-primary mr-2'
                    data-toggle='modal'
                    data-target='#exampleModal'
                  >
                    <span className='small'>Ghi danh</span>
                  </button>
                  <NavLink
                    exact
                    className='btn btn-success mr-2'
                    // onClick={() => {
                    //   history.push('/admin/quanlynguoidung/sua-nguoi-dung');
                    // }}
                    to={
                      '/admin/quanlynguoidung/sua-nguoi-dung/' + user.taiKhoan
                    }
                  >
                    <span className='small'>Sửa</span>
                  </NavLink>
                  <button className='btn btn-danger'>
                    <span
                      className='small'
                      onClick={() => {
                        console.log(user.taiKhoan);
                        const action = deleteNguoiDung(user.taiKhoan);
                        dispatch(action);
                      }}
                    >
                      Xoá
                    </span>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ float: 'right' }}>
        <button
          className='btn btn-outline-primary '
          onClick={handlPrevPagination}
          disabled={currentPage === pages[0] ? true : false}
        >
          Prev
        </button>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <button
          className='btn btn-outline-primary ml-2'
          onClick={handleNextPagination}
          disabled={currentPage === pages[pages.length - 1] ? true : false}
        >
          Next
        </button>
      </div>
      <GhiDanhNguoiDung />
    </div>
  );
}
