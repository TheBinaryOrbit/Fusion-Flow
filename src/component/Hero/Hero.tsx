"use client";
import React, { useEffect, useRef } from "react";
import { TextGenerateEffect } from "../TextGenerator/Textgenerator";
import WireEffect from "../Wires/Wireeffect";

function Hero() {
  const backgroundRef = useRef(null);

  // Mouse movement effect for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const xOffset = (clientX / screenWidth - 0.5) * 20; // Adjust X position
      const yOffset = (clientY / screenHeight - 0.5) * 20; // Adjust Y position

      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-[92vh] overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900">
      {/* Background Stars */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-gray-900 z-0"
      >
        <div className="absolute inset-0 flex flex-wrap justify-center items-center opacity-40">
          {[...Array(500)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-full star"
              style={{
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                position: "absolute",
                top: `${Math.random() * 110}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative w-7xl mx-auto flex flex-col justify-center items-center h-full text-center z-10">
        {/* Main Title */}
        <TextGenerateEffect
          duration={1}
          filter={false}
          words={"The Future of Freelancing With Fusion Flow"}
          textlen="6xl"
        />
        <p className="text-gray-300 max-w-2xl text-center leading-snug mt-4">
          Elevate your freelancing experience with advanced tools that connect,
          innovate, and create a seamless workflow for all your projects.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex items-center gap-6">
          <button className="border-[1px] px-5 border-white rounded-2xl shadow-lg text-black tracking-wide py-2 bg-white font-bold hover:bg-gray-200 transition-all duration-300">
            Sign In
          </button>
          <button className="border-[1px] px-5 border-white rounded-2xl shadow-lg text-white tracking-wide py-2 bg-gray-900 font-bold hover:bg-gray-700 transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* Animated Wires */}
        <div className="w-full overflow-x-hidden mt-10 relative scroll-smooth">
          {/* <WireEffect /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
