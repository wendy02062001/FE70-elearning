import React from 'react';

export default function GhiDanhKhoaHoc() {
  return (
    <div
      className='modal fade'
      id='exampleModal'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div
        className='modal-dialog modal-dialog-centered modal-dialog modal-lg'
        role='document'
      >
        <div className='modal-content'>
          <div className='modal-body'>
            <div className=' py-4' style={{ boxShadow: '0 8px 6px -6px gray' }}>
              <p>Chọn tên người dùng</p>
              <div className='d-flex'>
                <select className='form-control form-input mr-2' type='text'>
                  <option value='BE'>Lập trình backend</option>
                  <option value='FE'>Lập trình frontend</option>
                </select>
                <button className='btn default-button'>Ghi danh</button>
              </div>
            </div>
            <div className=' py-4' style={{ boxShadow: '0 8px 6px -6px gray' }}>
              <div className='d-flex justify-content-between'>
                <p>Học viên chờ xác thực</p>
                <input
                  className='form-control w-25 px-4'
                  placeholder='Nhập tên HV-SĐT'
                />
              </div>
              <table className='text-center table table-striped mt-3'>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tài khoản</th>
                    <th>Họ tên</th>
                    <th>Chờ xác nhận</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope='row'>1</td>
                    <td>khaicybersoft</td>
                    <td>***********</td>
                    <td>
                      <button className='btn btn-primary mr-2'>Xác thực</button>
                      <button className='btn btn-danger'>Hủy</button>
                    </td>
                  </tr>

                  <tr>
                    <td scope='row'>2</td>
                    <td>khaicybersoft</td>
                    <td>***********</td>
                    <td>
                      <button className='btn btn-primary mr-2'>Xác thực</button>
                      <button className='btn btn-danger'>Hủy</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className=' py-4'>
              <div className='d-flex justify-content-between'>
                <p>Học viên đã tham gia khoá học</p>
                <input
                  className='form-control w-25 px-4'
                  placeholder='Nhập tên HV-SĐT'
                />
              </div>
              <table className='text-center table table-striped mt-3'>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tài khoản</th>
                    <th>Họ tên</th>
                    <th>Chờ xác nhận</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope='row'>1</td>
                    <td>khaicybersoft</td>
                    <td>***********</td>
                    <td>
                      <button className='btn btn-danger'>Hủy</button>
                    </td>
                  </tr>

                  <tr>
                    <td scope='row'>2</td>
                    <td>khaicybersoft</td>
                    <td>***********</td>
                    <td>
                      <button className='btn btn-danger'>Hủy</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
