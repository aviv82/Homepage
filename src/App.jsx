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
    const workPromise = await get("/api/poems?populate=line");
    setPoems(workPromise);
  };

  useEffect(() => {
    worksInit();
    poemsInit();
  }, []);

  poems.length != 0
    ? console.log("poems", poems.data[0].attributes.title)
    : null;

  return (
    <div className="wrapper">
      {poems.length !== 0 ? <Intro poem={poems.data[0]} /> : <></>}
      <NavBar />
      <Hero />
      <Contact />
      <Footer />
      <div className="font">based</div>
      <div className="gaunt">brother</div>
    </div>
  );
};

export default App;

/*
      <div className="text-test">
        <p>
          normal <b>bold</b> <strong>strong</strong> <i>italic</i>
          <b>
            <i>bold italic</i>
          </b>
          <em>emphasize</em> <mark>mark</mark> <small>small</small>
          <ins>inserted</ins> <br></br>
          <sub>subscript</sub> <sup>super</sup> <big>big</big>
        </p>
      </div>
      */

/*
  const firstPoem = [];
  const parser = new DOMParser();
  const parsedPoem = [];
  const valueArray = [];

  if (works.length !== 0) {
    console.log("fetch works", works.data);
    console.log("fetch poems", poems.data[0].attributes.body);
    firstPoem.push(
      parser.parseFromString(poems.data[0].attributes.body, "text/html")
    );

    for (let i = 0; i < firstPoem[0].body.childElementCount; i++) {
      console.log("parsed", i, firstPoem[0].body.children[i]);
    }

    /*
    firstPoem[0].body.children.map((line, i) =>
      parsedPoem.push(<p key={i}>{line}</p>)
    );
    
    for (let i = 0; i < firstPoem[0].body.children[0].length; i++) {
      firstPoem.push(<p key={i}>{firstPoem[0].body.children[i]}</p>);
    }
    valueArray.push(firstPoem[0].children[0].children[1]);
    console.log(
      "html array:",
      firstPoem[0].children[0].children[1],
      valueArray[0]
    );
  }
*/
