import React from "react";
import Home from "./Home/Home";

import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";
import Header from "./shared/Header/Header";

const App = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="pt-[65px]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
