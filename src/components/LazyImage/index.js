import { useEffect, useRef, useState } from "react";
import loading from "../../assets/loading.png";

export const LazyImage = ({ src }) => {
  const rootRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const defaultIntersectionOptions = {
      threshold: 0,
      rootMargin: "0px",
    };

    const checkIntersections = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    if (!isVisible) {
      const newIO = new IntersectionObserver(
        checkIntersections,
        defaultIntersectionOptions
      );
      newIO.observe(rootRef.current);
      return () => newIO.disconnect();
    }
  }, [isVisible]);

  return (
    <img
      src={isVisible ? src : loading}
      ref={rootRef}
      sizes="(min-width: 1240px) 30vw, 90vw"
    />
  );
};
