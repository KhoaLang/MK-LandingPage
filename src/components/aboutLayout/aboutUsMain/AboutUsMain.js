import "./aboutUsMain.scss";
// import image from "../../../assets/aboutus.jpg";
import image from "../../../assets/about/Rectangle.png";
import { useTranslation } from "react-i18next";

const AboutUsMain = () => {
  const { t } = useTranslation();
  return (
    <section className="about-us-main">
      {/* <h2>{t("About")}</h2> */}
      <h2>Về Mark Solution</h2>
      <h2>Chuyên thiết kế bộ nhận diện thương hiệu</h2>
      <div className="about-us-main__content">
        <p className="about-us-main__content__main__first-paragraph">
          Chúng tôi thiết kế bộ nhận diện cho lĩnh vực Du Lịch - Nhà Hàng -
          Khách Sạn. Chúng tôi lắng nghe những câu chuyện của thương hiệu bằng
          trái tim và trực giác; sau đó kể lại chúng bằng phương tiện chữ, hình
          ảnh và màu sắc.
        </p>
        <img src={image} alt="nothing to see" />
        <p className="about-us-main__content__main__second-paragraph">
          Logo của chúng tôi được tạo nên trước sự rung cảm với các hình tượng
          nguyên sơ của sự sống; bao gồm thời gian và không gian như ngày và
          đêm, đất và nước. Logo được thể hiện bằng hai gam màu đơn sắc trắng -
          đen nhằm nói lên sự tồn tại song song hai mặt tính chất của một vấn
          đề. Thông qua đó, Mark Solutions muốn truyền tải thông điệp về sự tôn
          trọng bản sắc riêng biệt của từng thương hiệu từ những gì chân thật,
          sơ khởi, tự nhiên nhất.
        </p>
      </div>
    </section>
  );
};

export default AboutUsMain;
