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
        "mt-5 flex w-full flex-col items-center justify-center selection:text-screen selection:bg-mdark",
        className
      )}
    >
      <div className="shadow-border/50 relative h-9 w-64 overflow-hidden rounded-3xl">
        <Conicalgrad dura={7} />
        <Conicalgrad dura={5} />

        <button className="from-tp to-tp font-geist text-cta group absolute inset-0 z-10 mx-px my-px flex cursor-pointer items-center justify-around rounded-3xl bg-linear-to-r px-4 text-[12px] tracking-tight">
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
            className="text-display absolute right-2 z-10 mr-2 transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      <h1 className="from-mdark to-subtle font-instrument mx-auto mt-8 max-w-3xl bg-linear-to-b bg-clip-text text-center text-[45px] leading-14 font-medium tracking-normal text-transparent text-shadow-sm">
        Transform prompts into polished emails, from first draft to final send.
      </h1>

      <h2 className="text-subtle font-lora mx-auto mt-4 max-w-150 text-center text-[15px] text-shadow-sm">
        Mailrise is an AI-powered platform that helps you create professional
        emails and take them from draft to delivery, all in one workspace.
      </h2>

      <div className="mt-10 mr-2 flex cursor-pointer items-center justify-center gap-x-5">
        <div className="border-subtle/70 font-lora text-mdark/75 flex h-14.5 w-40.5 items-center justify-center rounded-xl border pl-1 text-[14px] font-semibold transition-shadow duration-200 ease-in hover:shadow-[inset_0px_0px_2px_0.5px_var(--color-subtle)]">
          <Play size={16} className="text-subtle/90 mr-1" /> Watch Demo
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
        "relative flex h-14 w-40.5 items-center justify-center rounded-md bg-[var(--color-focus)]",
        className
      )}
    >
      <span className="font-lora text-cta-button flex items-center justify-center text-[14px] font-medium">
        Sign up for free <ArrowRight size={17} className="ml-1" />
      </span>
      <div className="border-hover/30 hover:border-hover/90 absolute h-13 w-39 rounded-md border-1 transition-all duration-300 hover:shadow-[inset_0px_0px_3px_1px_var(--accent-inset)]"></div>
    </div>
  );
};

export const Conicalgrad = ({
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
