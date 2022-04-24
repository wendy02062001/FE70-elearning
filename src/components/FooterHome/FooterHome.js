import React from 'react';

export default function FooterHome() {
  return (
    <div
      className='row px-4 m-0'
      style={{ backgroundColor: '#ffc6c7', paddingTop: '20px' }}
    >
      <div className='col-4'>
        <div className='mb-3'>
          <img src='./images/mainbg.png' style={{ maxWidth: '450px' }} />
          <p className='mt-3'>
            <b style={{ fontSize: '17px' }}>Elearning Academy</b>
            &nbsp; là hệ thống đào tạo lập trình chuyên sâu theo dự án thực tế
          </p>
        </div>
        <div className='mb-3'>
          <b>NHẬN TIN SỰ KIỆN - KHUYẾN MẠI</b>
          <p>
            Elearning sẽ gởi các khoá học trực tuyến & các chương trình
            CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MẠI hấp dẫn
            đến các bạn
          </p>
          <div className='d-flex'>
            <input
              className='form-control w-75 '
              placeholder='your.address@email.com'
            />
            <button className='btn ml-2 default-button'>ĐĂNG KÍ</button>
          </div>
        </div>
        <div className='mb-3'>
          <p>
            <i className='fas fa-map-marker'></i> Cơ sở 1: 376 Võ Văn Tấn - Quận
            3
          </p>
          <p>
            <i className='fas fa-map-marker'></i> Cơ sở 2: 459 Sư Văn Hạnh -
            Quận 10
          </p>
          <p>
            <i className='fas fa-map-marker'></i> Cơ sở 3: 82 Ung Văn Khiêm -
            Bình Thạnh
          </p>
          <p>
            <i className='fas fa-map-marker'></i> Cơ sở 4: Đà Nẵng - Quận Hải
            Châu
          </p>
          <p>
            <i className='fas fa-phone'></i> 096.105.1014 - 0984.07.5835
          </p>
        </div>
      </div>
      <div className='col-4'>
        <b>ĐĂNG KÍ TƯ VẤN</b>
        <form className='my-3'>
          <input
            className='form-control w-100 mb-4'
            placeholder='Họ và tên *'
          />
          <input
            className='form-control w-100 mb-4'
            placeholder='Email liên hệ *'
          />
          <input
            className='form-control w-100 mb-4'
            placeholder='Điện thoại liên hệ *'
          />
          <b>Nhấn vào ô bên dưới</b>
          <div className='py-3'>
            <input type={'checkbox'} />
            <span> I'm not a robot</span>
          </div>
          <button className='btn default-button'>ĐĂNG KÍ TƯ VẤN</button>
        </form>

        <div className='row'>
          <div className='col-6'>
            <p>Lập trình Front End </p>
            <p>Lập trình ReactJS</p>
            <p>Lập trình React Angular</p>
            <p>Lập trình tư duy</p>
            <p>Lập trình Java Web</p>
          </div>
          <div className='col-6'>
            <p>Lập trình Java Spring - Java Boot</p>
            <p>Tôi Đi Code Dạo</p>
            <p>Học SEO Hà Nội ở Vietmoz</p>
            <p>Học lập trình trực tuyến</p>
          </div>
        </div>
        {/* <p>
          Lập trình Front End &nbsp; &nbsp; Lập trình ReactJS &nbsp; &nbsp; Lập
          trình React Angular &nbsp; &nbsp; Lập trình tư duy &nbsp; Lập trình
          Java Web &nbsp; &nbsp; Lập trình Java Spring - Java Boot &nbsp; &nbsp;
          Tôi Đi Code Dạo &nbsp; Học SEO Hà Nội ở Vietmoz &nbsp; &nbsp; Học lập
          trình trực tuyến
        </p> */}
      </div>
      <div className='col-4'>
        <iframe
          data-testid='fb:page Facebook Social Plugin'
          title='fb:page Facebook Social Plugin'
          frameBorder={0}
          // allowTransparency='true'
          // allowFullScreen='true'
          scrolling='no'
          allow='encrypted-media'
          src='https://www.facebook.com/v2.12/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfe2f672fe5890c%26domain%3Dcybersoft.edu.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fcybersoft.edu.vn%252Ff13b588a7e2245%26relation%3Dparent.parent&container_width=0&height=325&hide_cover=false&hide_cta=false&href=https%3A%2F%2Fwww.facebook.com%2Flophocviet%2F&locale=vi_VN&sdk=joey&show_facepile=false&small_header=false&tabs=timeline&width=430'
          style={{
            border: 'none',
            visibility: 'visible',
            width: 430,
            height: 325,
          }}
          className='text-center'
        />
        <p className='pt-3'>
          <div className='row'>
            <div className='col-6'>
              <p>Anh ngữ giao tiếp </p>
              <p>Khởi động Anh ngữ giao tiếp</p>
              <p>Lấy đà Anh ngữ giao tiếp</p>
            </div>
            <div className='col-6'>
              <p>Bật nhảy Anh ngữ giao tiếp</p>
              <p>Bay trên không Anh ngữ giao tiếp</p>
              <p>Tiếp đất</p>
            </div>
          </div>
          {/* Anh ngữ giao tiếp - Khởi động Anh ngữ giao tiếp - Lấy đà Anh ngữ giao tiếp - Bật nhảy Anh ngữ giao tiếp - Bay trên không Anh ngữ giao tiếp - Tiếp đất */}
        </p>
      </div>
    </div>
  );
}
