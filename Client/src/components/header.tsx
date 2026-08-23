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

      
    </div>
  );
};


