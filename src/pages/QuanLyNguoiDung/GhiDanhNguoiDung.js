import React from 'react';

export default function GhiDanhNguoiDung() {
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
              <p>Chọn khóa học</p>
              <div className='d-flex'>
                <select className='form-control form-input mr-2' type='text'>
                  <option value='BE'>Lập trình backend</option>
                  <option value='FE'>Lập trình frontend</option>
                </select>
                <button className='btn default-button'>Ghi danh</button>
              </div>
            </div>
            <div className=' py-4' style={{ boxShadow: '0 8px 6px -6px gray' }}>
              <p>Khóa học chờ xác thực</p>
              <table className='text-center table table-striped mt-3'>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên khóa học</th>
                    <th>Chờ xác nhận</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope='row'>1</td>
                    <td>Tư duy lập trình</td>
                    <td>
                      <button className='btn btn-primary mr-2'>Xác thực</button>
                      <button className='btn btn-danger'>Hủy</button>
                    </td>
                  </tr>

                  <tr>
                    <td scope='row'>2</td>
                    <td>Lập trình frontend</td>
                    <td>
                      <button className='btn btn-primary mr-2'>Xác thực</button>
                      <button className='btn btn-danger'>Hủy</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className=' py-4'>
              <p>Khóa học đã ghi danh</p>
              <table className='text-center table table-striped mt-3'>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên khóa học</th>
                    <th>Chờ xác nhận</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope='row'>1</td>
                    <td>Tư duy lập trình</td>
                    <td>
                      <button className='btn btn-danger'>Hủy</button>
                    </td>
                  </tr>

                  <tr>
                    <td scope='row'>2</td>
                    <td>Lập trình backend</td>
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
