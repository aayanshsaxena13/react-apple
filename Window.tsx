import { useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const Window = ({ title = "Terminal — react-zsh", children }: { title?: string; children: React.ReactNode }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  // Use motion values for size so we can update them via dragging
  const width = useMotionValue(800);
  const height = useMotionValue(540);

  return (
    <motion.div
      // 1. Disable drag when maximized
      drag={!isMaximized}
      dragMomentum={false}
      // 2. Reset position to 0,0 instantly when maximizing to override drag transforms
      animate={{
        x: isMaximized ? 0 : undefined,
        y: isMaximized ? 0 : undefined,
        width: isMaximized ? '100vw' : width.get(),
        height: isMaximized ? '100vh' : height.get(),
        borderRadius: isMaximized ? 0 : 12,
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
      className={`flex flex-col bg-[#1e1e1e] border border-white/10 overflow-hidden relative ${isMaximized ? 'fixed inset-0 z-9999' : 'z-10'
        }`}
    >
      {/* Title Bar */}
      <div className="flex items-center h-8 px-2 bg-[#262626] border-b border-black/20 select-none shrink-0 cursor-grab active:cursor-grabbing">
        <div className="flex space-x-2 w-20">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10" />
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10 hover:brightness-110 transition-all"
          />
        </div>

        <div className="flex-1 text-center text-[13px] font-semibold text-[#a1a1a1] tracking-wide">
          {title}
        </div>
        <div className="w-20" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto scrollbar-hide antialiased">
        {children}
      </div>

      {/* Resize Handle */}
      {!isMaximized && (
        <motion.div
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          dragElastic={0}
          onDrag={(_, info) => {
            width.set(Math.max(400, width.get() + info.delta.x));
            height.set(Math.max(300, height.get() + info.delta.y));
          }}
          className="absolute bottom-0 right-0 cursor-nwse-resize z-50 bg-white/5 hover:bg-white/20 transition-colors"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
        />
      )}
    </motion.div>
  );
};

export default Window;