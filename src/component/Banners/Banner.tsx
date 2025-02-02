"use client";
import React, { useState } from "react";

const Banner = () => {
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const [scale , setScale ] = useState(1)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX: x, clientY: y } = e;
    setScale(1.2)
    setXPosition((x / 10) - 5);
    setYPosition((y / 10) - 5);
  };

  return (
    <div className="w-full py-10">
      <div
        className="relative max-w-7xl mx-auto p-4 group rounded-2xl h-[400px] bg-black flex flex-col justify-center items-center overflow-hidden"
        onMouseMove={handleMouseMove} onMouseLeave={()=> setScale(1)}
      >
        {/* Moving Background */}
        <div
          className="absolute inset-0 bg-startexture bg-black rounded-2xl duration-300"
          style={{
            transform: `translate(${xPosition}px, ${yPosition}px) scale(${scale})`,
          }}
        >
          <div className="bg-texture opacity-10 h-full w-full"></div>
        </div>

        {/* Content */}
        <h1 className="text-white text-5xl font-bold text-center capitalize mb-6 z-50">
          A Better Way to Work <br /> Today, Together
        </h1>
        <p className="text-slate-200 text-center max-w-3xl text-sm z-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vitae, perferendis libero aspernatur dignissimos, velit molestias aperiam fuga laborum aliquid non! Quibusdam.
        </p>
        <div className="mt-10 flex items-center gap-5 z-50">
          <button className="px-5 py-2 rounded-2xl shadow-button text-black bg-white font-bold text-sm hover:bg-gray-200 duration-300">
            Join Fusion Flow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
