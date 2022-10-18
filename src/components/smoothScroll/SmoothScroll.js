// import SmoothScrollbar from "smooth-scrollbar";
import { useEffect } from "react";

const SmoothScroll = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

export default SmoothScroll;
