import React from "react";
import { Link } from "react-router-dom";

const ViewMore = () => {
  return (
    <div className="view-more">
      <Link to="/gallery">
        <button className="font-bold text-xl text-gray-800 border-2 border-solid border-gray-500 py-4 px-8 rounded-lg m-5 hover:bg-gray-800 hover:text-white">
          View More
        </button>
      </Link>
    </div>
  );
};

export default ViewMore;
