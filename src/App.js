import "./scss/style.scss";

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Visual from "./pages/Visual";
import Vision from "./pages/Vision";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Life from "./pages/Life";
const App = () => {
  return (
    <div className="wrap">
      <Header />
      <div className="container">
        <Visual />
        <Profile />
        <Skills />
        <Portfolio />
        <Vision />
        <Life />
      </div>
      <Footer />
    </div>
  );
};

export default App;
