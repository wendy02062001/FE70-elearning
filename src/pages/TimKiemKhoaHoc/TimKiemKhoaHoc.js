import React, { useEffect } from "react";
import { history } from "../../utils/setting";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { layKhoaHocTimKiemAction } from "../../redux/actions/quanLyKhoaHocAction";

const columns = [
  {
    key: "khoaHoc",
    render: (record) => (
      <div className="card">
        <div className="d-flex w-full">
          <img
            src={
              record.hinhAnh ? record.hinhAnh : "./images/coursedefault.webp"
            }
            alt="Not found"
            width={250}
            height={200}
            style={{ objectFit: "cover" }}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "./images/coursedefault.webp";
            }}
          />
          <div className="p-4 w-75">
            <h2 className="card-title">{record.tenKhoaHoc}</h2>
            <p className="card-text khoaHoc__mota">{record.moTa}</p>
            <div className="text-right w-full">
              <button
                onClick={() => {
                  history.push("/chiTietKhoaHoc");
                }}
                className="btn default-button"
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function TimKiemKhoaHoc(props) {
  const search = useLocation().search;
  const kw = new URLSearchParams(search).get("kwKhoaHoc");

  const { arrKHTimKiem } = useSelector(
    (rootReducer) => rootReducer.quanLyKhoaHocReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layKhoaHocTimKiemAction(kw));
  }, []);

  const numbKH = arrKHTimKiem.length;

  return (
    <div className="container">
      <h3>
        Tìm thấy {numbKH} khóa học {kw}
      </h3>
      <hr style={{ border: "solid #33272a 1px" }} />
      {numbKH > 0 ? (
        <Table
          columns={columns}
          pagination={{ pageSize: 4, position: ["bottomCenter"] }}
          dataSource={arrKHTimKiem}
        />
      ) : (
        <div className="text-center">
          <img height={350} src="./images/notfound.webp" />
          <h5 className="text-danger mt-2">
            Rất tiếc, chúng tôi không tìm thấy khóa học bạn cần!
          </h5>
        </div>
      )}
    </div>
  );
}
