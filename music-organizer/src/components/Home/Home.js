import React from "react";
import HomeHeader from "./HomeHeader";
import HomeMainSection from "./HomeMainSection";
import HomeFooter from "./HomeFooter";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <HomeMainSection />
      <HomeFooter />
    </div>
  );
};

export default Home;
