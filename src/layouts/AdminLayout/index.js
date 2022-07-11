import classNames from "classnames/bind";
import styles from "./AdminLayout.module.scss";

const cx = classNames.bind(styles);

export const AdminLayout = () => {
  return (
    <div className={cx("AdminLayout")}>
      <h3>header</h3>
      <div className="">
        <div>sidebar</div>
        <div>content</div>
      </div>
    </div>
  );
};
