"use client"
import { FaArrowLeft, FaArrowRight, FaLaptopCode } from "react-icons/fa6";
import React, { useRef, useState } from "react";

const Section3 = () => {
    const myRef = useRef(null);
    const [percentage, setPercentage] = useState('0%')

    const handlAutoScroll = () => {
        const element: any = myRef.current;
        const perc = Math.floor(((element.scrollLeft + element.clientWidth) / element.scrollWidth) * 100);
        setPercentage(`${perc}%`);
    }

    const handlRightScroll = () => {
        const element: any = myRef.current;
        element.scrollLeft += element.clientWidth;
        handlAutoScroll();
    }

    const handlLeftScroll = () => {
        const element: any = myRef.current;
        element.scrollLeft -= element.clientWidth;
        handlAutoScroll();
    }

    const arr = Array.from({ length: 20 }, (_, i) => i + 1);

    return (
        <div className="w-full py-5 sm:py-10">
            <div className="max-w-7xl mx-auto p-4">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-left capitalize mb-4 md:mb-10">Popular services</h1>
                <div className="relative overflow-hidden">
                    <div className="flex overflow-x-auto scrollbar-hide gap-5 scroll-smooth py-5 scrollbar" ref={myRef} onScroll={handlAutoScroll}>
                        {arr.map((item, index) => (
                            <div key={index} className="min-w-[250px] sm:min-w-[300px] md:min-w-[350px] p-3 sm:p-6 bg-white rounded-2xl shadow-md border border-gray-200">
                                <div className="flex items-center mb-2">
                                    <FaLaptopCode size={30} />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">UI/UX Review Check</h3>
                                <p className="text-gray-600 mb-4 text-sm">
                                    Because it's about motivating the doers. Because I'm here to follow my
                                    dreams and inspire others.
                                </p>
                                <a
                                    href="#"
                                    className="flex items-center text-blue-600 font-medium hover:underline"
                                >
                                    Learn More
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-5 gap-4">
                    <div className="w-full sm:w-[700px] h-3 bg-gray-300 rounded-2xl">
                        <div className="h-3 bg-indigo-500 rounded-2xl duration-300" style={{ width: percentage }}></div>
                    </div>
                    <div className="sm:flex hidden gap-4">
                        <button className="p-3 bg-indigo-600 text-white rounded-full " onClick={handlLeftScroll}><FaArrowLeft /></button>
                        <button className="p-3 bg-gray-300 text-black rounded-full" onClick={handlRightScroll}><FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section3;