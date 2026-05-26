import { motion } from "framer-motion";

export const CircularProgress = ({
    value = 50,
    size = 40,
    strokeWidth = 3,
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg
                width={size}
                height={size}
                className="-rotate-90">
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    className="text-black/10 dark:text-white/20"
                />
                {/* Progress (The blue filling circle) */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    stroke="#007AFF" // macOS System Blue
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    style={{
                        strokeDashoffset: offset,
                        transition: 'stroke-dashoffset 0.3s ease-out',
                        strokeLinecap: 'round',
                    }}
                />
            </svg>
        </div>
    );
};

export const LinearProgress = ({
    value = 50,
    width = 200,
}) => {
    return (
        <div
            className="bg-slate-500/40 h-2 m-2 relative overflow-hidden rounded-full"
            style={{ width }}
        >
            <motion.div
                className="bg-blue-500 h-2 absolute left-0"
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{
                    type: "spring",
                    stiffness: 300, // Higher stiffness for snap
                    damping: 30,    // Higher damping to prevent excessive shaking
                    mass: 0.8       // Lighter mass for agility
                }}
            />
        </div>
    );
}
