
"use client"
import React from "react";
import Image from "next/image";
import { FiUser } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import person from '../../assets/person.jpg'
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "ujjwal Sharma",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur exercitationem officiis ea enim vero. Molestias delectus, libero, ratione quaerat quam",
        position: "Co-founder Xcentic",
        imageSrc: person
    },
    {
        name: "ujjwal Sharma",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur exercitationem officiis ea enim vero. Molestias delectus, libero, ratione quaerat quam",
        position: "Co-founder Xcentic",
        imageSrc: person
    },
    {
        name: "ujjwal Sharma",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur exercitationem officiis ea enim vero. Molestias delectus, libero, ratione quaerat quam",
        position: "Co-founder Xcentic",
        imageSrc: person
    },
    {
        name: "ujjwal Sharma",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur exercitationem officiis ea enim vero. Molestias delectus, libero, ratione quaerat quam",
        position: "Co-founder Xcentic",
        imageSrc: person
    },
    {
        name: "ujjwal Sharma",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur exercitationem officiis ea enim vero. Molestias delectus, libero, ratione quaerat quam",
        position: "Co-founder Xcentic",
        imageSrc: person
    }
]

const Review = () => {
    return (
        <div className="w-full py-10">
            <div className="max-w-7xl mx-auto p-4">
                <div className="flex justify-center md:justify-start items-center h-fit">
                    <p className="flex justify-start items-center border-[1px] border-slate-300 px-3 rounded-lg text-xs  gap-1 mb-4 py-1 text-slate-700 font-semibold">
                        <FiUser size={12} /><span className="text-xs -translate-y-[1px]  font-semibold">Customers</span>
                    </p>
                </div>
                <h1 className="text-center md:text-left text-4xl md:text-5xl/tight   font-bold  capitalize mb-2">What people say</h1>
                <p className="text-sm md:text-lg text-center md:text-left text-slate-500 mb-6 md:mb-10">Here's what some of our customers say about our platfrom.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 overflow-hidden h-[40rem] p-4">
                    <TestimonialsColumn testimonials={testimonials} duration={15} />
                    <TestimonialsColumn
                        testimonials={testimonials}
                        className="hidden md:block"
                        duration={19}
                    />
                    <TestimonialsColumn
                        testimonials={testimonials}
                        className="hidden lg:block"
                        duration={17}
                    />

                </div>
            </div>
        </div>
    )
}


const TestimonialsColumn = (props: {
    className?: string;
    testimonials: typeof testimonials
    duration?: number;
}) => (
    <div className={props.className}>
        <motion.div
            animate={{
                translateY: '-50%',
            }}
            transition={{
                duration: props.duration || 10,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
            }}
            className="flex flex-col gap-6 pb-6"
        >
            {[...new Array(2)].fill(0).map((_, index) => (
                <React.Fragment key={index}>
                    {props.testimonials.map(
                        ({ text, imageSrc, name, position }, index) => (
                            <div className="w-full -h-[200px]  rounded-2xl shadow-reviwcard p-5 flex flex-col justify-between  gap-3">
                                <div className="flex gap-1 justify-start items-center">
                                    <FaStar className=" text-indigo-500" />
                                    <FaStar className=" text-indigo-500" />
                                    <FaStar className=" text-indigo-500" />
                                    <FaStar className=" text-indigo-500" />
                                    <FaStar className=" text-indigo-500" />
                                    <p className="text-sm">4.8</p>
                                </div>
                                <p className=" font-sans italic text-sm">
                                    {`"${text}"`}
                                </p>
                                <div className=" flex gap-4 items-center">
                                    <Image src={imageSrc} alt="" className="rounded-full h-10 w-10 overflow-hidden" />
                                    <div>
                                        <h2 className="text-xs font-bold mb-1">{name}</h2>
                                        <p className="text-xs font-light">{position}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </React.Fragment>
            ))}
        </motion.div>
    </div>
);

export default Review