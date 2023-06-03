import React from "react";
import LoginModal from "./LoginModal";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-10">
      <div className="sticky flex max-w-screen items-center justify-between">
        <div className="flex items-center">
          <span className="text-white font-bold text-lg">
            <span className="font-extrabold text-5xl text-blue-600">
              Imagi -{" "}
            </span>
            <span className="font-extrabold text-5xl text-red-600">W</span>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="../pages/Home.js"
            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl font-bold"
          >
            Home
          </a>
          <a
            href="/gallery"
            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl font-bold"
          >
            Gallery
          </a>
          <button className="bg-white text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md text-xl font-bold">
            <LoginModal />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
