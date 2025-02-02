"use client";
import React, { useEffect, useRef } from "react";
import { TextGenerateEffect } from "../TextGenerator/Textgenerator";
import Image from "next/image";
import img from '../../assets/phone.png'
import { MdOutlineMailOutline } from "react-icons/md";
import './hero.css'

function Hero3() {
  const backgroundRef = useRef(null);

  // Mouse movement effect for parallax
  useEffect(() => {
    const handleMouseMove = (e : any) => {
      const { clientX, clientY } = e;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const xOffset = (clientX / screenWidth - 0.5) * 20; // Adjust X position
      const yOffset = (clientY / screenHeight - 0.5) * 20; // Adjust Y position

      if (backgroundRef.current) {
        backgroundRef.current.style.transform   =`translate(${xOffset}px, ${yOffset}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-fit overflow-hidden ">
      <div className="w-7xl mx-auto flex flex-col justify-between pt-5 items-center h-full text-center z-10">
        <div className="flex flex-col justify-center items-center mb-10">
          <TextGenerateEffect
            duration={1}
            filter={false}
            words={"The Future of Freelancing With Fusion Flow"}
            textlen="6xl"
          />
          <p className="text-gray-800 max-w-2xl text-center leading-snug mt-4">
            Elevate your freelancing experience with advanced tools that connect,
            innovate, and create a seamless workflow for all your projects.
          </p>
        </div>

        <div className=" container flex w-fit p-2 gap-2">
          <div className="w-fit flex justify-center items-center border-black border h-full px-2 rounded-md gap-4 bg-white">
            <MdOutlineMailOutline size={22} />
            <input type="text" className="outline-none w-64 h-12" placeholder="Your Email Address" />
          </div>
          <button className=" bg-black text-white w-full px-3 py-2 rounded-md font-medium h-12">Get Started</button>
        </div>
        <div className="w-full flex justify-center items-center relative">
          <div className="border-t border-gray-400 w-[700px] h-[350px] rounded-t-full absolute bottom-0 left-[50%] translate-x-[-46%] "></div>
          <div className="border-t border-gray-400 w-[600px] h-[280px] rounded-t-full absolute bottom-0 left-[50%] translate-x-[-46%] "></div>
          <div className="border-t border-gray-400 w-[800px] h-[380px] rounded-t-full absolute bottom-0 left-[50%] translate-x-[-46%] "></div>
          <canvas className="w-[300px] h-[200px] bg-purple-300 absolute top-10 left-7 rounded-xl animate "  ></canvas>
          <canvas className="w-[200px] h-[100px] bg-green-300 absolute bottom-16 left-44 rounded-xl animate1"></canvas>
          <canvas className="w-[200px] h-[200px] bg-green-300 absolute right-10 top-0 rounded-xl animate2"></canvas>
          <canvas className="w-[200px] h-[120px] bg-purple-300 absolute right-36 bottom-11 rounded-xl animate3"></canvas>
          <Image src={img} className=" scale-90" alt="Phone Image"  ></Image>
        </div>


      </div>
    </div>
  );
}

export default Hero3;
