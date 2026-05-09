import React, { type ReactNode } from 'react';

interface LiquidGlassProps {
    children?: ReactNode;
    borderRadius?: string;
    padding?: string;
    margin?: string;
    className?: string;
}

const LiquidGlass: React.FC<LiquidGlassProps> = ({
    children,
    borderRadius = '1rem',
    padding = '1.5rem',
    margin = '0',
    className = '',
}) => {
    return (
        <div
            className={`relative isolate overflow-hidden transition-all duration-500 ${className}`}
            style={{
                borderRadius,
                padding,
                margin,
                // The "Apple Premium" stack:
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(40px) saturate(200%) brightness(100%)',
                WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(100%)',
                boxShadow: `
                    0 0 0 1px rgba(255, 255, 255, 0.15) inset, 
                    0 1px 0 0 rgba(255, 255, 255, 0.3) inset,
                    0 20px 40px rgba(0, 0, 0, 0.2)
                `,
            }}
        >
            {/* Specular Liquid Sheen (The iOS "thick glass" light catch) */}
            <div 
                className="absolute inset-0 pointer-events-none z-0" 
                style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 40%, transparent 100%)',
                }} 
            />

            {/* Content Layer with high-contrast text rendering */}
            <div className="relative z-10 antialiased tracking-tight">
                {children}
            </div>
        </div>
    );
};

export default LiquidGlass;