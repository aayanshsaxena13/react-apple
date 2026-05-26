import { type ReactNode } from "react"

export default function Bubble({ children, color, role }: {
    children?: ReactNode,
    color?: string,
    role?: string,
}) {
    const colorsMap = {
        "red": "bg-red-500",
        "blue": "bg-blue-500",
        "green": "bg-emerald-500",
        "pink": "bg-pink-500",
        "purple": "bg-purple-500",
        "yellow": "bg-amber-500",
        "sky": "bg-sky-500",
        "gray": "bg-gray-200"
    };

    return (
        <>
            {role === "user-sent" ? <div className={`${colorsMap[color as keyof typeof colorsMap]} rounded-tl-lg py-1 px-2 rounded-b-lg min-w-28 max-w-100 m-2 shadow-sm shadow-slate-600/45`}>
                {children}
            </div> : <div className={`${colorsMap[color as keyof typeof colorsMap]} rounded-tr-lg py-1 px-2 rounded-b-lg min-w-28 max-w-100 m-2 shadow-sm shadow-slate-600/45`}>
                {children}
            </div>}
        </>
    )
}