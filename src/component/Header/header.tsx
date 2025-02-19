import Image from "next/image";
import img from '../../assets/logowhiteheader.png';
import { FaInstagram, FaYoutube, FaGithub, FaXTwitter } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";


const Header = () => {
    return (
        <header className="w-full h-[8vh] py-3 bg-white  z-50 sticky top-0">
            <div className="max-w-7xl flex items-center lg:mx-auto mx-5 gap-20 relative z-50 justify-between">
                <div>
                    <Image src={img} width={100} height={50} alt="logo" />
                </div>
                <nav  className="">
                    <ul className="style-none hidden lg:flex gap-5 text-black ml-24">
                        <li className="group relative">
                            <p className="flex items-center gap-1 font-[500] capitalize cursor-pointer">
                                Business
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 320 512"
                                    className="translate-y-[2px] group-hover:rotate-180 duration-300"
                                    height="12"
                                    width="12"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                                </svg>
                            </p>
                            <ul className="absolute top-[100%] mt-3 bg-gray-900 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible p-2 font-[500] capitalize rounded-xl space-y-2 shadow-lg z-50">
                                <li className="hover:bg-gray-800 rounded-lg p-2 cursor-pointer duration-200">
                                    <h1>Premium</h1>
                                    <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet</p>
                                </li>
                                <li className="hover:bg-gray-800 rounded-lg p-2 cursor-pointer duration-200">
                                    <h1>Standard</h1>
                                    <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet</p>
                                </li>
                                <li className="hover:bg-gray-800 rounded-lg p-2 cursor-pointer duration-200">
                                    <h1>Basic</h1>
                                    <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet</p>
                                </li>
                            </ul>
                        </li>
                        <li className="font-[500] capitalize">Student</li>
                        <li className="group relative">
                            <p className="flex items-center gap-1 font-[500] capitalize cursor-pointer">
                                Community
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 320 512"
                                    className="translate-y-[2px] group-hover:rotate-180 duration-300"
                                    height="12"
                                    width="12"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                                </svg>
                            </p>
                            <ul className="absolute top-[100%] mt-3 bg-gray-900 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible  p-2 font-[500] capitalize rounded-xl space-y-2 shadow-lg z-50">
                                <li className="hover:bg-gray-800 rounded-lg p-2 cursor-pointer duration-200 flex items-center gap-2">
                                    <div className="bg-gray-950 items-center justify-center flex h-10 w-10 rounded-lg">
                                        <FaInstagram />
                                    </div>
                                    <div>
                                        <h1>Instagram</h1>
                                        <p className="text-sm text-gray-400">Follow Us on Instagram</p>
                                    </div>
                                </li>
                                <li className="hover:bg-gray-800 rounded-lg p-2 cursor-pointer duration-200 flex items-center gap-2">
                                    <div className="bg-gray-950 items-center justify-center flex h-10 w-10 rounded-lg">
                                        <FaXTwitter />
                                    </div>
                                    <div>
                                        <h1>Twitter</h1>
                                        <p className="text-sm text-gray-400">Follow Us on Twitter</p>
                                    </div>
                                </li>
                                <li className="hover:bg-gray-800 rounded-lg p-2 cursor-pointer duration-200 flex items-center gap-2">
                                    <div className="bg-gray-950 items-center justify-center flex h-10 w-10 rounded-lg">
                                        <FaGithub />
                                    </div>
                                    <div>
                                        <h1>Github</h1>
                                        <p className="text-sm text-gray-400">Follow Us on Github</p>
                                    </div>
                                </li>
                                <li className="hover:bg-gray-800 rounded-lg p-2 cursor-pointer duration-200 flex items-center gap-2">
                                    <div className="bg-gray-950 items-center justify-center flex h-10 w-10 rounded-lg">
                                        <FaYoutube />
                                    </div>
                                    <div>
                                        <h1>Youtube</h1>
                                        <p className="text-sm text-gray-400">Follow Us on Youtube</p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="font-[500] capitalize">Download</li>
                    </ul>
                </nav>
                <nav className="gap-4 text-black hidden lg:flex">
                    <button className="border-[1px] px-3 border-gray-200 rounded-2xl shadow-button hover:scale-95 duration-300 text-sm font-[500]  tracking-wide">
                        Sign In
                    </button>
                    <button className="border-[1px] px-3 border-gray-200 rounded-2xl shadow-button hover:scale-95 duration-300 text-sm py-1 font-[500]  tracking-wide">
                        Get Started
                    </button>
                </nav>
                <div className="flex lg:hidden items-center">
                    <LuMenu size={24} />
                </div>
            </div>
        </header>
    );
};

export default Header;
