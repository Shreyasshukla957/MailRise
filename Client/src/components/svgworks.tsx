import React from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

interface Alldatatype {
  hvalue?: string;
  dura?: number;
  delay?: number;
  className?: string;
  repeatdelay?: number;
}

export const Svgworks = ({ className, ...Alldata }: Alldatatype) => {
  return (
    <div
      className={cn(
        "bg-cta relative mt-100 flex rotate-270 items-center justify-center",
        className
      )}
    >
      <SvgLine1 className="absolute top-30 z-10" {...Alldata} />
    </div>
  );
};

export const SvgLine1 = ({
  className,
  delay = 0,
  dura = 2,
  repeatdelay = 0,
}: Alldatatype) => {
  return (
    <div className={cn("rotate-90", className)}>
      <svg
        width="327"
        height="1"
        viewBox="0 0 327 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0.5H327"
          stroke="var(--color-subtle)"
          strokeWidth="0.3"
          strokeLinecap="round"
        />

        <motion.path
          d="M0 0.5H327"
          strokeWidth="0.3"
          stroke="var(--color-red)"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="0.15 0.85"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: 1 }}
          transition={{
            repeat: Infinity,
            duration: dura,
            ease: "linear",
            delay,
            repeatDelay: repeatdelay,
            repeatType: "loop",
          }}
        />
      </svg>
    </div>
  );
};


