import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
const columns = [
  {
    key: "khoaHoc",
    render: (record) => (
      <div className="card">
        <div className="d-flex">
          <img src={record.hinhAnh} alt="..." />
          <div className="p-4">
            <h4 className="card-title">{record.tenKhoaHoc}</h4>
            <div className="d-flex justify-content-between">
              <p className="card-text infoCourse-text w-75">{record.mieuTa}</p>
              <div>
                <span className="text-warning">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-half" aria-hidden="true"></i>
                </span>
                <span>4.4</span>
                <p className="text-right">({record.soHocVien} học viên)</p>
              </div>
            </div>
            <div className="text-right">
              <button className="btn default-button">Hủy</button>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const data = [
  {
    key: "1",
    tenKhoaHoc: "Lập trình FrontEnd",
    hinhAnh: "https://i.pravatar.cc/200?img=26",
    mieuTa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    soHocVien: 50,
  },
  {
    key: "2",
    tenKhoaHoc: "Lập trình FrontEnd với ReactJS",
    hinhAnh: "https://i.pravatar.cc/200?img=53",
    mieuTa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    soHocVien: 100,
  },
  {
    key: "3",
    tenKhoaHoc: "Lập trình FrontEnd với Angular",
    hinhAnh: "https://i.pravatar.cc/200?img=12",
    mieuTa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    soHocVien: 78,
  },

  {
    key: "4",
    tenKhoaHoc: "Lập trình FrontEnd với Angular",
    hinhAnh: "https://i.pravatar.cc/200?img=17",
    mieuTa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    soHocVien: 91,
  },

  {
    key: "5",
    tenKhoaHoc: "Lập trình FrontEnd với Angular",
    hinhAnh: "https://i.pravatar.cc/200?img=22",
    mieuTa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    soHocVien: 77,
  },
];

export default function ThongTinCaNhan() {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ width: "100%", objectFit: "cover", height: "350px" }}
              src="https://picsum.photos/seed/picsum/200/400"
            />
            <div className="carousel-caption chitiet-caption"></div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <ul
          className="nav nav-pills mb-3 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="pills-info-tab"
              data-toggle="pill"
              href="#pills-info"
              role="tab"
              aria-controls="pills-info"
              aria-selected="true"
            >
              Thông tin cá nhân
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-course-tab"
              data-toggle="pill"
              href="#pills-course"
              role="tab"
              aria-controls="pills-course"
              aria-selected="false"
            >
              Khóa học của tôi
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-info"
            role="tabpanel"
            aria-labelledby="pills-info-tab"
          >
            <div className="row">
              <div className="col-6 mx-auto">
                <p className="text-center">
                  Email:<span className="pl-3">nguyenvana@gmail.com</span>
                </p>
              </div>
              <div className="col-6 mx-auto">
                <p className="text-center">
                  Tài khoản:<span className="pl-3">nguyenvana</span>
                </p>
              </div>

              <div className="col-6 mx-auto">
                <p className="text-center">
                  Họ tên:<span className="pl-3">Nguyễn Văn A</span>
                </p>
              </div>
              <div className="col-6 mx-auto">
                <p className="text-center">
                  Mật khẩu:<span className="pl-3">nguyenvana123</span>
                </p>
              </div>

              <div className="col-6">
                <p className="text-center">
                  Số điện thoại:<span className="pl-3">0913 112 221</span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-course"
            role="tabpanel"
            aria-labelledby="pills-course-tab"
          >
            <div className="p-3">
              <h3>Các khóa học đã tham gia</h3>
              <hr style={{ border: "solid #33272a 1px" }} />
              <Table
                columns={columns}
                pagination={{ pageSize: 3, position: ["bottomRight"] }}
                dataSource={data}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
