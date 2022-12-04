import React from "react";
import { useRef } from "react";
import { useState } from "react";

export const Intro = ({ poem }) => {
  const [isScroll, setIsScroll] = useState(false);

  // const scrollYValue = useRef(0);

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
          className={isScroll > i * 20 ? "show" : "hide"}
          dangerouslySetInnerHTML={{ __html: line.text }}
          key={i}
        ></p>
      ))}
      <p key={poem.attributes.line.length + 2}>
        <br></br>-
        <i>
          <b>{poem.attributes.author},</b> {poem.attributes.title}
        </i>
      </p>
    </div>
  );
};
