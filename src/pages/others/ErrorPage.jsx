import { Controls, Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../useTitle";

const ErrorPage = () => {
  useTitle("Error");
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <div>
          <div>
            <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/private_files/lf30_hdjv06hi.json"
              style={{ height: "300px", width: "300px" }}
            ></Player>
          </div>
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
