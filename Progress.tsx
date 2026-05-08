import React from 'react';

export const CircularProgress: React.FC<CircularProgressProps> = ({
    progress,
    size = 40,
    strokeWidth = 3,
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

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
