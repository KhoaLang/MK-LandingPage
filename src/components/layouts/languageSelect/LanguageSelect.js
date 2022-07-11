import "./languageSelect.scss";

const LanguageSelect = (props) => {
  const { icon, name } = props;
  return (
    <div className="language-select d-flex justify-content-evenly align-items-center">
      <img src={icon} alt="nothing to see" />
      <p>{name}</p>
    </div>
  );
};

export default LanguageSelect;
