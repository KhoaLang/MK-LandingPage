import React, { useEffect, useState } from "react";
import { CloseOutlined, PlayCircleFilled } from "@ant-design/icons";
import "./banner.scss";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { getAllBannerAction } from "../../stores/actions/bannerAction";

export const Banner = (props) => {
  const [play, setPlay] = useState(false);
  const { banner } = props;
  const { listBanner } = useSelector((state) => state.bannerReducer);
  const dispatch = useDispatch();
  console.log(listBanner);
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
        modules={[Navigation, Pagination, Autoplay]}
        className="bannerSwiper"
      >
        {listBanner?.map((banner, idx) => {
          return (
            <SwiperSlide key={banner.maBanner}>
              <div className="banner">
                <img src={banner.hinhAnh} alt={banner.hinhAnh} className="bg" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
