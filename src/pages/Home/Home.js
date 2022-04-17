import React from "react";
import "../../style/home.css";
export default function Home() {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: "100vh" }}>
            <video width="100%" autoPlay muted loop>
              <source src="./img/CyberSoft.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-caption">
              <div>
                <h1 className="carousel-h1">
                  KHỞI ĐẦU <br /> SỰ NGHIỆP CỦA BẠN
                </h1>
                <div className="carousel-h3">
                  <h3>
                    Học thật, dự án thật, việc làm thật. Học mọi lúc, mọi nơi
                  </h3>
                  <h3>Trở thành lập trình viên chuyên nghiệp</h3>
                </div>
                <div className="carousel-button mt-4">
                  <button className="btn btn-xemKhoaHoc mr-3 font-weight-bold">
                    Xem khóa học
                  </button>
                  <button className="btn btn-dangKy font-weight-bold">
                    Tư vấn và Đăng ký
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="data" className="p-4 text-center">
        <div className="data__content d-flex justify-content-between w-75 m-auto">
          <div className="data__item">
            <p className="data__number counter">7</p>
            <p>Trung tâm</p>
          </div>
          <div className="data__item">
            <p className="data__number counter">5170</p>
            <p>Học viên</p>
          </div>
          <div className="data__item">
            <p className="data__number counter">15</p>
            <p>Năm kinh nghiệm</p>
          </div>
          <div className="data__item">
            <p className="data__number counter">65</p>
            <p>Đối tác</p>
          </div>
        </div>
      </div>
      <div className="container-fluid courses mt-5">
        <h2 style={{ fontSize: "2rem" }} className="text-center">
          CÁC KHÓA HỌC MỚI NHẤT
        </h2>
        <div className="row mt-3">
          <div className="col-3">
            <div className="card">
              <img src="https://picsum.photos/200/100" />
              <div className="card-body">
                <h5>LẬP TRÌNH FRONTEND VỚI HTML CSS JAVASCRIPT</h5>
                <p>
                  <span className="text-warning">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half" aria-hidden="true"></i>
                  </span>

                  <span>
                    4,5 <span>(1,593)</span>
                  </span>
                </p>
                <div className="text-right ">
                  <button className="btn font-weight-bold">Đăng ký</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img src="https://picsum.photos/200/100" />
              <div className="card-body">
                <h5>LẬP TRÌNH FRONTEND VỚI HTML CSS JAVASCRIPT</h5>
                <p>
                  <span className="text-warning">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half" aria-hidden="true"></i>
                  </span>

                  <span>
                    4,5 <span>(1,593)</span>
                  </span>
                </p>
                <div className="text-right ">
                  <button className="btn font-weight-bold">Đăng ký</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img src="https://picsum.photos/200/100" />
              <div className="card-body">
                <h5>LẬP TRÌNH FRONTEND VỚI HTML CSS JAVASCRIPT</h5>
                <p>
                  <span className="text-warning">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half" aria-hidden="true"></i>
                  </span>

                  <span>
                    4,5 <span>(1,593)</span>
                  </span>
                </p>
                <div className="text-right ">
                  <button className="btn font-weight-bold">Đăng ký</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img src="https://picsum.photos/200/100" />
              <div className="card-body">
                <h5>LẬP TRÌNH FRONTEND VỚI HTML CSS JAVASCRIPT</h5>
                <p>
                  <span className="text-warning">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half" aria-hidden="true"></i>
                  </span>

                  <span>
                    4,5 <span>(1,593)</span>
                  </span>
                </p>
                <div className="text-right ">
                  <button className="btn font-weight-bold">Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
