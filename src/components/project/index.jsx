import React from "react";
import classNames from "classnames/bind";
import styles from "./project.module.scss";
import ProjectComponent from "../homeLayout/project";
import SmoothScroll from "../smoothScroll/SmoothScroll";

const cx = classNames.bind(styles);

const Project = () => {
  return (
    <section className={cx("project")}>
      <SmoothScroll />
      <ProjectComponent gridColumns={2} isHomePage={false} />
    </section>
  );
};

export default Project;
