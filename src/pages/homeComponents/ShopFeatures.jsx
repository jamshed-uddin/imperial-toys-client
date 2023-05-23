import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopFeatures = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="py-10">
      <h1 className="text-4xl py-6 font-bold text-center">
        The best we serve.
      </h1>
      <div className="text-3xl grid grid-cols-1 lg:grid-cols-2 gap-4 pl-20 pr-20 pb-20">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="border-2 border-pink-500 rounded-xl p-12 text-center hover:text-white hover:bg-pink-500"
        >
          <h1>Risk free shipping.</h1>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="border-2 border-pink-500 rounded-xl p-12 text-center hover:text-white hover:bg-pink-500"
        >
          <h1>Multiple payment methods.</h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="border-2 border-pink-500 rounded-xl p-12 text-center hover:text-white hover:bg-pink-500"
        >
          <h1>Flexible return policy.</h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="border-2 border-pink-500 rounded-xl p-12 text-center hover:text-white hover:bg-pink-500"
        >
          {" "}
          <h1>Toys from best brands</h1>
        </div>
      </div>
    </div>
  );
};

export default ShopFeatures;
