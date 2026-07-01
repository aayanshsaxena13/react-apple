export default function ColorPicker({
    setColor
}: {
    setColor?: any;
}) {
    const red = [
        "bg-red-500", "bg-red-300", "bg-red-100",
    ];
    const orange = [
        "bg-orange-500", "bg-orange-300", "bg-orange-100",
    ];
    const yellow = [
        "bg-yellow-500", "bg-yellow-300", "bg-yellow-100",
    ];
    const green = [
        "bg-green-500", "bg-green-300", "bg-green-100",
    ];
    const sky = [
        "bg-sky-500", "bg-sky-300", "bg-sky-100",
    ];
    const blue = [
        "bg-blue-700", "bg-blue-300", "bg-blue-100",
    ];
    const purple = [
        "bg-purple-500", "bg-purple-300", "bg-purple-100",
    ];
    const pink = [
        "bg-pink-500", "bg-pink-300", "bg-pink-100",
    ];
    const dark = [
        "bg-black", "bg-slate-500", "bg-slate-300",
    ];
    return (
        <div className="flex flex-row justify-center w-fit p-2 m-2 rounded-md bg-linear-to-br from-slate-600/30 via-slate-400/30 to-slate-200/30">
            <div className="flex flex-col">
                {red.map((shade, index) => (
                    <button onClick={() => setColor(shade)} className={`${shade} transition-all duration-300 ease-in-out p-2 active:bg-white`} key={index} />
                ))}
            </div>
            <div className="flex flex-col">
                {orange.map((shade, index) => (
                    <button onClick={() => setColor(shade)} className={`${shade} transition-all duration-300 ease-in-out p-2 active:bg-white`} key={index} />
                ))}
            </div>
            <div className="flex flex-col">
                {yellow.map((shade, index) => (
                    <button onClick={() => setColor(shade)} className={`${shade} transition-all duration-300 ease-in-out p-2 active:bg-white`} key={index} />
                ))}
            </div>
            <div className="flex flex-col">
                {green.map((shade, index) => (
                    <button onClick={() => setColor(shade)} className={`${shade} transition-all duration-300 ease-in-out p-2 active:bg-white`} key={index} />
                ))}
            </div>
            <div className="flex flex-col">
                {sky.map((shade, index) => (
                    <button onClick={() => setColor(shade)} className={`${shade} transition-all duration-300 ease-in-out p-2 active:bg-white`} key={index} />
                ))}
            </div>
            <div className="flex flex-col">
                {blue.map((shade, index) => (
                    <button onClick={() => setColor(shade)} className={`${shade} transition-all duration-300 ease-in-out p-2 active:bg-white`} key={index} />
                ))}
            </div>
            <div className="flex flex-col">
                {purple.map((shade, index) => (
                    <button onClick={() => setColor(shade)} className={`${shade} transition-all duration-300 ease-in-out p-2 active:bg-white`} key={index} />
                ))}
            </div>
            <div className="flex flex-col">
                {pink.map((shade, index) => (
                    <button onClick={() => setColor(shade)} className={`${shade} transition-all duration-300 ease-in-out p-2 active:bg-white`} key={index} />
                ))}
            </div>
            <div className="flex flex-col">
                {dark.map((shade, index) => (
                    <button onClick={() => setColor(shade)} className={`${shade} transition-all duration-300 ease-in-out p-2 active:bg-white`} key={index} />
                ))}
            </div>
        </div>
    );
}