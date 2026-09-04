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

export const Svgborder = ({
  className,
  delay = 0,
  dura = 2,
  repeatdelay = 0,
}: Alldatatype) => {
  return (
    <div className={cn(" ", className)}>
      <svg
        width="311"
        height="101"
        viewBox="0 0 311 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 100.5V16.5A16 16 0 0 1 16.5 0.5H310.5"
          stroke="var(--color-subtle)"
          strokeWidth="0.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <motion.path
          d="M0.5 65.5V16.5A16 16 0 0 1 16.5 0.5H276.5"
          strokeWidth="0.3"
          stroke="var(--color-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray="0.15 0.85"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -1 }}
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

export const Svglast1 = ({
  className,
  delay = 0,
  dura = 2,
  repeatdelay = 0,
}: Alldatatype) => {
  return (
    <div className={cn("absolute top-99 right-98 rotate-180", className)}>
      <svg
        width="311"
        height="101"
        viewBox="0 0 311 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 100.5V16.5A16 16 0 0 1 16.5 0.5H310.5"
          stroke="var(--color-subtle)"
          strokeWidth="0.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <motion.path
          d="M0.5 65.5V16.5A16 16 0 0 1 16.5 0.5H276.5"
          strokeWidth="0.3"
          stroke="var(--color-green)"
          strokeLinecap="round"
          strokeLinejoin="round"
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

export const Svglast2 = ({
  className,
  delay = 0,
  dura = 3,
  repeatdelay = 0,
}: Alldatatype) => {
  return (
    <div className={cn("absolute top-75 left-128.5 rotate-180", className)}>
      <svg
        width="311"
        height="101"
        viewBox="0 0 311 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 0.5V84.5A16 16 0 0 0 16.5 100.5H310.5"
          stroke="var(--color-subtle)"
          strokeWidth="0.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <motion.path
          d="M0.5 35.5V84.5A16 16 0 0 0 16.5 100.5H276.5"
          strokeWidth="0.3"
          stroke="var(--color-yellow)"
          strokeLinecap="round"
          strokeLinejoin="round"
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

export const UNDERSTAND = ({ className }: { className?: string }) => {
  return (
    <div className={cn("", className)}>
      <svg
      strokeWidth="0.5"
      strokeDasharray="8 8"
        width="113"
        height="154"
        viewBox="0 0 113 154"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="var(--color-subtle)"
      >
        <path
          d="M80.6068 0.491577C80.6068 0.491577 0.499987 15.1404 0.5 57.5843C0.500013 99.5327 111.5 146.604 111.5 146.604M89 152.992L111.5 146.604L101.5 121.492"
          
        />
      </svg>
    </div>
  );
};
