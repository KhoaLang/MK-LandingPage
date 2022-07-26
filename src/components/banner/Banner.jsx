import React, { useEffect, useState } from "react";
import { CloseOutlined, PlayCircleFilled } from "@ant-design/icons";
import "./banner.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/lazy";
import "swiper/css/bundle";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Lazy, Navigation, Pagination, Parallax } from "swiper";
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
        lazy={true}
        speed={600}
        modules={[Navigation, Pagination, Autoplay, Lazy, Parallax]}
        className="bannerSwiper"
      >
        {listBanner?.map((banner, idx) => {
          return (
            banner.isVisible && (
              <SwiperSlide key={banner.id}>
                <div data-swiper-parallax="-300" className="banner">
                  <img
                    data-swiper-parallax="-300"
                    slot="container-start"
                    src={`${URL_IMAGE}${banner.image}`}
                    alt={banner.id}
                    className="bg swiper-lazy"
                  />

                  <div className="contentBanner" data-swiper-parallax="-200">
                    <h1 className="" data-swiper-parallax="-200">
                      {banner.name}
                    </h1>
                    <p data-swiper-parallax="-100">{banner.description}</p>
                  </div>
                </div>
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </SwiperSlide>
            )
          );
        })}
      </Swiper>
    </>
  );
};
