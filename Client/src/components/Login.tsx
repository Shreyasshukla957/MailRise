import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { CiLock } from "react-icons/ci";
import { cn } from "../lib/utils";

export const Login = ({
  className,
}: {
  className?: string;
}): React.JSX.Element => {
  return (
    <div
      className={cn(
        "bg-screen flex min-h-screen w-full flex-col lg:flex-row",
        className
      )}
    >
      <Stage />
      <Panel />
    </div>
  );
};

const Stage = (): React.JSX.Element => {
  const reduce = useReducedMotion();

  return (
    <section className="bg-hero relative h-full overflow-hidden bg-cover bg-center lg:h-auto lg:w-[58%]">
      <div className="absolute inset-0 hidden bg-panel/40 dark:block" />
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 z-10 flex items-center gap-1 px-7 py-6"
      >
        <img src="/image.webp" alt="" className="size-10" />
        <span className="font-geistmono text-neutral-100 text-[17px] tracking-tight selection:bg-blue-400">
          Mailrise
        </span>
      </motion.div>
    </section>
  );
};

const Panel = (): React.JSX.Element => {
  const reduce = useReducedMotion();

  function authentication() {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  }

  return (
    <section className="bg-card border-default relative flex min-h-screen flex-1 flex-col border-t lg:min-h-0 lg:border-l lg:border-t-0 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_80%_6%,color-mix(in_srgb,var(--accent-primary)_5%,transparent),transparent_70%)]" />

      <main className="relative flex flex-1 items-center">
        <div className="mx-auto w-full max-w-sm px-8 py-16 lg:px-14">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/image.webp" alt="" className="size-14" />
            <h1 className="font-instrument text-headline mt-3 text-[32px] leading-[1.08] tracking-[-0.015em] lg:text-[32px]">
              Sign in to Mailrise
            </h1>
            <p className="font-lora text-subtle mt-2 text-[11px] font-semibold tracking-[0.16em]">
              SECURE SIGN-IN
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20"
          >
            <button
              type="button"
              onClick={authentication}
              className="bg-headline text-cta-button group relative flex h-11.5 w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-px hover:bg-headline hover:shadow-[0_6px_18px_rgba(0,0,0,0.28)] active:scale-[0.985] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--border-focus)"
            >
              <FcGoogle size={18} className="mr-2" /> Login with Google
              <span className="pointer-events-none absolute inset-y-[-10%] left-[-60%] w-[36%] skew-x-[-20deg] bg-linear-to-r from-transparent via-white/35 to-transparent transition-[left] duration-500 ease-out group-hover:left-[130%]" />
            </button>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="text-subtle mt-6 flex items-center justify-center gap-1.5 text-center text-[12.5px]"
          >
            <CiLock className="size-3" /> Secure passwordless authentication.
          </motion.p>
        </div>
      </main>

      <footer className="border-default relative flex items-center justify-between border-t px-8 py-5 lg:px-14">
        <Link
          to="/"
          className="text-subtle text-[12px] transition-opacity duration-200 hover:opacity-65"
        >
          ← <span className="ml-2" /> Back to home
        </Link>
      </footer>
    </section>
  );
};
