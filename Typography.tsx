export default function Typography({ type, children, color, alignment, margin = 2 }: {
    type?: string,
    children?: string,
    color?: string,
    alignment?: string,
    margin?: number,
}) {
    const colors = {
        "red": "text-red-300",
        "yellow": "text-yellow-300",
        "green": "text-emerald-300",
        "blue": "text-sky-300",
        "purple": "text-purple-300",
        "white": "text-white",
        "black": "text-black"
    }

    const align = {
        "center": "text-center",
        "right": "text-right",
        "left": "text-left",
    }

    return (
        <>
            {type === "heading" ? <h1 className={`${colors[color as keyof typeof colors]} ${align[alignment as keyof typeof align]} text-3xl font-extrabold m-${margin}`}>{children}</h1> : <p className={`${colors[color as keyof typeof colors]} ${align[alignment as keyof typeof align]} text-md font-medium m-${margin}`}>{children}</p>}
        </>
    )
}