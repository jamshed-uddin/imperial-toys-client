import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <div>
          <h1 className="text-3xl font-bold">Something went wrong!</h1>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
