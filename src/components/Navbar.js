import React from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-10">
      <div className="sticky flex flex-wrap max-w-screen-3xl items-center  justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-white font-bold text-lg">
            <span className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-blue-600">
              Imagi -{" "}
            </span>
            <span className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-red-600">
              W
            </span>
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto items-center space-x-4 "
          id="navbar-default"
        >
          <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 0">
            <Link
              to="/"
              className="font-bold text-lg text-white uppercase py-2 px-4 rounded-lg border-1 border-white bg-gray-800 shadow-sm shadow-gray-50 active:shadow-none transform active:translate-x-1 active:translate-y-1"
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className="font-bold text-lg text-white uppercase py-2 px-4 rounded-lg border-1 border-white bg-gray-800 shadow-sm shadow-gray-50 active:shadow-none transform active:translate-x-1 active:translate-y-1"
            >
              Gallery
            </Link>
            <button className="bg-white text-gray-800 hover:bg-gray-200 px-4 py-1 rounded-md text-xl font-bold">
              <LoginModal />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
