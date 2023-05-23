import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SingleToyCard from "./SingleToyCard";

const ShopByCategory = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [activeCategory, setActiveCategory] = useState("Marvel");
  const [categorizedToys, setCategorizedToys] = useState([]);

  useEffect(() => {
    fetch(`https://imperial-toys.vercel.app/alltoys/${activeCategory}`)
      .then((res) => res.json())
      .then((data) => setCategorizedToys(data));
  }, [activeCategory]);
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="py-10">
      <h1 className="text-4xl font-bold text-center">shop by category</h1>
      <div className="text-center py-4">
        <div className="space-x-4 py-4">
          <button
            onClick={() => setActiveCategory("Marvel")}
            className={`border-2 border-pink-600 rounded-lg px-6 text-xl py-2 ${
              activeCategory === "Marvel" ? "bg-pink-600 text-white" : ""
            }`}
          >
            Marvel
          </button>
          <button
            onClick={() => setActiveCategory("DC")}
            className={`border-2 border-pink-600 rounded-lg px-6 text-xl py-2 ${
              activeCategory === "DC" ? "bg-pink-600 text-white" : ""
            }`}
          >
            DC
          </button>
          <button
            onClick={() => setActiveCategory("Star-wars")}
            className={`border-2 border-pink-600 rounded-lg px-6 text-xl py-2 ${
              activeCategory === "Star-wars" ? "bg-pink-600 text-white" : ""
            }`}
          >
            Star wars
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-16">
        {categorizedToys.map((toyCard) => (
          <SingleToyCard key={toyCard?._id} toyCard={toyCard}></SingleToyCard>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
