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
          <Textarea className="" />
        </div>
        <div className="col-span-1 h-full">
          <RightCell className="bg-hover/40 h-[98%] w-[96%] rounded-tr-xl rounded-br-xl" />
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

const Textarea = ({ className }: { className?: string }) => {
  const [promptvalue, setpromptValue] = useState<string>(
    "Can you please refine this email draft and highlight the main and agenda for tomorrow's meeting?"
  );

  return (
    <div
      className={cn(
        "bg-hover/40 absolute bottom-2 left-1 flex h-full max-h-34 w-[99%] flex-col items-center justify-center rounded-bl-md",
        className
      )}
    >
      <textarea
        name="promptarea"
        value={promptvalue}
        rows={2}
        onChange={(e) => setpromptValue(e.target.value)}
        placeholder="Describe your email prompt..."
        className="text-glow h-full w-full resize-none overflow-hidden px-4 py-4 text-[14.5px] outline-none"
      >
        <span className="animate-pulse">|</span>
      </textarea>
      <div className="relative mb-2 flex h-20 w-[18%] translate-x-4/2 cursor-pointer items-end justify-end overflow-hidden rounded-md p-[1px] shadow-sm">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeIn",
            repeatType: "reverse",
          }}
          className="absolute -inset-[200%] top-1 rounded-md bg-[conic-gradient(from_0deg,transparent_0_300deg,var(--border-focus)_360deg)] opacity-90"
        />

        <div className="bg-card relative z-10 flex h-full w-full items-end justify-end gap-x-2 rounded-sm px-5 pt-[33px]">
          <SendHorizontal size={22} className="text-focus mb-2" />
          <span className="text-subtle/40 mb-1.5 w-[1px]">|</span>
          <ChevronDown size={22} className="text-focus mb-2" />
        </div>
      </div>
    </div>
  );
};

const RightCell = ({ className }: { className?: string }) => {
  const date = new Date();
  const time1 = date.toLocaleTimeString();
  const date1 = date.toLocaleDateString();
  const day = date.toLocaleDateString("en-Us", {
    weekday: "long",
  });

  const [Time, setTime] = useState<string>("");

  function counttime() {
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(time1);
      }, 1000);

      return () => clearInterval(timer);
    }, [Time]);
  }

  counttime();

  return (
    <div className={cn("relative mx-0.5 my-1", className)}>
      <div className="flex h-30 flex-col items-end justify-start">
        <span className="text-body mt-3 mr-2 mb-2 flex h-10 items-center justify-end text-2xl">
          {date1}
        </span>
        <span className="text-md text-subtle mr-3 mb-2 flex h-8 items-center justify-end">
          {time1}
        </span>
        <span className="text-md text-subtle mr-3 mb-2 flex h-8 items-center justify-end">
          {day}
        </span>
      </div>

      <Minicell className="border-px bg-card border-dashboard/20 relative -bottom-1 left-6 h-99 w-60 rounded-md border" />
    </div>
  );
};

const Minicell = ({ className }: { className?: string }) => {
  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeIn",
          repeatType: "reverse",
        }}
        className="absolute -inset-[20%] top-1 z-1 rounded-md bg-[conic-gradient(from_0deg,transparent_0_300deg,var(--border-focus)_360deg)] opacity-90"
      />
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeIn",
          repeatType: "reverse",
        }}
        className="absolute -inset-[20%] top-1 z-1 rounded-md bg-[conic-gradient(from_0deg,transparent_0_300deg,var(--border-focus)_360deg)] opacity-90"
      />
      <Schedule className="bg-hover absolute inset-0 z-10 m-auto h-[99.5%] w-[99.5%] rounded-md" />
    </div>
  );
};


