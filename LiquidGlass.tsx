export default function LiquidGlass({ children }: any) {
  return (
    <div className="relative m-2 h-fit w-fit overflow-hidden rounded-xl border border-white/20 border-l-white/40 border-t-white/40 bg-white/5 p-2 shadow-[0_4px_30px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.3)] backdrop-blur-xl">
      {children}
    </div>
  );
}