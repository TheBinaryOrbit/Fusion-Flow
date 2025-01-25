import img from '../../assets/logoheader.png'
import Image from 'next/image'
import { FaGooglePlay , FaAppStoreIos , FaFacebook , FaInstagram , FaLinkedin  } from "react-icons/fa";
import { FaSquareXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
        <footer className="w-full bg-black rounded-t-2xl  h-fit p-5">
            <div className="max-w-7xl mx-auto">
                <div className=' flex justify-between items-center mb-10'>
                    <Image src={img} alt="img" className='w-32' />
                    <h1 className="text-3xl text-white font-semibold  capitalize">Job well-done.</h1>
                </div>
                <div className=' text-white grid grid-cols-6 gap-5 mb-10'>
                    <ul className="text-white flex flex-col gap-3 text-sm">
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Office Services</li>
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Personal Assistant</li>
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Shopping Delivery</li>
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Miscellaneous</li>
                    </ul>
                    <ul className="text-white flex flex-col gap-3 text-sm">
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Home Repairs</li>
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Furniture Assembly</li>
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Painting</li>
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Farm Work</li>
                    </ul>
                    <ul className="text-white flex flex-col gap-3 text-sm">
                        <li className="hover:text-slate-200 hover:scale-105     duration-300 cursor-pointer">Mounting & Installation</li>
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Agriculture & Livestock</li>
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Handyman Services</li>
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Warehouse work</li>
                    </ul>
                    <ul className="text-white flex flex-col gap-3 text-sm">
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Plumbing</li>
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Outdoor Help</li>
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Shipping + Freight</li>
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Live stock</li>
                    </ul>
                    <ul className="text-white flex flex-col gap-3 text-sm">
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Cleaning</li>
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Tutoring & Rehab</li>
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Solar Energy Work</li>
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Automotive & Parts</li>
                    </ul>
                    <ul className="text-white flex flex-col gap-3 text-sm">
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Parties + Events</li>
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Moving Services</li>
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Packing & Unpacking</li>
                        <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Furniture Movers</li>
                    </ul>
                </div>
            </div>
            <div className="text-white py-8 ">
                <div className="max-w-screen-xl mx-auto grid grid-cols-6 gap-6 mb-10">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">About us</li>
                            <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Careers</li>
                            <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Support center</li>
                            <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Sarwisi AI</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">For Taskers</li>
                            <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">For Drivers</li>
                            <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">For Merchants</li>
                            <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Safety Standards</li>
                            <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Community Guidelines</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Join us</h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Sell your services</li>
                            <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Get help today</li>
                            <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Become a tasker</li>
                            <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Become a driver</li>
                            <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Sell and advertise</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contacts</h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">+91 620-382-1043</li>
                            <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">anissh946@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Mobile app</h3>
                        <div className="flex items-center gap-4">
                            <FaGooglePlay size={24} className=' cursor-pointer' />
                            <FaAppStoreIos size={24} className=' cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t-2 max-w-7xl mx-auto border-gray-200 py-5 flex justify-between items-center'>
                    <p className=' text-white text-sm '>@2024 Fusion Flow pvt ltd.</p>
                    <ul className=' text-white flex gap-3 text-xl'>
                        <li className=' cursor-pointer'><a href="#"></a> <FaFacebook /></li>
                        <li className=' cursor-pointer'><a href="#"></a> <FaSquareXTwitter /></li>
                        <li className=' cursor-pointer'><a href="#"></a> <FaLinkedin /> </li>
                        <li className=' cursor-pointer'><a href="#"></a> <FaInstagram /></li>
                    </ul>
            </div>
        </footer>
    )
}

export default Footer