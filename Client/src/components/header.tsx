import React from "react";
import { cn } from "../lib/utils";
import { ArrowRight, Send } from "lucide-react";

export const Header = ({
  className,
}: {
  className: string;
}): React.JSX.Element => {
  return (
    <div
      className={cn(
        "mt-5 flex w-full flex-col items-center justify-center ",
        className
      )}
    >
      <button className="bg-glow/95 cursor-pointer text-card font-geist group mx-auto flex h-8 w-60 items-center justify-around rounded-3xl px-4 text-[12px] tracking-tight  hover:shadow-border transition-shadow duration-200">
        {" "}
        
        <Send size={10} className="mr-1 text-primary"/>
        <span className="flex items-center justify-center text-shadow-sm" > Mailrise</span>
        <span>|</span>
        <span className="flex items-center justify-center text-shadow-sm tracking-normal">YOUR Workspace</span>
        <ArrowRight
          size={15}
          className="text-screen transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

      <h1 className="selection:text-subtle selection:bg-mdark from-mdark to-subtle mx-auto mt-8 max-w-3xl bg-linear-to-b bg-clip-text text-center text-[45px] leading-14 tracking-tight text-transparent text-shadow-sm font-medium">
        Transform prompts into polished emails, from first draft to final send.
      </h1>

      <h2 className="text-subtle mx-auto mt-4 max-w-150 text-center text-[15px] text-shadow-sm">
        Mailrise is an AI-powered platform that helps you create professional
        emails and take them from draft to delivery, all in one workspace.
      </h2>
    </div>
  );
};
