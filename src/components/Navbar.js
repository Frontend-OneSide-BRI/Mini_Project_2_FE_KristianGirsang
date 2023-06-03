import React from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-10">
      <div className="sticky flex max-w-screen items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-white font-bold text-lg">
            <span className="font-extrabold text-5xl text-blue-600">
              Imagi -{" "}
            </span>
            <span className="font-extrabold text-5xl text-red-600">W</span>
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl font-bold"
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl font-bold"
          >
            Gallery
          </Link>
          <button className="bg-white text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md text-xl font-bold">
            <LoginModal />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
