export default function Toggle({
    checked = false,
    onChange,
    label = "",
}: {
    checked: boolean;
    onChange: (val: boolean) => void;
    label?: string;
}) {
    return (
        <label className="flex items-center gap-3 cursor-pointer group">
            {label && <span className="text-white/80 text-sm font-medium">{label}</span>}

            {/* 1. Change relative to grid */}
            <div className="grid">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                />

                {/* 2. Assign both to grid-area [1/1] */}
                {/* Track */}
                <div className="col-start-1 row-start-1 w-16 h-6 bg-gray-800/30 border border-white/10 rounded-full transition-colors duration-300 peer-checked:bg-emerald-600" />

                {/* Glass Thumb */}
                <div className="
                    col-start-1 row-start-1 h-6 w-10 rounded-full
                    bg-linear-to-br from-white/40 to-transparent
                    backdrop-blur-3xl border-[0.5px] border-white/60
                    shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.4)]
                    transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    peer-checked:translate-x-6
                    group-active:scale-120
                " />
            </div>
        </label>
    );
}
