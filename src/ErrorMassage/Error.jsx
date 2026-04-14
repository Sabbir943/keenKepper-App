import React from "react";
import { Link } from "react-router";

const ERROR_CODE = 404;
const ERROR_TITLE = "Page Not Found";
const ERROR_MESSAGE = "Oops! The page you are looking for doesn't exist.";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      
      <h1 className="text-6xl font-bold text-red-500 mb-4">
        {ERROR_CODE}
      </h1>

      <h2 className="text-2xl font-semibold mb-2">
        {ERROR_TITLE}
      </h2>

      <p className="text-gray-600 mb-6">
        {ERROR_MESSAGE}
      </p>

      <Link to="/">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Go Back Home
        </button>
      </Link>
      
    </div>
  );
};

export default Error;