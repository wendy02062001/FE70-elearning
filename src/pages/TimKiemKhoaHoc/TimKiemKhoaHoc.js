import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
const columns = [
  {
    key: "khoaHoc",
    render: (record) => (
      <div class="card">
        <div class="d-flex">
          <img src={record.hinhAnh} alt="..." className="h-full" />
          <div className="p-4">
            <h2 class="card-title">{record.tenKhoaHoc}</h2>
            <p class="card-text">{record.mieuTa}</p>
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
  },
  {
    key: "2",
    tenKhoaHoc: "Lập trình FrontEnd với ReactJS",
    hinhAnh: "https://i.pravatar.cc/200?img=53",
    mieuTa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    key: "3",
    tenKhoaHoc: "Lập trình FrontEnd với Angular",
    hinhAnh: "https://i.pravatar.cc/200?img=12",
    mieuTa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },

  {
    key: "4",
    tenKhoaHoc: "Lập trình FrontEnd với Angular",
    hinhAnh: "https://i.pravatar.cc/200?img=17",
    mieuTa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },

  {
    key: "5",
    tenKhoaHoc: "Lập trình FrontEnd với Angular",
    hinhAnh: "https://i.pravatar.cc/200?img=22",
    mieuTa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },

  {
    key: "6",
    tenKhoaHoc: "Lập trình FrontEnd với Angular",
    hinhAnh: "https://i.pravatar.cc/200?img=32",
    mieuTa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },

  {
    key: "7",
    tenKhoaHoc: "Lập trình FrontEnd với Angular",
    hinhAnh: "https://i.pravatar.cc/200?img=10",
    mieuTa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },

  {
    key: "8",
    tenKhoaHoc: "Lập trình FrontEnd với Angular",
    hinhAnh: "https://i.pravatar.cc/200?img=9",
    mieuTa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },

  {
    key: "9",
    tenKhoaHoc: "Lập trình FrontEnd với Angular",
    hinhAnh: "https://i.pravatar.cc/200?img=25",
    mieuTa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },

  {
    key: "10",
    tenKhoaHoc: "Lập trình FrontEnd với Angular",
    hinhAnh: "https://i.pravatar.cc/200?img=27",
    mieuTa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
];
export default function TimKiemKhoaHoc() {
  return (
    <div className="container">
      <h3>Tìm thấy 619 khóa học FrontEnd</h3>
      <hr style={{ border: "solid #33272a 1px" }} />
      <Table
        columns={columns}
        pagination={{ pageSize: 4, position: ["bottomCenter"] }}
        dataSource={data}
      />
      ;
    </div>
  );
}
