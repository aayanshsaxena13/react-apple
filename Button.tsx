export function BaseButton({ children, onClick, color, type }: { children?: React.ReactNode; onClick?: () => void; color?: string; type?: any; }) {
    const colors: {
        blue: string;
        red: string;
        green: string;
    } = {
        blue: "bg-blue-500 px-2 py-px rounded-md text-white text-md m-2 transition-all duration-300 ease-in-out hover:bg-blue-600 active:bg-blue-400",
        red: "bg-red-500 px-2 py-px rounded-md text-white text-md m-2 transition-all duration-300 ease-in-out hover:bg-red-600 active:bg-red-400",
        green: "bg-emerald-500 px-2 py-px rounded-md text-white text-md m-2 transition-all duration-300 ease-in-out hover:bg-emerald-600 active:bg-emerald-400",
    };

    return (
        <>
            <button type={type} onClick={onClick} className={colors[color as keyof typeof colors] || colors.blue}>
                {children}
            </button>
        </>
    )
}