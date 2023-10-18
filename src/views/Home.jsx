import React from "react";

/* Components */
import Hero from "./sections/Hero";
import Wave from "react-wavify";
import CreativeCatalogue from "./sections/CreativeCatalogue";
import About from "./sections/About";

const Home = ({ changeCursorVariant }) => {
  return (
    <>
      <Hero />
      <Wave
        className="-translate-y-36"
        fill="#ffffff"
        paused={false}
        options={{
          height: 0,
          amplitude: 140,
          speed: 0.1,
          points: 1,
        }}
      />
      <About changeCursorVariant={changeCursorVariant} />
      <CreativeCatalogue changeCursorVariant={changeCursorVariant} />
    </>
  );
};

export default Home;
