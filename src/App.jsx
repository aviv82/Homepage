import React, { useState, useEffect } from "react";
import { get } from "./api/get";
import { NavBar, Intro, Hero, Contact, Footer } from "./components/index";

const App = () => {
  const [works, setWorks] = useState([]);
  const [poems, setPoems] = useState([]);

  const worksInit = async () => {
    const workPromise = await get("/api/works?populate=media");
    setWorks(workPromise);
  };

  const poemsInit = async () => {
    const workPromise = await get("/api/poems");
    setPoems(workPromise);
  };

  useEffect(() => {
    worksInit();
    poemsInit();
  }, []);

  const firstPoem = [];

  if (works.length !== 0) {
    console.log("fetch works", works.data);
    console.log("fetch poems", poems.data[0].attributes.body);
    firstPoem.push(String(poems.data[0].attributes.body));
  }

  return (
    <div className="wrapper">
      <div className="gaunt">brother</div>
      <div className="font">based</div>
      {works.length !== 0 ? <p>{firstPoem}</p> : <></>}
      <p>
        normal <b>bold</b> <strong>strong</strong> <i>italic</i>
        <b>
          <i>bold italic</i>
        </b>
        <em>emphasize</em> <mark>mark</mark> <small>small</small>
        <ins>inserted</ins> <br></br>
        <sub>subscript</sub> <sup>super</sup> <big>big</big>
      </p>
      <Intro />
      <NavBar />
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
