import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Beautiful } from "../../../public/assets/svgs/Beautiful";

export const Hero = () => {
  const locationRef = useRef();
  const [isViewable, setIsViewable] = useState();

  console.log("is it visible?", isViewable);

  useEffect(() => {
    const observer = new IntersectionObserver((values) => {
      const value = values[0];
      setIsViewable(value.isIntersecting);
    });
    observer.observe(locationRef.current);
  }, []);

  return (
    <div ref={locationRef}>
      <Beautiful face={isViewable == false ? "blank" : "draw"} />
    </div>
  );
};
