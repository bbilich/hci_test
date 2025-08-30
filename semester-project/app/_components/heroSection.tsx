"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full">
      <img src="/hero.jpg" alt="hero image" />

      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 gap-5 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-semibold md:-mt-15 tracking-wide text-beige-900">
          HELENA ART
        </h1>
        <div className="md:mt-10 backdrop-blur-2xl rounded-4xl">
            <p className="text-md md:text-3xl lg:text-4xl font-bold text-white mx-6 pb-1 md:mt-1.5">
                zabilježimo najljepše trenutke Vašega života
            </p>
        </div>

        <a href="/portfolio">
            <button className="mt-6 sm:mt-10 bg-beige-200 text-beige-800 px-6 py-1 
            sm:py-3 rounded-3xl font-medium text-sm md:text-xl hover:bg-beige-50 transition">
                pogledajte galeriju slika
            </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
