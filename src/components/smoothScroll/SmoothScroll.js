import SmoothScrollbar from "smooth-scrollbar";
import { useEffect, useState } from "react";

var options = {
  damping: 0.07,
};

const SmoothScroll = (props) => {
  const [urlEndpoint, setUrlEndpoint] = useState(
    window.location.href.split("/")[3]
  );
  const scrollbar = SmoothScrollbar.init(document.body, options);
  useEffect(() => {
    setUrlEndpoint(window.location.href.split("/")[3]);
    let header = document.querySelector(".header");
    scrollbar.scrollTop = 0;
    scrollbar.addListener((status) => {
      let offset = status.offset;
      header.style.top = offset.y + "px";
      header.style.left = offset.x + "px";
      if (urlEndpoint.length === 0) {
        props.setBgOffset(offset);
      }
    });
  }, [urlEndpoint]);

  return null;
};

export default SmoothScroll;
