export default function Input({ type, placeholder, value, onChange }: {
    type?: any;
    placeholder?: string;
    value?: string;
    onChange?: (e: any) => void;
}) {
    return (
        <>
            <input className="text-white border-2 border-slate-500/40 px-2 py-px rounded-sm ring-blue-500 transition-all duration-300 ease-in-out outline-0 focus:ring-3 text-md text-medium m-2" type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </>
    );
}