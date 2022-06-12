import { history } from '../../utils/setting';
import GhiDanhKhoaHoc from './GhiDanhKhoaHoc';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  getAllKhoaHoc,
  deleteKhoaHoc,
} from '../../redux/actions/quanLyKhoaHocAction';
export default function QuanLyKhoaHoc() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const { arrKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.quanLyKhoaHocReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let action = getAllKhoaHoc();
    dispatch(action);
  }, []);
  /*-----------------------HANDLE PAGINATION------------------------------------------------ */

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = arrKhoaHoc.slice(indexOfFirstItem, indexOfLastItem);

  const pages = [];
  for (let i = 1; i <= Math.ceil(arrKhoaHoc.length / itemsPerPage); i++) {
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
  console.log(arrKhoaHoc);
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
          {currentItems.map((course, index) => {
            return (
              <tr key={index}>
                <td scope='row'>{index + 1}</td>
                <td>{course.maKhoaHoc}</td>
                <td>{course.tenKhoaHoc}</td>
                <td>
                  <img
                    src={course.hinhAnh}
                    style={{ heght: '50px', width: '50px' }}
                  />
                </td>
                <td>{course.luotXem}</td>
                <td>{course.nguoiTao.hoTen}</td>
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
                    //   history.push('/admin/quanlykhoahoc/sua-khoa-hoc');
                    // }}
                    to={
                      '/admin/quanlykhoahoc/sua-khoa-hoc/' + course.tenKhoaHoc
                    }
                  >
                    <span className='small'>Sửa</span>
                  </NavLink>
                  <button className='btn btn-danger'>
                    <span
                      className='small'
                      onClick={() => {
                        console.log(course.maKhoaHoc);
                        const action = deleteKhoaHoc(course.maKhoaHoc);
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
      <GhiDanhKhoaHoc />
    </div>
  );
}
