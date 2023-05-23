import React from "react";
import useTitle from "../../useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="py-10">
      <h1 className="text-4xl text-center font-bold">Blogs</h1>
      <div className="py-6 ">
        <h1 className="text-3xl font-semibold py-2">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
      </div>
      <div className="py-6 "></div>
      <div className="py-6 "></div>
      <div className="py-6 "></div>
    </div>
  );
};

export default Blogs;
