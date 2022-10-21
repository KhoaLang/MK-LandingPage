import { useNavigate } from "react-router-dom";
import "./button.scss";

const PrimaryButton = (props) => {
  const { children, style, path, grey } = props;
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(path);
  };
  return (
    <button
      className={grey ? "grey-btn" : "primary-button"}
      onClick={handleOnClick}
      style={style}
      type="submit"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
