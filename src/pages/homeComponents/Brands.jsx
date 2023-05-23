import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";

const Brands = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <h1 className="text-4xl font-bold text-center">Brands</h1>
      <div className="my-8">
        <Marquee gradient>
          <img
            className="w-32 mr-14 rounded-lg my-auto"
            src="https://i.ibb.co/PrCrmmH/Hasbro-4c-no-R.png"
            alt=""
          />
          <img
            className="w-32 mr-14 rounded-lg my-auto"
            src="https://i.ibb.co/F6gpwWK/hotwheels.png"
            alt=""
          />
          <img
            className="w-32 mr-14 rounded-lg my-auto"
            src="https://i.ibb.co/M9NCQBr/images.jpg"
            alt=""
          />
          <img
            className="w-32 mr-14 rounded-lg my-auto"
            src="https://i.ibb.co/NsnRXwF/lego-logo-512.png"
            alt=""
          />
          <img
            className="w-32 mr-14 rounded-lg my-auto"
            src="https://i.ibb.co/YLTyhh9/Logo-Bandai-svg.png"
            alt=""
          />
          <img
            className="w-32 mr-14 rounded-lg my-auto"
            src="https://i.ibb.co/F8d8dCZ/My-Little-Pony-franchise-logo.png"
            alt=""
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Brands;
