export default function Slider({
  minimumValue = 0,
  maximumValue = 100,
  value = 50,
  onValueChange,
  width
}: any) {
  // Calculate percentage for the blue fill
  const percentage = ((value - minimumValue) / (maximumValue - minimumValue)) * 100;

  return (
    <div className="py-6 px-4 bg-transparent" style={{ width: width || "100%" }}>
      <input
        type="range"
        min={minimumValue}
        max={maximumValue}
        value={value}
        onChange={(e) => onValueChange(Number(e.target.value))}
        style={{
          background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${percentage}%, rgba(55, 65, 81, 0.3) ${percentage}%, rgba(55, 65, 81, 0.3) 100%)`
        }}
        className="
          w-full h-2 rounded-full appearance-none cursor-pointer outline-none transition-all duration-300 ease-in-out
          
          /* iOS 26 Refractive Glass Thumb */
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-6
          [&::-webkit-slider-thumb]:w-10
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-linear-to-br
          [&::-webkit-slider-thumb]:from-white/40
          [&::-webkit-slider-thumb]:to-transparent
          [&::-webkit-slider-thumb]:backdrop-blur-3xl
          [&::-webkit-slider-thumb]:border-[0.5px]
          [&::-webkit-slider-thumb]:border-white/60
          [&::-webkit-slider-thumb]:shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_4px_4px_rgba(255,255,255,0.4),inset_0_-2px_8px_rgba(255,255,255,0.1),0_0_15px_rgba(255,255,255,0.1)]
          [&::-webkit-slider-thumb]:transition-transform
          [&::-webkit-slider-thumb]:duration-300
          active:[&::-webkit-slider-thumb]:scale-120
          hover:[&::-webkit-slider-thumb]:from-white/50
        "
      />
    </div>
  );
}
