import React from "react";
import Banner from "../pages/homeComponents/Banner";
import Gallery from "../pages/homeComponents/Gallery";
import ShopByCategory from "../pages/homeComponents/ShopByCategory";
import ShopFeatures from "../pages/homeComponents/ShopFeatures";
import Brands from "../pages/homeComponents/Brands";

const Home = () => {
  return (
    <>
      <Banner />
      <Gallery />
      <ShopByCategory />

      <ShopFeatures />

      <Brands />
    </>
  );
};

export default Home;
