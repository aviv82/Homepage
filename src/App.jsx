import React from "react";
import { NavBar, Intro, Hero, Contact, Footer } from "./components/index";

const App = () => (
  <div className="wrapper">
    <div className="gaunt">brother</div>
    <div className="font">based</div>
    <Intro />
    <NavBar />
    <Hero />
    <Contact />
    <Footer />
  </div>
);

export default App;
