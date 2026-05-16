import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface ReusableTabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  /* Reduced default constraint from max-w-90 down to max-w-72 (288px) for micro scaling */
  maxWidthClassName?: string;
}

export default function Tabs({
  tabs,
  defaultTabId,
  maxWidthClassName = "max-w-72"
}: ReusableTabsProps) {
  if (!tabs || tabs.length === 0) return null;

  const [activeIndex, setActiveIndex] = useState<number>(() => {
    const initialIndex = tabs.findIndex(t => t.id === defaultTabId);
    return initialIndex !== -1 ? initialIndex : 0;
  });

  const [prevIndex, setPrevIndex] = useState<number>(activeIndex);

  const handleTabChange = (index: number) => {
    if (index !== activeIndex) {
      setPrevIndex(activeIndex);
      setActiveIndex(index);
    }
  };

  const activeTabId = tabs[activeIndex].id;
  const activeTabContent = tabs[activeIndex].content;

  const travelDirection = activeIndex - prevIndex;

  return (
    <div className="flex w-full flex-col items-center gap-4 m-2">
      {/* --- Tab Navigation Controller (Shrunk dimensions) --- */}
      <div className={`relative flex w-full ${maxWidthClassName} items-center gap-0.5 rounded-2xl border border-white/5 bg-white/5 p-0.5 backdrop-blur-2xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]`}>
        {tabs.map((tab, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(idx)}
              /* Decreased py-1.5 to py-1 and text size to text-[12px] to trim the visual footprint */
              className="relative flex-1 rounded-2xl py-1 text-center text-[12px] font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {/* Liquid Glass Pill Indicator */}
              {isActive && (
                <motion.div
                  layoutId="liquid-pill"
                  animate={{
                    scaleX: [1, 1.18, 1],
                    scaleY: [1, 1.12, 1],
                    transformOrigin: travelDirection >= 0 ? ["left center", "right center"] : ["right center", "left center"]
                  }}
                  /* Updated radius to match compressed container profile */
                  className="absolute inset-0 rounded-2xl border border-white/10 bg-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_0.5px_0.5px_rgba(255,255,255,0.15)]"
                  transition={{
                    layout: {
                      type: "spring",
                      stiffness: 380,
                      damping: 25,
                      mass: 0.65,
                    },
                    scaleX: {
                      duration: 0.26,
                      ease: "easeInOut",
                    },
                    scaleY: {
                      duration: 0.24,
                      ease: "easeOut",
                    }
                  }}
                />
              )}

              {/* Tab Label Text */}
              <span
                className={`relative z-10 block transition-colors duration-200 ${isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                  }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* --- Animated Router View Container (Maintains unconstrained full width) --- */}
      <div className="w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabId}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="w-full"
          >
            {activeTabContent}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}