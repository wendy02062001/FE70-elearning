import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { layThongTinKhoaHocAction } from "../../redux/actions/KhoaHoc/QuanLyKhoaHocAction";

export default function ChiTietKhoaHoc(props) {
  const search = useLocation().search;
  const code = new URLSearchParams(search).get("MaKhoaHoc");

  const { detailKH } = useSelector(
    (rootReducer) => rootReducer.quanLyKhoaHocReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layThongTinKhoaHocAction(code));
  }, [code]);

  console.log(detailKH);
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
              src={
                detailKH.hinhAnh
                  ? detailKH.hinhAnh
                  : "https://picsum.photos/seed/picsum/200/300"
              }
            />
            <div className="carousel-caption chitiet-caption">
              <h1 className="chitiet-h1">{detailKH.tenKhoaHoc}</h1>
              <h5 className="chitiet-h5">
                Đánh giá khóa học:{" "}
                <span className="text-warning">
                  {" "}
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </span>
              </h5>
              <button className="btn mt-3 px-4 btn-dangkychitiet">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3 course__mota">
        <h3>Giới thiệu khóa học</h3>
        <p>{detailKH.moTa}</p>
      </div>
    </div>
  );
}
