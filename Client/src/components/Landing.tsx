import React from "react";
import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Works } from "./Works";
import { UNDERSTAND } from "./svgworks";
import { Feature } from "./feature";
import { cn } from "../lib/utils";
import { Container } from "./container";
import {Outlet} from "react-router";

export const Landing = () => {
  return (
    <Container className="relative mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center">
      <div className="absolute inset-y-0 left-0 z-10 mx-auto w-px bg-[repeating-linear-gradient(to_bottom,var(--accent-border)_0px_8px,transparent_8px_16px)]"></div>

      <Navbar className="font-manrope max-w-7xl" />

      <Hero className="selection:text-subtle selection:bg-mdark mx-auto mt-20 w-full max-w-7xl" />

      <div className="absolute inset-y-0 right-0 z-10 mx-auto w-px bg-[repeating-linear-gradient(to_bottom,var(--accent-border)_0px_8px,transparent_8px_16px)]"></div>

      <section
        className="bg-screen relative mt-75 flex h-240 w-[99%] max-w-7xl scroll-mt-24 flex-col items-center"
        id="Works"
      >
        <SectionHead1 />
        <UNDERSTAND className="absolute top-12 -left-12 z-100" />
        <Works />
      </section>

      <section
        id="features"
        className="mx-auto mt-7 flex h-400 w-full max-w-7xl scroll-mt-24 flex-col items-center"
      >
        <div className="relative flex h-auto w-full flex-col">
          <SectionHead2 className="col-span-5 mx-4 w-full" />
          <Constraints className="top-50 overflow-y-hidden" />
          <Feature className="mt-2" />
          <Constraints className="bottom-0 overflow-hidden" />
        </div>
      </section>

   
    </Container>
  );
};

const SectionHead1 = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "mb-10 flex w-full -rotate-1 flex-col items-start justify-start px-15 pt-0 pb-1",
        className
      )}
    >
      <h2 className="font-hanken text-headline text-4xl font-extrabold tracking-tight uppercase">
        LET'S UNDERSTAND
      </h2>
      <h3 className="font-hanken text-mdark/60 text-2xl font-extrabold tracking-tight uppercase">
        How it Works
      </h3>
    </div>
  );
};

const SectionHead2 = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="mr-40 flex flex-col justify-start">
        <span className="font-hanken font-md from-headline via-mdark/95 to-mdark/80 relative flex w-[75%] justify-start bg-linear-to-b bg-clip-text pl-10 text-5xl leading-12 font-bold tracking-normal text-transparent selection:bg-blue-400 selection:text-neutral-200">
          A unified workspace that power your entire email{" "}
          <span className="pointer-events-none absolute top-12 right-50 text-blue-400">
            workflow.
          </span>
        </span>
        <span className="font-hanken text-mdark/60 font-md selection:text-subtle selection:bg-mdark mt-2.5 ml-2 flex items-center justify-start pl-10 text-[18px] font-light">
          Explore the features mailrise brings together in mono workspace.
        </span>
      </div>
    </div>
  );
};

const Constraints = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute left-1/2 z-10 mx-auto h-px w-screen max-w-screen -translate-x-1/2 bg-[repeating-linear-gradient(to_right,var(--accent-border)_0px_8px,transparent_8px_16px)]",
        className
      )}
    ></div>
  );
};
