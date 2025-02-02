"use client"
import { motion, useScroll } from "framer-motion";

const Progress = () => {
    const { scrollYProgress } = useScroll();
    return (
        <div style={{ position: "fixed", top: 0, left: 0, width: "50px", height: "100vh" }}>
        <svg
            viewBox="0 0 10 100"
            style={{
                width: "100%",
                height: "100%",
            }}
        >
            {/* Vertical Line */}
            <motion.line
                x1="5"
                y1="0"
                x2="5"
                y2="100"
                stroke="#000000"
                strokeWidth="2"
                strokeDasharray={5}
                strokeLinecap="round"
                strokeDashoffset={10}
                style={{
                    pathLength: scrollYProgress,
                }}
            />
        </svg>
    </div>
    );
};


export default Progress;
