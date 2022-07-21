import SmoothScrollbar from "smooth-scrollbar";
import { useEffect } from "react";

var options = {
  damping: 0.1,
};

const SmoothScroll = () => {
  useEffect(() => {
    //Fixed header
    let header = document.querySelector(".header");
    //Parallax background
    let bg = document.querySelector(".about__bg");

    let scrollbar = SmoothScrollbar.init(document.body, options);

    scrollbar.scrollTop = 0;
    scrollbar.addListener(function (status) {
      let offset = status.offset;
      header.style.top = offset.y + "px";
      header.style.left = offset.x + "px";

      if (window.location.href.split("/")[3] === "") {
        bg.style.top = offset.y + "px";
        bg.style.left = offset.x + "px";
      }
    });
  }, []);

  return null;
};

export default SmoothScroll;
