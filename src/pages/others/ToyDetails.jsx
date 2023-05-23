import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ToyDetails = () => {
  const [toyDetails, setToyDetails] = useState([]);
  const { toyId } = useParams();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://imperial-toys.vercel.app/singletoy/${toyId}`)
      .then((res) => res.json())
      .then((data) => {
        setToyDetails(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-[50vh] flex justify-center items-center">
          <progress className="progress w-56"></progress>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-8">
          <div>
            <img className="w-11/12" src={toyDetails?.image_url} alt="" />
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold">{toyDetails?.toy_name}</h1>
            <p className=" text-lg">{toyDetails?.description}</p>
            <p className="font-semibold text-lg">
              Seller: {toyDetails?.seller_name}
            </p>
            <p className="font-semibold text-lg">
              Category: {toyDetails?.sub_category}
            </p>
            <p className="font-semibold text-lg">
              Ratings: {toyDetails?.rating}
            </p>
            <p className="font-semibold text-lg">Price: ${toyDetails?.price}</p>

            <div className="space-x-2">
              <button className="btn bg-pink-600 hover:bg-pink-500 border-0">
                Buy Now
              </button>
              <button className="btn bg-pink-600 hover:bg-pink-500 border-0">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ToyDetails;
