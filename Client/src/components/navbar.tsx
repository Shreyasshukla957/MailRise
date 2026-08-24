import React from "react";
import { cn } from "../lib/utils";
import { ArrowRight } from "lucide-react";
import { Theme } from "../context/theme";

export const Navbar = ({
  className,
}: {
  className?: string;
}): React.JSX.Element => {
  const navlinks = [
    {
      name: "Features",
      href: "#features",
    },
    {
      name: "How it works",
      href: "#Works",
    },
    {
      name: "Use cases",
      href: "#Cases",
    },
  ];

  return (
    <div
      className={cn(
        "sticky top-0 z-50 h-15 w-full",
        "flex items-center justify-between px-6 py-2",
        "font-manrope bg-screen/80 backdrop-blur-md",
        "border-default border-b",
        className
      )}
    >
      {/* logo */}
      <div className="flex items-center">
        <img src="./image.webp" className="h-9 w-auto pb-1" />
        <span className="hover:text-focus font-geistmono cursor-pointer font-semibold tracking-tighter transition-all duration-200">
          Mailrise
        </span>
      </div>

      <div className="flex items-center justify-around gap-x-5">
        {/* nav links */}
        <div className="hidden cursor-pointer items-center justify-center gap-x-4 text-[16px] lg:flex">
          {navlinks.map((items) => {
            return (
              <a
                className="text-subtle hover:text-mdark group hover:bg-glow/10 relative rounded-md p-2 text-[15px] font-light transition-all duration-200 text-shadow-xs"
                href={items.href}
                key={items.href}
              >
                {items.name}

                {/* <span className="bg-accent/75 absolute bottom-0 left-0 h-px w-0 transition-all duration-200 group-hover:w-full"></span> */}
              </a>
            );
          })}
        </div>

        <Theme className="cursor-pointer" />

        <div className="flex items-center justify-center gap-4">
          <button className="text-focus border-focus flex cursor-pointer rounded-xl border px-3 py-2 text-[14px] font-semibold shadow-sm text-shadow-sm">
            Sign In
          </button>

          <GetStarted
            className="border-focus/30 bg-focus/5 hover:border-focus group flex cursor-pointer rounded-md border p-[1.5px] transition-all duration-200 hover:shadow-[inset_0_0_2px_0.5px_var(--accent-bright)]"
            label="Get Started"
          />
        </div>
      </div>
    </div>
  );
};

export const GetStarted = ({
  className,
  label = "Get Started",
}: {
  className?: string;
  label?: string;
}) => {
  return (
    <div className={cn("", className)}>
      <button className="bg-focus text-panel group flex cursor-pointer items-center rounded-md px-3 py-2 text-[14px] font-semibold shadow-md text-shadow-md">
        {label}
        <ArrowRight
          className="ml-1 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5"
          size={16}
        />
      </button>
    </div>
  );
};
