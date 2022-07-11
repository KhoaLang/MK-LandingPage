import { useNavigate } from "react-router-dom";
import "./button.scss";

const PrimaryButton = (props) => {
  const { children, style, path } = props;
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(path);
  };
  return (
    <button
      className="primary-button"
      onClick={handleOnClick}
      style={style}
      type="submit"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
