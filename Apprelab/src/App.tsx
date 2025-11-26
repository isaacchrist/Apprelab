import React from "react";
import DashHomeHero from "./components/common/DashHomeHero";
import TopCategories from "./components/common/TopCategories";
import Recommended from "./components/common/Recommended";
import TopRatedCourses from "./components/common/TopRatedCourses";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <DashHomeHero />
      <TopCategories />
      <TopRatedCourses />
      <Recommended />
    </div>
  );
}

export default App;

