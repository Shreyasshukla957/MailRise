import React from "react";
import { cn } from "../lib/utils";
// import { motion } from "motion/react";
import { Flightanimation } from "./flightanimation";
import { Header } from "./header";
import { Dashboard } from "./dashboard";

export const Hero = ({
  className,
}: {
  className?: string;
}): React.JSX.Element => {
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <Header className="font-rubik max-w-6xl"></Header>
      <DashboardBorder className="relative">
        <Dashboard className="font-rubik border-primary/10 border-px relative z-10 w-full max-w-4xl border"></Dashboard>
        <Flightanimation className="pointer-events-none absolute inset-0 z-0 translate-x-3/5 translate-y-1/8" />
        <Flightanimation className="pointer-events-none absolute inset-0 z-0 -translate-x-3/5 translate-y-1/8 rotate-180" />
        <img
          src="./img-avatar.jpg"
          className="absolute top-17 -left-24 size-15 rounded-full"
        ></img>
        <img
          src="./img-avatar2.jpg"
          className="absolute top-10 -right-24 size-15 rounded-full"
        ></img>
        <img
          src="./img-avatar3.jpg"
          className="absolute -bottom-28 -left-24 size-15 rounded-full"
        ></img>
        <img
          src="./img-avatar4.jpg"
          className="absolute -right-24 -bottom-32 size-15 rounded-full"
        ></img>
        <span className="font-caveat text-subtle hover:text-focus absolute top-5 -left-22 text-2xl">
          Sender
        </span>
        <span className="font-caveat text-subtle hover:text-focus absolute -right-25 -bottom-40 text-2xl">
          Sender
        </span>
        <span className="font-caveat text-subtle absolute top-0 -right-25 text-2xl">
          Recipient
        </span>
        <span className="font-caveat text-subtle absolute -bottom-35 -left-26 text-2xl">
          Recipient
        </span>
      </DashboardBorder>
    </div>
  );
};

const DashboardBorder = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "border-px border-primary/10 mt-20 w-full max-w-4xl rounded-xl border p-2 shadow-[inset_0_0_12px_0_var(--color-dashboard)]",
        className
      )}
    >
      {children}
    </div>
  );
};
