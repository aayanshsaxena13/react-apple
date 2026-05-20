import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import Typography from "./Typography";

export default function Alert({ children }: { children?: any }) {
    const [isVisible, setIsVisible] = useState(true);

    return (
        /* 1. AnimatePresence must wrap the conditional rendering block */
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    /* 2. Spring configurations for physics-based entry */
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    initial={{ opacity: 0, scale: 0.85, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    /* 3. Smooth fade-and-shrink exit animation */
                    exit={{ opacity: 0, scale: 0.9, y: 10, transition: { duration: 0.15 } }}
                    /* Note: Removed transition-all to prevent Tailwind from conflicting with Framer Motion */
                    className="flex flex-col flex-wrap p-2 m-2 rounded-2xl bg-white/5 w-fit transition-colors duration-300 ease-in-out hover:bg-white/10"
                >
                    <Typography margin={2} alignment="center" type="paragraph" color="white">
                        {children}
                    </Typography>
                    <button 
                        onClick={() => setIsVisible(false)} /* 4. Completely removes it from DOM */
                        className="self-center bg-white/5 transition-all duration-300 ease-in-out hover:bg-white/10 active:bg-white/1 w-fit backdrop-blur-md border border-white/5 text-white px-2 py-1 rounded-2xl shadow-xl m-2"
                    >
                        OK
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
