import React from "react";

export const Intro = ({ poem }) => {
  return (
    <div className="poem">
      {poem.attributes.line.map((line, i) => (
        <p dangerouslySetInnerHTML={{ __html: line.text }} key={i}></p>
      ))}
      <p key={poem.attributes.line.length + 2}>
        <br></br>-
        <i>
          {" "}
          <b>{poem.attributes.author},</b> {poem.attributes.title}
        </i>
      </p>
    </div>
  );
};
