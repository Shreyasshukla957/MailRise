import React from "react";
import { cn } from "../lib/utils";
import { ArrowRight, Send, Play, MoveUpRight } from "lucide-react";
import { div } from "motion/react-client";
import { motion } from "motion/react";

export const Header = ({
  className,
}: {
  className: string;
}): React.JSX.Element => {
  return (
    <div
      className={cn(
        "mt-5 flex w-full flex-col items-center justify-center",
        className
      )}
    >
      <div className="shadow-border/50 relative h-9 w-64 overflow-hidden rounded-3xl">
        <Conicalgrad dura={7} />
        <Conicalgrad dura={5} />

        <button className="from-tp to-tp font-geist group absolute inset-0 z-10 mx-px my-px flex cursor-pointer items-center justify-around rounded-3xl bg-linear-to-r px-4 text-[12px] tracking-tight text-slate-700 transition-shadow duration-200 dark:text-slate-200">
          {" "}
          <Send size={10} className="text-primary" />
          <span className="flex items-center justify-center text-shadow-sm">
            {" "}
            Mailrise
          </span>
          <span>|</span>
          <span className="mr-4 flex items-center justify-start tracking-normal text-shadow-sm">
            YOUR Workspace
          </span>
          <ArrowRight
            size={15}
            className="text-subtle absolute right-2 z-10 mr-2 transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      <h1 className="selection:text-subtle selection:bg-mdark from-mdark to-subtle font-instrument mx-auto mt-8 max-w-3xl bg-linear-to-b bg-clip-text text-center text-[45px] leading-14 font-medium tracking-normal text-transparent text-shadow-sm">
        Transform prompts into polished emails, from first draft to final send.
      </h1>

      <h2 className="text-subtle font-display mx-auto mt-4 max-w-150 text-center text-[15px] text-shadow-sm">
        Mailrise is an AI-powered platform that helps you create professional
        emails and take them from draft to delivery, all in one workspace.
      </h2>

      <div className="mt-10 flex cursor-pointer items-center justify-center gap-x-5">
        <div className="border-subtle flex h-12 w-35 items-center justify-center rounded-md border shadow-[inset_0px_0px_2px_0.5px_var(--color-subtle)] ">
          <span className="text-headline/50 border-subtle bg-card flex h-[90%] w-[95%] items-center justify-center rounded-md border text-xs shadow-xs ">
            <Play size={12} className="text-subtle/90 mx-1" /> Watch Demo
          </span>
        </div>

        <Ctabutton className="" />
      </div>
    </div>
  );
};

export const Ctabutton = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative flex h-12 w-34 items-center justify-center rounded-md bg-[var(--border-insetbutton)]",
        className
      )}
    >
      <span className="font-hanken flex items-center justify-center text-[13px] font-medium text-white">
        Sign up for free <ArrowRight size={17} className="ml-1" />
      </span>
      <div className="absolute inset-y-0 top-0.5 right-0.5 bottom-0.5 left-0.5 h-11 w-33 rounded-md border-1 border-(--color-diminset) transition-all duration-400 hover:border-(--color-inset) hover:shadow-[inset_0px_0px_3px_1px_var(--accent-inset)]"></div>
    </div>
  );
};

const Conicalgrad = ({
  className,
  dura = 3,
}: {
  className?: string;
  dura?: number;
}) => {
  return (
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{
        repeat: Infinity,
        duration: dura,
        ease: "easeIn",
        repeatType: "reverse",
      }}
      className={cn(
        "absolute -inset-[200%] z-1 rounded-md bg-[conic-gradient(from_0deg,transparent_0_300deg,var(--border-focus)_360deg)] opacity-90",
        className
      )}
    />
  );
};
