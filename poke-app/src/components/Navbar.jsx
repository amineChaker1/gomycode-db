import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/image 1.png";
const Navbar = () => {
  return (
    <div className="bg-primary p-5 rounded-lg flex justify-evenly items-center">
      <div className="user">
        <img src={user} alt="" />
      </div>
      <div className="navigation mx-32">
        <a
          href=""
          className="bg-secondary py-2 px-10 rounded-md border-2 border-dark mr-10 text-white"
        >
          Home
        </a>
        <a
          href=""
          className="bg-secondary py-2 px-10 rounded-md border-2 border-dark mr-10 text-white"
        >
          New Releases
        </a>
        <a
          href=""
          className="bg-secondary py-2 px-10 rounded-md border-2 border-dark text-white"
        >
          Clothing
        </a>
      </div>
      <Link to="/add">
        <div className="cart flex items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-dark"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </span>
          <span className="text-dark font-semibold">Add Pokemon</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
