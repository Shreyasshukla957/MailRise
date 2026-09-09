import React from "react";
import { cn } from "../lib/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useGetStartedNavigation } from "../hooks/useGetStartedNavigation";

export const Header = ({
  className,
  children,
}: {
  className: string;
  children?: React.ReactNode;
}): React.JSX.Element => {
  const handleGetStarted = useGetStartedNavigation();

  return (
    <section
      id="introduction"
      className={cn(
        "selection:text-screen selection:bg-mdark relative mt-5 flex w-full scroll-mt-24 flex-col items-center text-center",
        className
      )}
    >
      {children}
      <button
        type="button"
        onClick={handleGetStarted}
        className="border-default bg-card/50 text-body hover:border-focus/50 hover:text-headline focus-visible:ring-focus group focus-visible:ring-offset-screen inline-flex items-center gap-1.5 rounded-md border px-4.5 py-[4.5px] font-sans text-xs font-medium transition-[border-color,box-shadow] duration-500 ease-in-out hover:shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        <img
          src="/image.webp"
          alt=""
          className="size-[19px] rounded-[3px]"
        />
        Enter your email workspace
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </button>

      <motion.h1
        id="landing-headline"
        className="font-instrument text-headline mt-7 max-w-3xl text-[42px] leading-[1.08] font-normal tracking-[-0.025em] text-balance sm:mt-8 sm:text-[56px] lg:text-[64px]"
        initial={{ y: 28, opacity: 0, filter: "blur(8px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.12, ease: "linear" }}
      >
        Polished{" "}
        <span className="bg-focus/95 inline-block mask-x-from-98% px-1.5 text-white select-none dark:text-zinc-950">
          emails,
        </span>
        {" from "}
        <span className="text-mdark/75 italic sm:block">
          first draft to final send.
        </span>
      </motion.h1>

      <p className="text-mdark/65 mt-5 max-w-lg font-sans text-[15px] leading-7 text-pretty sm:mt-6 sm:text-base">
        Write, refine, and send professional emails with AI. Everything you
        need, together in one workspace.
      </p>

      <div className="mt-7 flex w-full max-w-sm flex-col items-center justify-center gap-3 min-[400px]:w-auto min-[400px]:max-w-none min-[400px]:flex-row sm:mt-8">
        <div className="border-default bg-card/60 text-subtle hover:text-headline focus-visible:ring-focus focus-visible:ring-offset-screen inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border px-5 font-sans text-[13px] font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none min-[400px]:w-43">
          Let's watch Demo
          <ArrowRight size={15} />
        </div>
        <Ctabutton />
      </div>
    </section>
  );
};

export const Ctabutton = ({ className }: { className?: string }) => {
  const handleGetStarted = useGetStartedNavigation();

  return (
    <button
      type="button"
      onClick={handleGetStarted}
      className={cn(
        "group bg-focus relative flex h-12 w-43 cursor-pointer items-center justify-center rounded-md shadow-sm transition-shadow duration-200 hover:shadow-md",
        className
      )}
    >
      <span className="text-cta-button flex items-center justify-center font-sans text-[13px] font-medium">
        Sign Up For Free
        <ArrowRight
          size={17}
          className="ml-1.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
        />
      </span>

      <div className="border-hover/50 group-hover:border-hover/90 pointer-events-none absolute h-11 w-41.5 rounded-md border transition-all duration-300 group-hover:shadow-[inset_0px_0px_3px_1px_var(--accent-inset)]"></div>
    </button>
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
        "absolute inset-[-200%] z-1 rounded-md bg-[conic-gradient(from_0deg,transparent_0_300deg,var(--border-focus)_360deg)] opacity-90",
        className
      )}
    />
  );
};
