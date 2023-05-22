import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold pb-10">
        Have a Glimpse of Majestic Toys
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 px-16 gap-4">
        <div data-aos="fade-right" data-aos-duration="1000">
          <img
            className="border-2 rounded-2xl border-pink-600 p-6 "
            src="https://i.ibb.co/HTb2q0S/vader.jpg"
            alt=""
          />{" "}
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <img
            className="border-2 rounded-2xl border-pink-600 p-6"
            src="https://i.ibb.co/9YXbNfd/ironman.jpg"
            alt=""
          />{" "}
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
          <img
            className="border-2 rounded-2xl border-pink-600 p-6"
            src="https://i.ibb.co/TMKQM9T/blackwidow.png"
            alt=""
          />{" "}
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <img
            className="border-2 rounded-2xl border-pink-600 p-6"
            src="https://i.ibb.co/YksWrqy/spiderman.jpg"
            alt=""
          />{" "}
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <img
            className="border-2 rounded-2xl border-pink-600 p-6"
            src="https://i.ibb.co/9YXbNfd/ironman.jpg"
            alt=""
          />{" "}
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <img
            className="border-2 rounded-2xl border-pink-600 p-6"
            src="https://i.ibb.co/K0PrSvy/clonesoldier.jpg"
            alt=""
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
