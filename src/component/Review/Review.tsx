
"use client"
import Image from "next/image";
import { FiUser } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import person from '../../assets/person.jpg'

const Review = () => {
    return (
        <div className="w-full py-10">
            <div className="max-w-7xl mx-auto p-4">
                <div className="flex justify-start items-center h-fit">
                    <p className="flex justify-start items-center border-[1px] border-slate-300 px-3 rounded-lg text-xs  gap-1 mb-4 py-1 text-slate-700 font-semibold">
                        <FiUser size={12} /><span className="text-xs -translate-y-[1px]  font-semibold">Customers</span>
                    </p>
                </div>
                <h1 className="text-5xl/tight  font-bold  capitalize mb-10">What people say</h1>
                {/* <p className="text-sm text-center text-slate-500  mb-10">Here's what some of our customers say about our platfrom.</p> */}
                <div className="grid grid-cols-3 gap-7">
                    <marquee behavior="alternate" direction="up" scrollamount="2" className=" p-3 max-h-[400px] overflow-hidden">
                        <div className="w-full -h-[200px]  rounded-2xl shadow-reviwcard p-5 flex flex-col justify-between  gap-3 mb-10">
                            <div className="flex gap-1 justify-start items-center">
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <p className="text-sm">4.8</p>
                            </div>
                            <p className=" font-sans italic text-sm">
                                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur exercitationem officiis ea enim vero. Molestias delectus, libero, ratione quaerat quam"
                            </p>
                            <div className=" flex gap-4 items-center">
                                <Image src={person} alt="" className="rounded-full h-10 w-10 overflow-hidden" />
                                <div>
                                    <h2 className="text-xs font-bold mb-1">ujjwal Sharma</h2>
                                    <p className="text-xs font-light">Co-founder Xcentic</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full -h-[200px]  rounded-2xl shadow-reviwcard p-5 flex flex-col justify-between  gap-3 mb-10">
                            <div className="flex gap-1 justify-start items-center">
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <p className="text-sm">4.8</p>
                            </div>
                            <p className=" font-sans italic text-sm">
                                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur exercitationem officiis ea enim vero. Molestias delectus, libero, ratione quaerat quam"
                            </p>
                            <div className=" flex gap-4 items-center">
                                <Image src={person} alt="" className="rounded-full h-10 w-10 overflow-hidden" />
                                <div>
                                    <h2 className="text-xs font-bold mb-1">ujjwal Sharma</h2>
                                    <p className="text-xs font-light">Co-founder Xcentic</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full -h-[200px]  rounded-2xl shadow-reviwcard p-5 flex flex-col justify-between  gap-3 mb-10">
                            <div className="flex gap-1 justify-start items-center">
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <p className="text-sm">4.8</p>
                            </div>
                            <p className=" font-sans italic text-sm">
                                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur exercitationem officiis ea enim vero. Molestias delectus, libero, ratione quaerat quam"
                            </p>
                            <div className=" flex gap-4 items-center">
                                <Image src={person} alt="" className="rounded-full h-10 w-10 overflow-hidden" />
                                <div>
                                    <h2 className="text-xs font-bold mb-1">ujjwal Sharma</h2>
                                    <p className="text-xs font-light">Co-founder Xcentic</p>
                                </div>
                            </div>
                        </div>
                    </marquee>
                    <marquee behavior="alternate" direction="down" scrollamount="2" className=" p-3 max-h-[400px] overflow-hidden">
                        <div className="w-full -h-[200px]  rounded-2xl shadow-reviwcard p-5 flex flex-col justify-between  gap-3 mb-10">
                            <div className="flex gap-1 justify-start items-center">
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <p className="text-sm">4.8</p>
                            </div>
                            <p className=" font-sans italic text-sm">
                                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur exercitationem officiis ea enim vero. Molestias delectus, libero, ratione quaerat quam"
                            </p>
                            <div className=" flex gap-4 items-center">
                                <Image src={person} alt="" className="rounded-full h-10 w-10 overflow-hidden" />
                                <div>
                                    <h2 className="text-xs font-bold mb-1">ujjwal Sharma</h2>
                                    <p className="text-xs font-light">Co-founder Xcentic</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full -h-[200px]  rounded-2xl shadow-reviwcard p-5 flex flex-col justify-between  gap-3 mb-10">
                            <div className="flex gap-1 justify-start items-center">
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <p className="text-sm">4.8</p>
                            </div>
                            <p className=" font-sans italic text-sm">
                                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur exercitationem officiis ea enim vero. Molestias delectus, libero, ratione quaerat quam"
                            </p>
                            <div className=" flex gap-4 items-center">
                                <Image src={person} alt="" className="rounded-full h-10 w-10 overflow-hidden" />
                                <div>
                                    <h2 className="text-xs font-bold mb-1">ujjwal Sharma</h2>
                                    <p className="text-xs font-light">Co-founder Xcentic</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full -h-[200px]  rounded-2xl shadow-reviwcard p-5 flex flex-col justify-between  gap-3 mb-10">
                            <div className="flex gap-1 justify-start items-center">
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <p className="text-sm">4.8</p>
                            </div>
                            <p className=" font-sans italic text-sm">
                                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur exercitationem officiis ea enim vero. Molestias delectus, libero, ratione quaerat quam"
                            </p>
                            <div className=" flex gap-4 items-center">
                                <Image src={person} alt="" className="rounded-full h-10 w-10 overflow-hidden" />
                                <div>
                                    <h2 className="text-xs font-bold mb-1">ujjwal Sharma</h2>
                                    <p className="text-xs font-light">Co-founder Xcentic</p>
                                </div>
                            </div>
                        </div>
                    </marquee>
                    <marquee behavior="alternate" direction="up" scrollamount="2" className=" p-3 max-h-[400px] overflow-hidden">
                        <div className="w-full -h-[200px]  rounded-2xl shadow-reviwcard p-5 flex flex-col justify-between  gap-3 mb-10">
                            <div className="flex gap-1 justify-start items-center">
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <p className="text-sm">4.8</p>
                            </div>
                            <p className=" font-sans italic text-sm">
                                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur exercitationem officiis ea enim vero. Molestias delectus, libero, ratione quaerat quam"
                            </p>
                            <div className=" flex gap-4 items-center">
                                <Image src={person} alt="" className="rounded-full h-10 w-10 overflow-hidden" />
                                <div>
                                    <h2 className="text-xs font-bold mb-1">ujjwal Sharma</h2>
                                    <p className="text-xs font-light">Co-founder Xcentic</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full -h-[200px]  rounded-2xl shadow-reviwcard p-5 flex flex-col justify-between  gap-3 mb-10">
                            <div className="flex gap-1 justify-start items-center">
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <p className="text-sm">4.8</p>
                            </div>
                            <p className=" font-sans italic text-sm">
                                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur exercitationem officiis ea enim vero. Molestias delectus, libero, ratione quaerat quam"
                            </p>
                            <div className=" flex gap-4 items-center">
                                <Image src={person} alt="" className="rounded-full h-10 w-10 overflow-hidden" />
                                <div>
                                    <h2 className="text-xs font-bold mb-1">ujjwal Sharma</h2>
                                    <p className="text-xs font-light">Co-founder Xcentic</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full -h-[200px]  rounded-2xl shadow-reviwcard p-5 flex flex-col justify-between  gap-3 mb-10">
                            <div className="flex gap-1 justify-start items-center">
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <FaStar className=" text-indigo-500" />
                                <p className="text-sm">4.8</p>
                            </div>
                            <p className=" font-sans italic text-sm">
                                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur exercitationem officiis ea enim vero. Molestias delectus, libero, ratione quaerat quam"
                            </p>
                            <div className=" flex gap-4 items-center">
                                <Image src={person} alt="" className="rounded-full h-10 w-10 overflow-hidden" />
                                <div>
                                    <h2 className="text-xs font-bold mb-1">ujjwal Sharma</h2>
                                    <p className="text-xs font-light">Co-founder Xcentic</p>
                                </div>
                            </div>
                        </div>
                    </marquee>
                </div>
            </div>
        </div>
    )
}


export default Review