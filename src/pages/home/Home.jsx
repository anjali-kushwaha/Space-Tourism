import React from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import StarsCanvas from "../../canvas/Stars";  // Ensure the import path is correct
import HeroSection from "../../components/heroSection/HeroSection"
const Home = () => {
  return (
    <div className="Home-Container">
      <main>
        <StarsCanvas />  {/* Use the component with a capitalized name */}
        <Navbar />
        <HeroSection />
      </main>
    </div>
  );
};

export default Home;
