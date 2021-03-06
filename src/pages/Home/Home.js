import React, { useEffect } from "react";
import { history } from "../../utils/setting";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachKhoaHocAction } from "../../redux/actions/quanLyKhoaHocAction";

export default function Home(props) {
  const { arrKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.quanLyKhoaHocReducer
  );

  // const firstEight = [];
  // arrKhoaHoc.find(
  //   (item) => (
  //     item.TenKhoaHoc !== "" && item.HinhAnh !== null && firstEight.push(item),
  //     firstEight.length > 8
  //   )
  // );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachKhoaHocAction("GP01"));
  }, []);

  const renderKhoaHoc = () => {
    return arrKhoaHoc.slice(0, 8).map((khoa, idx) => {
      let ctdir = "/chiTietKhoaHoc?MaKhoaHoc=" + `${khoa.maKhoaHoc}`;
      return (
        <div className="col-3 my-3" key={idx}>
          <div
            className="card"
            onClick={() => {
              window.scrollTo(0, 0);
              history.push(ctdir);
            }}
          >
            <img
              src={
                khoa.hinhAnh ? khoa.hinhAnh : "https://picsum.photos/200/100"
              }
              alt="Not found"
              height={150}
              style={{ objectFit: "cover" }}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://picsum.photos/200/100";
              }}
            />
            <div className="card-body">
              <h5 className="text-uppercase">
                {khoa.tenKhoaHoc !== "" ? khoa.tenKhoaHoc : "Default Name"}
              </h5>
              <p>
                <span className="text-warning">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  {idx % 3 === 0 ? (
                    <span>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <span className="ml-2 text-dark">5</span>
                    </span>
                  ) : (
                    <span>
                      <i className="fa fa-star-half" aria-hidden="true"></i>
                      <span className="ml-2 text-dark">4,5</span>
                    </span>
                  )}
                </span>
                <span className="ml-1">
                  ({khoa.luotXem ? khoa.luotXem : 0})
                </span>
              </p>
              <div className="text-right ">
                <button className="btn default-button font-weight-bold">
                  ????ng k??
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: "100vh" }}>
            <video width="100%" autoPlay muted loop>
              <source src="./images/CyberSoft.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-caption">
              <div>
                <h1 className="carousel-h1">
                  KH???I ?????U <br /> S??? NGHI???P C???A B???N
                </h1>
                <div className="carousel-h3">
                  <h3>
                    H???c th???t, d??? ??n th???t, vi???c l??m th???t. H???c m???i l??c, m???i n??i
                  </h3>
                  <h3>Tr??? th??nh l???p tr??nh vi??n chuy??n nghi???p</h3>
                </div>
                <div className="carousel-button mt-4">
                  <button className="btn btn-xemKhoaHoc mr-3 p-2 font-weight-bold">
                    Xem kh??a h???c
                  </button>
                  <button className="btn btn-dangKy font-weight-bold">
                    T?? v???n v?? ????ng k??
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
            <p>Trung t??m</p>
          </div>
          <div className="data__item">
            <p className="data__number counter">5170</p>
            <p>H???c vi??n</p>
          </div>
          <div className="data__item">
            <p className="data__number counter">15</p>
            <p>N??m kinh nghi???m</p>
          </div>
          <div className="data__item">
            <p className="data__number counter">65</p>
            <p>?????i t??c</p>
          </div>
        </div>
      </div>
      <div className="container-fluid courses mt-5">
        <h2 style={{ fontSize: "2rem" }} className="text-center">
          C??C KH??A H???C M???I NH???T
        </h2>
        <div className="row mt-3">{renderKhoaHoc()}</div>
      </div>
    </div>
  );
}
