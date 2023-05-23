import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopByCategory = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {}, []);
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="my-6">
      <h1 className="text-4xl font-bold text-center">shop by category</h1>
    </div>
  );
};

export default ShopByCategory;
