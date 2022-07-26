// import SmoothScrollbar from "smooth-scrollbar";
import { useEffect, useState } from "react";

var options = {
  damping: 0.07,
};

const SmoothScroll = (props) => {
  const [urlEndpoint, setUrlEndpoint] = useState(
    window.location.href.split("/")[3]
  );
  // const scrollbar = SmoothScrollbar.init(document.body, options);
  // useEffect(() => {
  // scrollbar.scrollTop = 0;
  // setUrlEndpoint(window.location.href.split("/")[3]);
  // let header = document.querySelector(".header");
  // scrollbar.addListener((status) => {
  //   let offset = status.offset;
  //   header.style.top = offset.y + "px";
  //   header.style.left = offset.x + "px";
  // });
  // }, [urlEndpoint]);

  return null;
};

export default SmoothScroll;
