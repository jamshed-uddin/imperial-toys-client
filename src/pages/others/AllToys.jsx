import React from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const allToys = useLoaderData();
  return (
    <div>
      <h1>hello alltoys</h1>
    </div>
  );
};

export default AllToys;
