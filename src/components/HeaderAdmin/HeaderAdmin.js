import React from 'react';
import '../../style/headerAdmin.css';

export default function HeaderAdmin() {
  return (
    <div className='row m-0 py-3' style={{ boxShadow: '0 8px 6px -6px gray' }}>
      <div className='col-3'>
        <img
          src='../../images/mainbg.png'
          alt='Logo'
          style={{ maxHeight: '80px' }}
        />
      </div>
      <div className='col-9 '>
        <div className='d-flex justify-content-end '>
          <p className='mt-2'>Chào Khải ! &nbsp;</p>
          <div className='dropdown'>
            <button
              className='btn btn-default'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
              id='btn-dropdown'
            >
              <i className='fas fa-angle-up'></i>
            </button>
            <div className='dropdown-menu dropdown-menu-right'>
              <button className='dropdown-item' type='button'>
                <i className='fas fa-angle-right'></i> Cập nhật thông tin
              </button>
              <button className='dropdown-item' type='button'>
                <i className='fas fa-angle-right'></i> Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
