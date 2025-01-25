import { FaArrowLeft , FaArrowRight } from "react-icons/fa6";

const Section3 = ()=>{
    return(
        <div className="w-full py-10 ">
            <div className="max-w-7xl mx-auto p-4">
                <h1 className=" text-5xl font-bold text-center capitalize mb-10">Popular services</h1>
                <div className="container grid grid-flow-col overflow-x-scroll gap-10 scrollbar mb-10">
                    <canvas className="w-[280px] h-[500px] bg-slate-200 rounded-2xl hover:w-[330px] duration-300"></canvas>
                    <canvas className="w-[280px] h-[500px] bg-slate-200 rounded-2xl hover:w-[330px] duration-300" ></canvas>
                    <canvas className="w-[280px] h-[500px] bg-slate-200 rounded-2xl hover:w-[330px] duration-300" ></canvas>
                    <canvas className="w-[280px] h-[500px] bg-slate-200 rounded-2xl hover:w-[330px] duration-300" ></canvas>
                    <canvas className="w-[280px] h-[500px] bg-slate-200 rounded-2xl hover:w-[330px] duration-300" ></canvas>
                    <canvas className="w-[280px] h-[500px] bg-slate-200 rounded-2xl hover:w-[330px] duration-300" ></canvas>
                    <canvas className="w-[280px] h-[500px] bg-slate-200 rounded-2xl hover:w-[330px] duration-300" ></canvas>
                </div>
                <div className=" flex justify-between items-center mb-20">
                    <canvas className="w-[700px] h-3 bg-gray-300 rounded-2xl"></canvas>
                    <div className="flex gap-4">
                        <button className="p-3 bg-black text-white rounded-full"><FaArrowLeft /></button>
                        <button className="p-3 bg-gray-300 text-black rounded-full"><FaArrowRight /></button>
                    </div>
                </div>

                <div className="">
                    <h1 className="text-3xl font-bold mb-6">Introducing Fusion Flow pro.</h1>
                    <div className="h-[70vh] bg-slate-200 rounded-2xl">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3