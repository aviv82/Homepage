import "./intro.css";

import React from "react";
import { useState } from "react";

export const Intro = ({ poem }) => {
  const [isScroll, setIsScroll] = useState(0);

  const handlePoemScroll = () => {
    setIsScroll(window.scrollY);
  };

  window.addEventListener("scroll", handlePoemScroll);

  return (
    <div className="poem">
      {poem.attributes.line.map((line, i) =>
        i == 0 ? (
          <p
            key={i}
            className="first"
            dangerouslySetInnerHTML={{ __html: line.text }}
          ></p>
        ) : (
          <p
            className={isScroll > i * 28 ? "show" : "hide"}
            dangerouslySetInnerHTML={{ __html: line.text }}
            key={i}
          ></p>
        )
      )}
      <div className="title">
        <p
          className={
            isScroll >= (poem.attributes.line.length + 2) * 30 ? "show" : "hide"
          }
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
