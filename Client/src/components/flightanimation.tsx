import React from "react";
import { cn } from "../lib/utils";
import { motion } from "motion/react";

export const Flightanimation = ({
  className,
  props,
}: {
  className?: string;
  props?:string;

}): React.JSX.Element => {
  const flightpath = props
   ;
  return (
    <div className={cn("", className)}>
      <svg
        width="493"
        height="617"
        viewBox="-50 -50 600 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=""
      >
        <path
          d={flightpath}
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeDasharray="8 8"
          id="flightroute"
          className="text-subtle"
        />
        <motion.svg
          style={{
            offsetPath: `path("${flightpath}")`,
            offsetRotate: "auto 90deg",
          }}
          animate={{ offsetDistance: "100%",scale:0.8 }}
          initial={{ offsetDistance: "0%" , scale:0.8 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
          className="drop-shadow-[0_0_0px_var(--color-glow)]"
        >
          <path d="M 0 -35 L -26 25 L 0 12 Z" fill="var(--color-bright)" />

          {/* 🌑 2. Right Wing (Shadow Side) */}
          <path d="M 0 -35 L 0 12 L 26 25 Z" fill="var(--color-focus)" />

          {/* ⚡ 3. Center Fold Spine (Crisp White Crease!) */}
          <line
            x1="0"
            y1="-35"
            x2="0"
            y2="12"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.9"
          />
        </motion.svg>
      </svg>
    </div>
  );
};
