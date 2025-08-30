import React from "react";
import Hero from "./_components/heroSection";
import About from "./_components/aboutSection";

export default function Home() {
  return (
      <div className="bg-white">
        <Hero />
        <About />
      </div>
  );
}
