import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface ReusableTabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  tabWidthClassName?: string;
}

export let setTab: any;

export default function Tabs({
  tabs,
  defaultTabId,
  tabWidthClassName = "w-20"
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
  setTab = handleTabChange;

  const travelDirection = activeIndex - prevIndex;

  return (
    <div className="flex flex-col items-center gap-4 m-2">
      {/* --- Tab Navigation Controller --- */}
      <div className="relative inline-flex items-center gap-0.5 rounded-2xl border border-white/5 bg-white/5 p-0.5 backdrop-blur-2xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
        {tabs.map((tab, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(idx)}
              className={`relative ${tabWidthClassName} shrink-0 rounded-2xl py-1 text-center text-[12px] font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none`}
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
                className={`relative z-10 block truncate px-1 transition-colors duration-200 ${isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                  }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* --- Persistent View Container (Keeps State Alive) --- */}
      <div className="relative w-full overflow-hidden">
        {tabs.map((tab, idx) => {
          const isActive = activeIndex === idx;
          return (
            <motion.div
              key={tab.id}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 4,
                pointerEvents: isActive ? "auto" : "none"
              }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              className={`${isActive ? "relative block" : "absolute inset-0 hidden pointer-events-none"} w-full`}
            >
              {tab.content}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}