import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Lazy, Navigation, Pagination, Parallax } from "swiper";
import { DownOutlined } from "@ant-design/icons";
import { getAllBannerAction } from "../../../stores/actions/bannerAction";
import "./banner.scss";
export const Banner = (props) => {
  const [play, setPlay] = useState(false);
  const { listBanner } = useSelector((state) => state.bannerReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBannerAction());
  }, []);

  return (
    <section className="banner">
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
                    src={`${process.env.REACT_APP_BACKEND_BASE_URL}${banner.image}`}
                    alt={banner.id}
                    className="bg swiper-lazy"
                  />
                  <div className="outer-layout"></div>

                  <div className="contentBanner" data-swiper-parallax="-200">
                    <h1 className="" data-swiper-parallax="-200">
                      {banner.description.split("###")[0]}
                    </h1>
                    {banner.isVisibleDescription && (
                      <p data-swiper-parallax="-100">
                        {banner.description.split("###")[1]}
                      </p>
                    )}
                  </div>
                </div>
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </SwiperSlide>
            )
          );
        })}
      </Swiper>
      <DownOutlined className="down-arrow" />
    </section>
  );
};
