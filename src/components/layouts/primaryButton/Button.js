import { useNavigate } from "react-router-dom";
import "./button.scss";

const PrimaryButton = (props) => {
  const { children, style, path } = props;
  const navigate = useNavigate();
  return (
    <button
      className="primary-button"
      onClick={() => navigate(path)}
      style={style}
      type="submit"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
