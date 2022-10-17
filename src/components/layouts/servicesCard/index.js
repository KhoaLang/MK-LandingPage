import PrimaryButton from "../primaryButton/Button";
import "./serviceCard.scss";
const ServicesCard = (props) => {
  const { price, name, img, shortDesc, features } = props; // features là một array chứa danh sách các tính năng
  return (
    <article className="service-card d-flex flex-column align-items-center">
      <img src={img} alt="" />
      <div
        style={{
          margin: "24px 0",
          width: "40px",
          height: "2px",
          backgroundColor: "#000",
        }}
      ></div>
      <p className="name">{name}</p>
      <p className="short-desc">{shortDesc}</p>
      <div
        style={{
          margin: "24px 0",
          width: "40px",
          height: "2px",
          backgroundColor: "#000",
        }}
      ></div>

      <p style={{ fontWeight: "700", fontSize: "20px", lineHeight: "27px" }}>
        Bao gồm
      </p>
      <ul className="features">
        {features.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <div className="footer d-flex flex-column justify-content-center align-items-center">
        <p className="price">{price} VNĐ</p>
        <PrimaryButton>Gửi yêu cầu</PrimaryButton>
      </div>
    </article>
  );
};

export default ServicesCard;
