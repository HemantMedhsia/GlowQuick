import React, { useState } from "react";
import { motion } from "motion/react";

const Button = ({ text, bgColor, textColor, onClick, className }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            className={`relative px-8 py-4 overflow-hidden font-semibold rounded-lg ${className}`}
            style={{ backgroundColor: bgColor }}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.00001 }} // Scale button on hover
            whileTap={{ scale: 0.9 }}   // Scale down on tap
        >
            {/* Animated background overlay */}
            <motion.div
                className="absolute inset-0 rounded-lg bg-white z-0 pointer-events-none"
                initial={{ x: '-100%' }}
                animate={{ x: isHovered ? '0%' : '-100%' }} // Move background based on hover state
                transition={{ duration: 0.5 }}
                style={{ zIndex: -1 }}
            />
            <span 
                className={`relative z-10 ${isHovered ? 'text-black' : textColor}`} // Change text color on hover
            >
                {text}
            </span>
        </motion.button>
    );
};

export default Button;
