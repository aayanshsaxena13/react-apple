import { useState } from "react";

export default function Toggle({
    checked = false,
    onChange,
    label = "",
}: {
    checked: boolean;
    onChange: (val: boolean) => void;
    label?: string;
}) {
    const [dragging, setDragging] = useState(false);

    return (
        <label
            className="flex items-center gap-3 cursor-pointer group m-2 select-none"
            onMouseUp={() => setDragging(false)}
            onMouseLeave={() => setDragging(false)}
            onTouchEnd={() => setDragging(false)}
        >
            {label && (
                <span className="text-white/80 text-sm font-medium">
                    {label}
                </span>
            )}

            <div className="grid relative">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                />

                {/* Track */}
                <div
                    className="
                        col-start-1 row-start-1
                        w-16 h-6 rounded-full
                        bg-gray-800/30 border border-white/10
                        transition-all duration-300
                        peer-checked:bg-emerald-600
                        backdrop-blur-xl
                    "
                />

                {/* Thumb */}
                <div
                    onMouseDown={() => setDragging(true)}
                    onTouchStart={() => setDragging(true)}
                    className={`
                        col-start-1 row-start-1
                        h-6 w-10 rounded-full
                        bg-linear-to-br from-white/40 to-white/5
                        backdrop-blur-3xl
                        border-[0.5px] border-white/60
                        shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.4)]
                        transition-all duration-300
                        ease-[cubic-bezier(0.34,1.56,0.64,1)]
                        peer-checked:translate-x-6

                        before:absolute
                        before:inset-0
                        before:rounded-full
                        before:bg-white/10
                        before:blur-xs
                        before:opacity-0
                        before:transition-opacity
                    ${dragging
                            ? `
                            scale-105
                            before:opacity-100
                            shadow-[0_4px_12px_rgba(255,255,255,0.1),0_6px_14px_rgba(0,0,0,0.2)]
                            backdrop-blur-[32px]
                        `
                            : "scale-100"
                        }
                    `}
                    style={{
                        transformOrigin: checked ? "right center" : "left center",
                    }}
                />
            </div>
        </label>
    );
}