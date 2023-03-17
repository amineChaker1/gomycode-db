import React from "react";
import poke from "../assets/main-poke.png";
const Header = () => {
  return (
    <div className="bg-primary flex justify-evenly items-center py-8 px-10 my-10 rounded-lg">
      <div className="main-poke border-2 border-dark bg-secondary rounded-md">
        <img src={poke} alt="" />
      </div>
      <div className="desc-poke text-center">
        <h1 className="text-4xl font-bold mb-5">
          Welcome To Your Pokemon Shop !
        </h1>
        <p>
          The perfect place to fulfill all your Pokemon needs. Our collection
          includes everything <br /> from collectible cards to trendy
          accessories. Shop with us and <br /> discover the magic of the Pokemon
          world today.
        </p>
      </div>
    </div>
  );
};

export default Header;
