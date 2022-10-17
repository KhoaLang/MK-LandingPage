import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img from "../../../assets/home/hero_bg.jpg";
import { DownOutlined } from "@ant-design/icons";
import { getAllBannerAction } from "../../../stores/actions/bannerAction";
import "./banner.scss";
export const Banner = (props) => {
  const [play, setPlay] = useState(false);
  const { banner } = props;
  const { listBanner } = useSelector((state) => state.bannerReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBannerAction());
  }, []);

  return (
    <section className="banner">
      {/* <Swiper
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
      </Swiper> */}
      <img className="new-bg" src={img} alt="" />
      <div className="outer-layout"></div>
      <main>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </main>
      <DownOutlined className="down-arrow" />
    </section>
  );
};
