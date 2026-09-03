import React from "react";
import { cn } from "../lib/utils";
import { Conicalgrad, Ctabutton } from "./header";
import { Svgborder, SvgLine1, Svgworks, Svglast1, Svglast2 } from "./svgworks";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";

export const Works = ({ className }: { className?: string }) => {
  const LINE_PRESETS = {
    fast: {
      dura: 2,
      delay: 0,
      className: "absolute -top-1 left-94 rotate-90 z-0 pointer-events-none",
    },
    medium: {
      dura: 2,
      delay: 0,
      className: "absolute top-0 left-46 rotate-180 z-0 pointer-events-none",
    },
    cross: {
      dura: 3,
      delay: 2,
      className: "absolute top-75 left-104 z-0 pointer-events-none",
    },
    cross2: {
      dura: 4,
      delay: 2,
      className:
        "absolute -rotate-x-180 top-99 left-104 z-0 pointer-events-none",
    },
    circle1: {
      dura: 4,
      delay: 2,
      className:
        "absolute -rotate-y-180 top-75 left-134 z-0 pointer-events-none",
    },
    circle2: {
      dura: 4,
      delay: 2,
      className: "absolute rotate-x-90 top-75 left-134 z-0 pointer-events-none",
    },
    end: {
      dura: 2,
      delay: 0,
      className: "absolute top-99 left-206 rotate-180 z-0 pointer-events-none",
    },
  };

  return (
    <div
      className={cn(
        " bg-screen/80 relative flex h-200 w-[96%] flex-col items-center   bg-[radial-gradient(var(--accent-border)_1px,transparent_1px)] bg-size-[14px_14px] px-15 pt-10 ",
        className
      )}
    >
      
    </div>
  );
};


