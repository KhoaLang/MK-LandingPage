import PrimaryButton from "../../layouts/primaryButton/Button";
import "./about.scss";
const About = () => {
  return (
    <section className="about d-flex justify-content-center align-items-center">
      <div className="about__bg"></div>
      <div className="about__container container d-flex justify-content-center align-items-center flex-column">
        <h1>Về chúng tôi</h1>
        <p style={{ textAlign: "justify" }}>
          Chúng tôi thiết kế bộ nhận diện cho lĩnh vực Du Lịch - Nhà Hàng -
          Khách Sạn. Chúng tôi lắng nghe những câu chuyện của thương hiệu bằng
          trái tim và trực giác; sau đó kể lại chúng bằng phương tiện chữ, hình
          ảnh và màu sắc.
        </p>
        <PrimaryButton
          path="/aboutus"
          grey={true}
          style={{
            border: "none",
            margin: "70px auto",
          }}
        >
          Xem thêm
        </PrimaryButton>
      </div>
    </section>
  );
};

export default About;
