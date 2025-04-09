import React from "react";
import HomeLayout from "../Layouts/HomeLayot";

import Home from "./Home";

import HomeIntro from "../Components/HomeIntro";

function HomePage() {
  return (
    <HomeLayout>
      
      
      <HomeIntro />
      <Home />
    </HomeLayout>
  );
}

export default HomePage;
