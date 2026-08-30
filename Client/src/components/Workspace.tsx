import { useEffect } from "react";
import { SendHorizontal, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";
import { GetStarted } from "./navbar";
import { AnimatePresence, motion } from "motion/react";

export const Workspace = ({
  className,
  isFront,
}: {
  className?: string;
  isFront: Boolean;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={
          isFront ? { scale: 0.99, opacity: 0, filter: "blur(8px)" } : false
        }
        animate={
          isFront ? { scale: 1, opacity: 1, filter: "blur(0px)" } : false
        }
        transition={{ duration: 0.34 }}
        className={cn(
          "hover:ring-dashboard/20 grid h-full grid-cols-4 rounded-xl ring ring-transparent transition-all duration-300 ease-in"
        )}
      >
        <div className="border-dashboard/10 relative col-span-3 h-full rounded-tl-xl rounded-bl-xl border">
          <EmailEditor className="" />
         
        </div>
       
      </motion.div>
    </AnimatePresence>
  );
};

const EmailEditor = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "bg-hover/40 font-lora absolute mx-auto mt-1 ml-1 h-[72%] w-[99%] rounded-tl-xl",
        className
      )}
    >
      <div className="font-geistmono flex h-full flex-col gap-y-2 px-6 py-4 text-xs select-none">
        <div className="border-default/40 flex items-center justify-between border-b pb-2.5">
          <div className="flex items-center gap-x-3">
            <span className="text-subtle w-14 font-medium">To:</span>
            <span className="text-headline/80 font-semibold">
              sarah@stripe.com
            </span>
          </div>

          <span className="text-focus hover:border-focus/20 hover:bg-focus/10 cursor-pointer rounded-full border border-transparent px-2.5 py-0.5 text-[10px] font-medium transition-colors duration-100">
            Recipient
          </span>
        </div>

        <div className="border-default/40 flex items-center justify-between border-b pb-2.5">
          <div className="flex items-center gap-x-3">
            <span className="text-subtle w-14 font-medium">From:</span>
            <span className="text-body font-medium">andrew@stripe.com</span>
          </div>

          <span className="text-subtle hover:border-default/50 hover:bg-subtle/10 cursor-pointer rounded-full border border-transparent px-2.5 py-0.5 text-[10px] font-medium transition-all duration-200">
            Sender
          </span>
        </div>

        <div className="border-default/40 flex items-center gap-x-3 border-b pb-2.5">
          <span className="text-subtle w-14 font-medium">Subject:</span>
          <span className="text-headline/80 truncate font-semibold tracking-tight">
            Confirmed: Q3 API Roadmap & Meeting Agenda
          </span>
        </div>

        <div className="flex flex-1 items-start gap-x-3 pt-1">
          <span className="text-subtle w-14 shrink-0 font-medium select-none">
            Body:
          </span>

          <div className="text-headline/80 font-geist flex flex-1 flex-col gap-y-1.5 text-xs leading-relaxed">
            <p className="text-headline font-semibold">Hi Sarah,</p>
            <p className="text-headline/78 font-lora">
              I wanted to follow up regarding our meeting tomorrow at 2:00 PM to
              discuss the Q3 API roadmap. I've gathered our preliminary
              technical questions and integration milestones ahead of our call.
              Please let me know if the time still works for you or if we need
              to adjust the agenda.
            </p>
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <span className="text-md text-subtle">Drafting...</span>
          <GetStarted
            className="mr-2 flex items-end justify-end"
            label="Send"
          />
        </div>
      </div>
    </div>
  );
};


