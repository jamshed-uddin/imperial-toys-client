import { faAngleRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const SingleToyCard = ({ toyCard }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { _id, image_url, price, toy_name, rating } = toyCard;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="h-96 border-2 border-pink-600 overflow-hidden rounded-xl relative"
    >
      <img src={image_url} alt={toy_name} />

      <div className="bg-pink-600 px-6 py-1 absolute bottom-2 left-2 right-2 flex items-center justify-between rounded-xl">
        <div className="text-white">
          <h1 className="text-2xl font-bold">{toy_name}</h1>
          <p className="font-semibold text-xl">
            <span className="text-sm">$</span> {price}
          </p>
          <p className="text-lg font-semibold">
            {rating}{" "}
            <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
          </p>
        </div>
        <div className="bg-white px-4 py-3 rounded-full">
          <Link to={`../toydetails/${_id}`} className="text-2xl text-pink-600">
            <FontAwesomeIcon
              className="text-2xl text-pink-600"
              icon={faAngleRight}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleToyCard;
