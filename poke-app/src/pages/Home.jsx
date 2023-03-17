import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="px-16">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
};

export default Home;
