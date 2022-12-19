import "./hero.css";

import React, { useEffect, useState } from "react";
import { useRef } from "react";

import { Beautiful } from "./beautiful/Beautiful";
import { Ampersand } from "./ampersand/Ampersand";

export const Hero = () => {
  const [isScroll, setIsScroll] = useState(0);

  const handlePoemScroll = () => {
    setIsScroll(window.scrollY);
  };

  window.addEventListener("scroll", handlePoemScroll);

  return (
    <div className="hero">
      <p
        className={
          isScroll <= 800 || isScroll >= 1300
            ? `greet dear hide`
            : `greet dear show`
        }
      >
        Dear Traveler,
      </p>
      <p
        className={
          isScroll <= 900 || isScroll >= 1400 ? `greet hide` : `greet show`
        }
      >
        Welcome to my
      </p>
      <p
        className={
          isScroll <= 1000 || isScroll >= 1500
            ? `greet home hide`
            : `greet home show`
        }
      >
        Home.
      </p>
      <p
        className={
          isScroll <= 1100 || isScroll >= 1600 ? `greet hide` : `greet show`
        }
      >
        I'm Aviv.
      </p>

      <Ampersand />

      <p
        className={
          isScroll <= 1400 || isScroll >= 1800 ? `greet hide` : `greet show`
        }
      >
        I'd like to make
      </p>
      <p
        className={
          isScroll <= 1500 || isScroll >= 1900
            ? `greet someplace hide`
            : `greet someplace show`
        }
      >
        Someplace
      </p>

      <Beautiful />

      <p
        className={
          isScroll <= 1600 || isScroll >= 2100 ? `greet hide` : `greet show`
        }
      >
        For
      </p>

      <p className="red">grown</p>

      <p className="blah">grown</p>

      <p className="meh">grown</p>

      <p>grown</p>

      <p>grown</p>
    </div>
  );
};

/*
  const positionCalculator = () => {
    const reveals = document.querySelectorAll(".draw");

    // console.log("reveals", reveals);

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      // const revealPoint = 200;
      if (revealTop < windowHeight - 400) {
        // setIsViewable(true);
        // console.log("draw");
        // reveals[i].classList.add("draw");
      } else {
        // setIsViewable(false);
        // console.log("blank");
        // reveals[i].classList.remove("draw");
      }
    }
  };

  window.addEventListener("scroll", positionCalculator);
*/
