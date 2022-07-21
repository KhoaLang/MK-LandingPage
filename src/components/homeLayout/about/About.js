import PrimaryButton from "../../layouts/primaryButton/Button";
import "./about.scss";

const About = () => {
  return (
    <section className="about d-flex justify-content-center align-items-center flex-column">
      <div
        className="about__bg"
        // style={bgPosition.length > 0 ? { backgroundPosition: bgPosition } : {}}
      ></div>
      <div className="about__container container d-flex justify-content-center align-items-center flex-column">
        <h1>Về VNPLUS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id non proident, sunt in culpa
          qui officia
        </p>
        <PrimaryButton path="/aboutus" style={{ margin: "70px auto" }}>
          Xem thêm
        </PrimaryButton>
      </div>
    </section>
  );
};

export default About;
