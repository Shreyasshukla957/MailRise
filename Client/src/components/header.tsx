import React from "react";
import { cn } from "../lib/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

export const Header = ({
  className,
  children,
}: {
  className: string;
  children?: React.ReactNode;
}): React.JSX.Element => {
  return (
    <section
      aria-labelledby="landing-headline"
      id="introduction"
      className={cn(
        "selection:text-screen selection:bg-mdark relative mt-5 flex w-full scroll-mt-24 flex-col items-center text-center",
        className
      )}
    >
      {children}
      <Link
        to="/login"
        className="border-default bg-card/50 text-body hover:border-focus/50 hover:text-headline focus-visible:ring-focus group focus-visible:ring-offset-screen inline-flex items-center gap-1.5 rounded-md border px-4.5 py-[4.5px] font-sans text-xs font-medium transition-[border-color,box-shadow] duration-500 ease-in-out hover:shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        <img
          src="/image.webp"
          alt=""
          aria-hidden="true"
          className="size-[19px] rounded-[3px]"
        />
        Enter your email workspace
        <ArrowRight
          aria-hidden="true"
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </Link>

      <h1
        id="landing-headline"
        className="font-instrument text-headline mt-7 max-w-3xl text-[42px] leading-[1.08] font-normal tracking-[-0.025em] text-balance sm:mt-8 sm:text-[56px] lg:text-[64px]"
      >
        Polished{" "}
        <span className="bg-focus/95 inline-block mask-x-from-98% px-1.5 text-white select-none dark:text-zinc-950">
          emails,
        </span>
        {" from "}
        <span className="text-mdark/75 italic sm:block">
          first draft to final send.
        </span>
      </h1>

      <p className="text-mdark/65 mt-5 max-w-lg font-sans text-[15px] leading-7 text-pretty sm:mt-6 sm:text-base">
        Write, refine, and send professional emails with AI. Everything you
        need, together in one workspace.
      </p>

      <div className="mt-7 flex w-full max-w-sm flex-col items-center justify-center gap-3 min-[400px]:w-auto min-[400px]:max-w-none min-[400px]:flex-row sm:mt-8">
        <a
          href="#Works"
          className="border-default bg-card/60 text-subtle hover:text-headline focus-visible:ring-focus focus-visible:ring-offset-screen inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border px-5 font-sans text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none min-[400px]:w-[172px]"
        >
          See how it works
          <ArrowRight aria-hidden="true" size={15} />
        </a>
        <Ctabutton />
      </div>
    </section>
  );
};

export const Ctabutton = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "group relative flex h-12 w-43 cursor-pointer items-center justify-center rounded-md bg-focus shadow-sm transition-shadow duration-200 hover:shadow-md",
        className
      )}
    >
      <Link to="/login">
        <span className="text-cta-button flex items-center justify-center font-sans text-[13px] font-medium">
          Sign Up For Free
          <ArrowRight
            aria-hidden="true"
            size={17}
            className="ml-1.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
          />
        </span>
      </Link>

      <div className="border-hover/50 group-hover:border-hover/90 pointer-events-none absolute h-11 w-41.5 rounded-md border transition-all duration-300 group-hover:shadow-[inset_0px_0px_3px_1px_var(--accent-inset)]"></div>
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
        "absolute inset-[-200%] z-1 rounded-md bg-[conic-gradient(from_0deg,transparent_0_300deg,var(--border-focus)_360deg)] opacity-90",
        className
      )}
    />
  );
};
