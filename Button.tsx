export default function Button({ children, onClick, color, type, variant }: { children?: React.ReactNode; onClick?: () => void; color?: string; type?: any; variant?: "capsule" | "regular"; }) {
    const colors: {
        blue: string;
        red: string;
        green: string;
    } = {
        blue: variant === "regular" ? "bg-blue-500 px-2 py-1 rounded-xl text-white text-md m-2 transition-all duration-300 ease-in-out hover:bg-blue-600 active:bg-blue-400" : "m-2 px-2 py-1 text-blue-500 text-md m-2 transition-all duration-300 ease-in-out bg-slate-800 rounded-[16px] hover:bg-slate-700 active:bg-slate-600",
        red: variant === "regular" ? "bg-red-500 px-2 py-1 rounded-xl text-white text-md m-2 transition-all duration-300 ease-in-out hover:bg-red-600 active:bg-red-400" : "m-2 px-2 py-1 text-red-500 text-md m-2 transition-all duration-300 ease-in-out bg-slate-800 rounded-[16px] hover:bg-slate-700 active:bg-slate-600",
        green: variant === "regular" ? "bg-emerald-500 px-2 py-1 rounded-xl text-white text-md m-2 transition-all duration-300 ease-in-out hover:bg-emerald-600 active:bg-emerald-400" : "m-2 px-2 py-px text-green-500 text-md m-2 transition-all duration-300 ease-in-out bg-slate-800 rounded-[16px] hover:bg-slate-700 active:bg-slate-600",
    };

    return (
        <>
            <button type={type} onClick={onClick} className={colors[color as keyof typeof colors] || colors.blue}>
                {children}
            </button>
        </>
    )
}