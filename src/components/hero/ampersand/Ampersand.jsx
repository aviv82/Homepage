import "./ampersand.css";

import { useEffect, useRef, useState } from "react";

import { AmpersandSVG } from "../../../../public/assets/svgs/AmpersandSVG";

export const Ampersand = () => {
  const scrollRef = useRef();
  const [isViewable, setIsViewable] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (values) => {
        if (values[0].isIntersecting) {
          setIsViewable(true);
          // console.log("is it visible?", values[0].isIntersecting, isViewable);
        } else {
          setIsViewable(false);
          // console.log("is it visible?", values[0].isIntersecting, isViewable);
        }
      },
      {
        //             up  right down
        rootMargin: "-100px 0px -400px",
        // threshold: 1,
      }
    );
    observer.observe(scrollRef.current);
  }, []);

  return (
    <div ref={scrollRef}>
      <AmpersandSVG face={isViewable == false ? "blank" : "drawn"} />
    </div>
  );
};
