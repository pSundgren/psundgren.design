import React from "react";

/* Components */
import Hero from "./sections/Hero";
import Wave from "react-wavify";
import Section from "../components/common/Section";

const Home = () => {
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
      <Section p="pt-8 pb-36">
        <div className="">
          <h2 className="text-sm text-gray-400">My works</h2>
          <h1 className="text-3xl text-gray-900">
            <span className="font-primary">Take part of my </span>
            <span className="font-secondary italic">creative catalogue</span>
          </h1>
        </div>
      </Section>
    </>
  );
};

export default Home;
