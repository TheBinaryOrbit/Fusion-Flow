import Image from "next/image";
import { FaMeta, FaGoogle, FaXTwitter , FaApple} from "react-icons/fa6";
import { MdWorkspacePremium } from "react-icons/md";
import { AiFillAmazonCircle } from "react-icons/ai";
import img from '../../assets/person.jpg'

const BusinessPro = () => {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto p-4">
                <div className="">
                    <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">Introducing Fusion Flow pro.</h1>
                    <div className="h-fit bg-indigo-100 rounded-2xl flex lg:flex-row flex-col">
                        <div className="lg:w-1/2 lg:h-full h-1/2 w-full  md:p-10 p-5">
                            <h1 className="text-2xl md:text-[44px] text-balck font-serif leading-tight font-medium mb-6 sm:mb-10" >The <span className="text-indigo-600 ">premium</span> freelance solution for businesses</h1>
                            <div className=" grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-6 mb-10">
                                <div>
                                    <p><MdWorkspacePremium size={16} className="mb-2" /></p>
                                    <h2 className="font-bold text-lg">Dedicated hiring experts</h2>
                                    <p className="text-sm sm:w-full text-justify w-[90%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, eos incidunt deleniti tempore adipisci explicabo!</p>
                                </div>
                                <div>
                                    <p><MdWorkspacePremium size={16} className="mb-2" /></p>
                                    <h2 className="font-bold text-lg">Satisfaction guarantee</h2>
                                    <p className="text-sm sm:w-full text-justify w-[90%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, eos incidunt deleniti tempore adipisci explicabo!</p>
                                </div>
                                <div>
                                    <p><MdWorkspacePremium size={16} className="mb-2" /></p>
                                    <h2 className="font-bold text-lg">Advanced management tools</h2>
                                    <p className="text-sm sm:w-full text-justify w-[90%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, eos incidunt deleniti tempore adipisci explicabo!</p>
                                </div>
                                <div>
                                    <p><MdWorkspacePremium size={16} className="mb-2" /></p>
                                    <h2 className="font-bold text-lg">Flexible payment models</h2>
                                    <p className="text-sm sm:w-full text-justify w-[90%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, eos incidunt deleniti tempore adipisci explicabo!</p>
                                </div>
                            </div>
                            <button className="border-[1px] px-5 border-white rounded-2xl shadow-button text-white bg-black tracking-wide py-2 font-bold z-50 overflow-hidden mb-10">
                                Get Started
                            </button>
                            <div className="sm:block hidden">
                                <h2 className="font-bold text-xl mb-1">Trusted By</h2>
                                <div className="flex gap-4">
                                    <p className="flex justify-center items-center gap-1 text-lg"><FaXTwitter />xcentic</p>
                                    <p className="flex justify-center items-center gap-1 text-lg"><FaMeta /> Meta</p>
                                    <p className="flex justify-center items-center gap-1 text-lg"><FaGoogle /> Google</p>
                                    <p className="flex justify-center items-center gap-1 text-lg"><FaApple /> apple</p>
                                    <p className="flex justify-center items-center gap-1 text-lg"><AiFillAmazonCircle /> amazon</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:h-full h-1/2 w-full p-5 md:p-10 ">
                            <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-[auto_auto_auto_auto] gap-5 md:p-4  rounded-2xl">
                                {/* Card 1 */}
                                <div className="sm:col-span-2 flex items-center justify-between bg-white shadow-lg rounded-2xl p-4">
                                    <div>
                                        <p className="font-semibold text-sm">Three Taskers in Full Swing.</p>
                                    </div>
                                    <div className="flex space-x-2">
                                        <Image
                                            src={img}
                                            width={10}
                                            height={10}
                                            alt="Avatar 1"
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <Image
                                            src={img}
                                            width={10}
                                            height={10}
                                            alt="Avatar 2"
                                            className="w-10 h-10 rounded-full"
                                        />
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="bg-gradient-to-b from-blue-50 to-white shadow-xl rounded-2xl p-6 flex flex-col items-center">
                                    {/* Header */}
                                    <p className="font-bold text-center text-gray-800 text-base mb-4">
                                        Timely Status Updates & Progress Reports
                                    </p>

                                    {/* Semi-Circle Progress */}
                                    <div className="w-32 h-20 relative mb-4">
                                        <svg className="absolute inset-0" viewBox="0 0 44 24">
                                            {/* Background Semi-Circle */}
                                            <path
                                                d="M2 22a20 20 0 0 1 40 0"
                                                fill="none"
                                                stroke="#e5e7eb"
                                                strokeWidth="4"
                                            />
                                            {/* Progress Semi-Circle */}
                                            <path
                                                d="M2 22a20 20 0 0 1 40 0"
                                                fill="none"
                                                stroke="#3b82f6"
                                                strokeWidth="4"
                                                strokeDasharray="39,100"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        {/* Percentage Text */}
                                        <p className="absolute inset-0 flex items-center justify-center text-xl font-extrabold text-blue-600">
                                            39%
                                        </p>
                                    </div>

                                    {/* Footer Text */}
                                    <p className="text-sm text-gray-600">
                                        Project in Progress
                                    </p>
                                </div>
                                {/* Card 3 */}
                                <div className="bg-white shadow-lg rounded-2xl flex flex-col items-center justify-center p-6 row-span-2">
                                    <p className="font-semibold text-center text-sm mb-4">Comprehensive Notes And Summaries With Action Items</p>
                                    <Image
                                        src={img}
                                        alt="Person"
                                        className="w-16 h-16 rounded-lg"
                                    />
                                    <div className="text-xl font-bold text-blue-500 mt-2">48%</div>
                                </div>

                                {/* Card 4 */}
                                <div className="bg-white shadow-lg rounded-2xl flex flex-col items-center justify-center p-6">
                                    <div className="grid grid-cols-2  gap-4">
                                        <Image
                                            src={img}
                                            alt="Image 1"
                                            className="w-14 h-14 rounded-full"
                                        />
                                        <Image
                                            src={img}
                                            alt="Image 2"
                                            className="w-14 h-14 rounded-full"
                                        />
                                        <Image
                                            src={img}
                                            alt="Image 3"
                                            className="w-14 h-14 rounded-full"
                                        />
                                        <Image
                                            src={img}
                                            alt="Image 4"
                                            className="w-14 h-14 rounded-full"
                                        />
                                    </div>
                                    <p className="text-2xl font-bold mt-4">5+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessPro