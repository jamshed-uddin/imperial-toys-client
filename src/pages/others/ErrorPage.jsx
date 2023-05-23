import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <div>
          <h1 className="text-3xl font-bold">Something went wrong!</h1>
        </div>
        <div className="py-3 text-start">
          <h1 className="text-xl ">Try:</h1>
          <ul className="pl-10 text-lg list-disc">
            <li>Reloading the page.</li>
            <li>Checking the internet connection.</li>
            <li>Checking the URL.</li>
          </ul>
        </div>
        <div>
          <Link className="btn bg-pink-600 hover:bg-pink-500 border-0" to={"/"}>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
