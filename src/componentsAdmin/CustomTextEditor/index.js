import "./customEditor.scss";

import { ReactComponent as Bold } from "../../assets/text-editor/b.svg";
import { ReactComponent as Italic } from "../../assets/text-editor/i.svg";
import { ReactComponent as Underline } from "../../assets/text-editor/u.svg";
import { ReactComponent as Link } from "../../assets/text-editor/linkattach.svg";
import { ReactComponent as Image } from "../../assets/text-editor/image.svg";
import { ReactComponent as Dot } from "../../assets/text-editor/dot.svg";
import { ReactComponent as Number } from "../../assets/text-editor/number.svg";

// const cx = classNames.bind(styles);

const CustomEditor = (props) => {
  const { bold, italic, underline, changeBold, changeItalic, changeUnderline } =
    props;
  return (
    <div className="custom-editor d-flex justify-content-between align-items-center">
      <div className="custom-editor__font d-flex justify-content-between align-items-center">
        <div
          onClick={() => changeBold(!bold)}
          className="custom-editor__font__item d-flex align-items-center"
          style={bold ? { backgroundColor: "#ececec" } : {}}
        >
          <Bold />
        </div>
        <div
          onClick={() => changeItalic(!italic)}
          className="custom-editor__font__item d-flex align-items-center"
          style={italic ? { backgroundColor: "#ececec" } : {}}
        >
          <Italic />
        </div>
        <div
          onClick={() => changeUnderline(!underline)}
          className="custom-editor__font__item d-flex align-items-center"
          style={underline ? { backgroundColor: "#ececec" } : {}}
        >
          <Underline />
        </div>
      </div>
      <div className="custom-editor__attach d-flex justify-content-between align-items-center">
        <div className="custom-editor__attach__item d-flex align-items-center">
          <Link />
        </div>
        <div className="custom-editor__attach__item d-flex align-items-center">
          <Image />
        </div>
      </div>
      <div className="custom-editor__list d-flex justify-content-between align-items-center">
        <div className="custom-editor__list__item d-flex align-items-center">
          <Dot />
        </div>
        <div className="custom-editor__list__item d-flex align-items-center">
          <Number />
        </div>
      </div>
    </div>
  );
};

export default CustomEditor;
