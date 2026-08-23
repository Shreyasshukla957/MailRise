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

  const path = "M183.017 804.799C224.808 765.27 234.523 727.142 238.393 669.749C243.679 591.337 200.327 428.357 150.182 488.87C120.54 524.642 97.1829 575.889 111.406 620.116C144.716 723.693 366.463 603.27 378.377 495.123C387.622 411.21 228.651 292.137 228.651 292.137C228.651 292.137 150.589 195.746 108.567 241.344C66.5458 286.942 12.0099 318.42 2.69744 359.533C-32.1984 513.592 360.054 0.298571 360.054 0.298571"
  const path1 = "M471.191 614.718C463.691 622.718 483.191 507.041 456.691 467.118C430.191 427.195 56.6908 518.618 25.1908 450.218C-6.30919 381.818 -7.80929 187.218 25.1908 144.609C58.1909 102.001 460.691 180.888 481.691 137.218C502.691 93.5486 481.691 0.218262 481.691 0.218262"
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <Header className="font-rubik max-w-6xl"></Header>
      <DashboardBorder className="relative">
        <Dashboard className="font-rubik border-primary/10 border-px relative z-10 w-full max-w-4xl border"></Dashboard>
        <Flightanimation className="pointer-events-none absolute inset-0 z-0 translate-x-10/13 translate-y-2/8 " props={path}/>
        <Flightanimation className="pointer-events-none absolute inset-0 z-0 -translate-x-3/5 translate-y-1/8 rotate-180" props={path1}/>
        <img
          src="./img-avatar.jpg"
          className="absolute top-17 -left-24 size-15 rounded-full"
        ></img>
        <img
          src="./img-avatar2.jpg"
          className="absolute top-30 -right-43 size-15 rounded-full"
        ></img>
        <img
          src="./img-avatar3.jpg"
          className="absolute -bottom-28 -left-24 size-15 rounded-full"
        ></img>
        <img
          src="./img-avatar4.jpg"
          className="absolute -right-18 -bottom-52 size-15 rounded-full"
        ></img>
        <span className="font-caveat text-subtle hover:text-focus absolute top-5 -left-22 text-2xl">
          Sender
        </span>
        <span className="font-caveat text-subtle hover:text-focus absolute -right-19 -bottom-62 text-2xl">
          Sender
        </span>
        <span className="font-caveat text-subtle absolute top-18 -right-45 text-2xl">
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
