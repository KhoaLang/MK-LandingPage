import React, { useEffect, useState } from "react";
import { CloseOutlined, PlayCircleFilled } from "@ant-design/icons";
import "./banner.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { getAllBannerAction } from "../../stores/actions/bannerAction";
import { URL_IMAGE } from "../../utils/constants";
export const Banner = (props) => {
  const [play, setPlay] = useState(false);
  const { banner } = props;
  const { listBanner } = useSelector((state) => state.bannerReducer);
  const dispatch = useDispatch();
  // console.log(listBanner);
  useEffect(() => {
    dispatch(getAllBannerAction());
  }, []);

  return (
    <>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={true}
        loop={true}
        modules={[Navigation, Pagination,Autoplay]}
        className="bannerSwiper"
      >
        {listBanner?.map((banner, idx) => {
          return (
            <SwiperSlide key={banner.id}>
              <div className="banner">
                <img
                  src={`${URL_IMAGE}${banner.image}`}
                  alt={banner.id}
                  className="bg"
                />
                <div className="contentBanner">
                  <h1>{banner.name}</h1>
                  <p>{banner.description}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
