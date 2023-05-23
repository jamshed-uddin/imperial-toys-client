import React from "react";
import Banner from "../pages/homeComponents/Banner";
import Gallery from "../pages/homeComponents/Gallery";
import ShopByCategory from "../pages/homeComponents/ShopByCategory";
import ShopFeatures from "../pages/homeComponents/ShopFeatures";
import Brands from "../pages/homeComponents/Brands";
import Reviews from "../pages/homeComponents/Reviews";

const Home = () => {
  return (
    <>
      <Banner />
      <Gallery />
      <ShopByCategory />

      <ShopFeatures />
      <Reviews />
      <Brands />
    </>
  );
};

export default Home;
