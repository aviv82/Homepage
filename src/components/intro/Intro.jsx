import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export const Intro = ({ poem }) => {
  const [isScroll, setIsScroll] = useState(false);

  /*
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
  */

  const handlePoemScroll = () => {
    setIsScroll(window.scrollY);
    // scrollYValue.current = window.scrollY;
    // console.log("scroll:", isScroll);
  };

  window.addEventListener("scroll", handlePoemScroll);

  return (
    <div className="poem">
      {poem.attributes.line.map((line, i) => (
        <p
          className={isScroll >= i * 20 ? "show" : "hide"}
          dangerouslySetInnerHTML={{ __html: line.text }}
          key={i}
        ></p>
      ))}
      <div className="title">
        <p
          className={
            isScroll >= (poem.attributes.line.length + 2) * 20 ? "show" : "hide"
          }
          // ref={locationRef}
          key={poem.attributes.line.length + 2}
        >
          <br></br>-
          <i>
            <b>{poem.attributes.author},</b> {poem.attributes.title}
          </i>
        </p>
      </div>
    </div>
  );
};
