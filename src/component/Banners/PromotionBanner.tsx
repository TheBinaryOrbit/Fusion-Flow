"use client"
import { BiSolidHappyHeartEyes } from "react-icons/bi";
import { FaBusinessTime } from "react-icons/fa";


const PromotionBanner = () => {
    return (
        <div className="w-full">
            <div className="max-w-7xl h-fit mx-auto p-4  flex justify-between items-center gap-10">
                <div className="w-1/2 h-full bg-indigo-500 rounded-2xl p-10 flex justify-between flex-col">
                    <h1 className="text-4xl text-white font-serif leading-tight font-medium mb-6 " >Your satification , guaranteed as a customer!</h1>
                    <p className=" max-w-80 text-white mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <ul className="font-[500] capitalize rounded-xl space-y-4 mb-10">
                        <li className=" rounded-lg  cursor-pointer duration-200 flex items-center gap-5">
                            <div className=" bg-white items-center justify-center flex h-10 w-10 rounded-lg ">
                                <BiSolidHappyHeartEyes className="font-extralight -rotate-12" size={24} />
                            </div>
                            <div>
                                <h1 className="text-lg text-white">Happiness Pledge</h1>
                                <p className="text-sm font-light text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                            </div>
                        </li>
                        <li className="  rounded-lg  cursor-pointer duration-200 flex items-center gap-5">
                            <div className=" bg-white items-center justify-center flex h-10 w-10 rounded-lg ">
                                <BiSolidHappyHeartEyes className="font-extralight -rotate-12" size={24} />
                            </div>
                            <div>
                                <h1 className="text-lg text-white">Happiness Pledge</h1>
                                <p className="text-sm font-light text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, perferendis.</p>
                            </div>
                        </li>
                        <li className="  rounded-lg  cursor-pointer duration-200 flex items-center gap-5">
                            <div className=" bg-white items-center justify-center flex h-10 w-10 rounded-lg ">
                                <BiSolidHappyHeartEyes className="font-extralight -rotate-12" size={24} />
                            </div>
                            <div>
                                <h1 className="text-lg text-white">Happiness Pledge</h1>
                                <p className="text-sm font-light text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptatum.</p>
                            </div>
                        </li>
                    </ul>
                    <button className=" w-1/2 px-8 rounded-2xl  hover:scale-105 duration-300  text-black   tracking-wide py-2 bg-white font-bold">Join now</button>
                </div>
                <div className="w-1/2 h-full bg-indigo-100 rounded-2xl p-10 flex justify-between flex-col">
                    <h1 className="text-4xl text-black font-serif leading-tight font-medium mb-6 " >Even a Bussiness Need, professionals Help!</h1>
                    <p className=" max-w-80 text-black mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <ul className="font-[500] capitalize rounded-xl space-y-4 mb-10">
                        <li className=" rounded-lg  cursor-pointer duration-200 flex items-center gap-5">
                            <div className="bg-indigo-500 items-center justify-center flex h-10 w-10 rounded-lg ">
                                <FaBusinessTime className="text-white font-extralight" size={24} />
                            </div>
                            <div>
                                <h1 className="text-lg text-black">Hire professional</h1>
                                <p className="text-sm font-light text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                            </div>
                        </li>
                        <li className="  rounded-lg  cursor-pointer duration-200 flex items-center gap-5">
                            <div className=" bg-indigo-500 items-center justify-center flex h-10 w-10 rounded-lg ">
                                <FaBusinessTime className="text-white font-extralight " size={24} />
                            </div>
                            <div>
                                <h1 className="text-lg text-black">Happiness Pledge</h1>
                                <p className="text-sm font-light text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, perferendis.</p>
                            </div>
                        </li>
                        <li className="  rounded-lg  cursor-pointer duration-200 flex items-center gap-5">
                            <div className=" bg-indigo-500 items-center justify-center flex h-10 w-10 rounded-lg ">
                                <FaBusinessTime className="text-white font-extralight " size={24} />
                            </div>
                            <div>
                                <h1 className="text-lg text-black">Happiness Pledge</h1>
                                <p className="text-sm font-light text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptatum.</p>
                            </div>
                        </li>
                    </ul>
                    <button className=" w-1/2 px-8  rounded-2xl hover:scale-105 duration-300 text-white  tracking-wide py-2 bg-black font-bold">Start your business now</button>
                </div>
            </div>
        </div>
    )

}

export default PromotionBanner