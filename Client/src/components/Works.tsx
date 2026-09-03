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
        "bg-screen/80 relative flex h-200 w-[96%] flex-col items-center bg-[radial-gradient(var(--accent-border)_1px,transparent_1px)] bg-size-[14px_14px] px-15 pt-10",
        className
      )}
    >
      <div className="relative z-20 flex h-45 w-full items-center justify-start rounded-xl px-8 pt-7">
        <div className="border-subtle/30 bg-panel shadow-all/80 relative z-20 flex h-27 w-46.5 justify-center rounded-xl border">
          <img
            src="./image.png"
            alt=""
            className="absolute inset-0 h-full w-full rounded-xl object-cover"
          />

          <div className="absolute inset-0 z-5 rounded-xl bg-linear-to-b from-white/60 via-transparent to-white/60" />

          <div className="relative z-10 flex w-full flex-col items-center pt-4 pl-9">
            <span className="font-hanken text-md font-semibold tracking-tight whitespace-nowrap text-neutral-500 transition-colors duration-200 hover:text-orange-500">
              Enter Mailrise
            </span>
            <span className="font-lora text-xs font-medium whitespace-nowrap text-neutral-500">
              with Oauth2 & Jwt
            </span>
          </div>

          <span className="relative top-18 right-18 z-10 h-11 w-16 overflow-hidden rounded-md shadow-xl">
            <span className="bg-themeborder absolute inset-px z-10 flex items-center justify-center rounded-md border border-white/10 shadow-xl">
              <MdSecurity className="mt-1 mr-2 size-8 translate-x-1/9 text-white" />
            </span>
          </span>
        </div>
      </div>

      <Svgworks {...LINE_PRESETS.medium} />

      <div className="relative z-20 mt-10 flex h-45 w-full items-center justify-start rounded-xl px-8 pt-23">
        <div className="border-subtle/30 bg-panel shadow-all/80 relative z-20 flex h-27 w-46.5 justify-center rounded-xl border">
          <img
            src="./image.png"
            alt=""
            className="absolute inset-0 h-full w-full rounded-xl object-cover"
          />

          <div className="absolute inset-0 z-5 rounded-xl bg-linear-to-b from-white/60 via-transparent to-white/60" />

          <div className="relative z-10 flex w-full flex-col items-center pt-12 pl-9">
            <span className="font-hanken text-md cursor-pointer font-semibold tracking-tight whitespace-nowrap text-neutral-500 hover:text-orange-500">
              Start Prompting
            </span>
            <span className="font-lora text-xs font-medium whitespace-nowrap text-neutral-500">
              with Feature Suite
            </span>
          </div>

          <span className="relative -top-2 right-18.5 z-10 h-11 w-16 overflow-hidden rounded-md shadow-xl">
            <span className="bg-fontscolor absolute inset-px z-10 flex items-center justify-center rounded-md border border-white/10 shadow-xl">
              <BsPersonWorkspace className="mt-1 mr-2 size-8 translate-x-1/9 text-white" />
            </span>
          </span>
        </div>
      </div>

      <Svgworks {...LINE_PRESETS.fast} />
      <Svgborder {...LINE_PRESETS.cross} />

      <MailCard className="pointer-events-none translate-x-4 translate-y-8/5 bg-neutral-200">
        <div className="absolute inset-x-2 bottom-12">
          <PromptBox />
        </div>

        <div className="absolute inset-x-0 -bottom-14 z-10">
          <MailCardText
            data="Context that gets it right"
            subdata="Just describe what you need — get a well-structured email with the right tone, detail, and intent, every time."
          />
        </div>
      </MailCard>

      <Svgborder {...LINE_PRESETS.cross2} />

      <MailCard className="pointer-events-none translate-x-4 translate-y-1/5 bg-neutral-200">
        <div className="absolute inset-x-2 bottom-12">
          <MailButton className="hover:border-px hover:border-focus transition-colors duration-200" />
        </div>

        <div className="absolute inset-x-0 -bottom-14 z-10">
          <MailCardText
            data="Edit until it's perfect"
            subdata="Tweak tone, structure, or content anytime — full editing control before you hit send."
          />
        </div>
      </MailCard>

      <Svglast1 />

      <Svglast2 />

      <SvgLine1 {...LINE_PRESETS.end} />

     

    </div>
  );
};

const MailCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "border-subtle/30 bg-mailcard shadow-all/30 absolute z-10 h-65 w-50 rounded-md border",
        className
      )}
    >
      <div className="relative grid h-full w-full grid-rows-5 items-center justify-center rounded-md">
        <div className="absolute inset-x-0 top-0 aspect-square">
          <img
            src="./image.png"
            alt=""
            className="absolute h-full w-full rounded-tl-md rounded-tr-md mask-b-from-30% mask-b-to-90% object-cover"
          />
          {children}
        </div>
      </div>
    </div>
  );
};

const MailCardText = ({
  className,
  subdata,
  data,
}: {
  className?: string;
  subdata: string;
  data: string;
}) => {
  return (
    <div className={cn("w-full px-3 py-2", className)}>
      <h3 className="text-xs font-medium text-neutral-700">{data}</h3>
      <p className="mt-1 text-[10px] leading-relaxed text-neutral-600">
        {subdata}
      </p>
    </div>
  );
};

const PromptBox = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "border-subtle/30 flex items-center gap-1.5 rounded-md border bg-neutral-100 px-2 py-2.5",
        className
      )}
    >
      <span className="text-subtle flex-1 text-xs">
        Write a professional email for tomorrow's meeting
      </span>

      <button className="bg-theme flex h-5 w-5 items-center justify-center rounded-full">
        <FaArrowUp size={10} className="text-neutral-100" />
      </button>
    </div>
  );
};

const MailButton = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "border-subtle/30 flex items-center gap-1.5 rounded-md border bg-neutral-100 px-2 py-2.5",
        className
      )}
    >
      <span className="text-subtle flex-1 text-xs font-medium">
        Edit this email
      </span>

      <button className="bg-theme flex h-5 w-5 items-center justify-center rounded-full transition-colors duration-200">
        <MdEdit size={10} className="text-neutral-100" />
      </button>
    </div>
  );
};

const SendBox = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "border-subtle/30 flex flex-col gap-2 rounded-md border bg-neutral-100 px-2 py-2.5",
        className
      )}
    >
      <div className="flex flex-col">
        <span className="text-xs font-medium text-neutral-700">
          Tomorrow's meeting
        </span>
        <span className="text-subtle text-[10px]">
          Hi team, sharing the agenda for tomorrow's sync...
        </span>
      </div>
    </div>
  );
};

const SendCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "border-subtle/30 bg-mailcard shadow-all/30 absolute z-10 h-65 w-60 rounded-md border",
        className
      )}
    >
      <div className="relative grid h-full w-full grid-rows-4 items-center justify-center rounded-md">
        <div className="absolute inset-x-0 top-0 aspect-square">
          <img
            src="./image.png"
            alt=""
            className="absolute aspect-auto h-full w-full rounded-tl-md rounded-tr-md mask-b-from-30% mask-b-to-90% object-cover"
          />
          {children}
        </div>
      </div>
    </div>
  );
};
