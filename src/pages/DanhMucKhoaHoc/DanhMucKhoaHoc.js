import React from "react";

export default function DanhMucKhoaHoc() {
  return (
    <>
      <div className="topic__title-container align-middle">
        <div className="container">
          <h1 className="topic__title text-uppercase">Lập trình FrontEnd</h1>
        </div>
      </div>
      <div className="container">
        <h4>Các khóa học phổ biến</h4>
        <div className="row my-5">
          <div className="col-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://picsum.photos/200/100"
                alt
              />
              <div className="card-body">
                <h5 className="text-uppercase">Title</h5>
                <p>
                  {" "}
                  <span className="text-warning">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <span>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <span className="ml-2 text-dark">5</span>
                    </span>
                  </span>
                  <span className="ml-1">(0)</span>
                </p>
                <div className="text-right ">
                  <button className="btn default-button font-weight-bold">
                    Đăng ký
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
