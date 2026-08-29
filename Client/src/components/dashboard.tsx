import React from "react";
import { Workspace } from "./Workspace";
import { cn } from "../lib/utils";
import { MdSpaceDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsPersonWorkspace } from "react-icons/bs";
import { BsFillInboxesFill } from "react-icons/bs";
import { IoIosHome, IoIosSearch } from "react-icons/io";
import { motion } from "motion/react";
import { Inbox } from "./Inbox";
import { useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  RotateCw,
  Mic,
  Lock,
  Star,
  Bookmark,
  Copy,
  Puzzle,
} from "lucide-react";

export const Dashboard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}): React.JSX.Element => {
  return (
    <div
      className={cn(
        "from-default/60 to-default/20 flex min-h-150 w-full flex-col rounded-md bg-linear-to-b",
        className
      )}
    >
      <StudioHeader className="" />
      <StudioHeader2 className="" />
      <DashboardBody className="" />
    </div>
  );
};

const StudioHeader = ({ className }: { className?: string }) => {
  const NAV_TABS = [
    {
      id: "home",
      label: "Home",
      icon: IoIosHome,
      width: "w-[60%]",
      px: "px-3",
    },
    {
      id: "workspace",
      label: "Workspace",
      icon: BsPersonWorkspace,
      width: "w-[70%]",
      px: "px-2",
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: MdSpaceDashboard,
      width: "w-[70%]",
      px: "px-2",
    },
    {
      id: "profile",
      label: "Profile",
      icon: CgProfile,
      width: "w-[60%]",
      px: "px-4",
    },
    {
      id: "inbox",
      label: "Inbox",
      icon: BsFillInboxesFill,
      width: "w-[60%]",
      px: "px-4",
    },
  ];

  return (
    <div
      className={cn("grid h-13 w-full grid-cols-6 items-center rounded-t-md")}
    >
      <div className="col-span-1 flex h-[75%] items-center justify-center gap-x-1 px-4">
        <span className="size-2.5 rounded-full bg-red-600"></span>
        <span className="size-2.5 rounded-full bg-green-600"></span>
        <span className="size-2.5 rounded-full bg-yellow-500"></span>
      </div>

      {NAV_TABS.map(({ id, label, icon: Icon, width, px }) => (
        <div
          key={id}
          className="font-geist text-glow col-span-1 flex h-[75%] items-center justify-center"
        >
          <span className="hover:bg-hover mx-auto flex h-full w-[90%] cursor-pointer items-center justify-center px-1 text-[13px] font-medium ease-in text-shadow-xs hover:rounded-xl">
            <Icon size={13} className="mr-1.5 mb-1 shrink-0" />
            <span className="truncate">{label}</span>
          </span>
        </div>
      ))}
    </div>
  );
};

const StudioHeader2 = ({ className }: { className?: string }) => {
  const URL_TOOLS = [
    {
      id: "favorite",
      title: "Favourite",
      icon: Star,
      hoverClass: "hover:text-amber-400",
    },
    {
      id: "bookmark",
      title: "Bookmark",
      icon: Bookmark,
      hoverClass: "hover:text-focus",
    },
    {
      id: "copy",
      title: "Copy URL",
      icon: Copy,
      hoverClass: "hover:text-foreground",
    },
    {
      id: "extensions",
      title: "Extensions",
      icon: Puzzle,
      hoverClass: "hover:text-foreground",
    },
  ];
  return (
    <div
      className={cn(
        "border-default bg-card/60 text-subtle flex h-9 w-full items-center justify-between border-b px-3 text-xs backdrop-blur-sm",
        className
      )}
    >
      <div className="flex items-center gap-x-2">
        <button className="hover:text-foreground cursor-pointer transition-colors">
          <ChevronLeft size={15} />
        </button>
        <button className="hover:text-foreground cursor-pointer transition-colors">
          <ChevronRight size={15} />
        </button>
        <button className="hover:text-foreground ml-1 cursor-pointer transition-colors">
          <RotateCw size={13} />
        </button>
        <button className="hover:text-foreground ml-1 cursor-pointer transition-colors">
          <Mic size={13} />
        </button>
      </div>

      <div className="border-default bg-screen/60 mx-3 flex h-9 flex-1 items-center justify-between border px-3 font-mono text-[11px] shadow-2xs">
        <div className="text-subtle/80 flex items-center gap-x-1.5">
          <Lock size={11} className="text-subtle/50" />
          <span className="text-foreground/90 font-medium">
            https://mailrise.com
          </span>
        </div>

        <div className="text-subtle/70 flex items-center gap-x-2.5">
          {URL_TOOLS.map(({ id, title, icon: Icon, hoverClass }) => (
            <button
              key={id}
              title={title}
              className={`cursor-pointer transition-colors ${hoverClass}`}
            >
              <Icon size={12} />
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center">
        <img
          src="./profile-img.jpg"
          alt="Andrew Lee"
          className="border-default size-6 cursor-pointer rounded-full border object-cover shadow-2xs transition-transform hover:scale-105"
        />
      </div>
    </div>
  );
};

const DashboardBody = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [activetab, setactivetab] = useState<"workspace" | "inbox">(
    "workspace"
  );

  const NAV_ITEMS = [
    { id: "home", label: "Home", icon: IoIosHome },
    { id: "workspace", label: "Workspace", icon: BsPersonWorkspace },
    { id: "inbox", label: "Inbox", icon: BsFillInboxesFill },
    { id: "dashboard", label: "Dashboard", icon: MdSpaceDashboard },
  ];

  return (
    <div
      className={cn(
        "bg-card divide-default grid h-135 w-full grid-cols-6 divide-x",
        className
      )}
    >
      <div className="col-span-1 h-full">
        <div className="bg-subtle/10 flex h-full w-full flex-col items-center">
          <span className="mt-1 mb-10 flex h-8 w-[90%] items-center pl-2">
            <img
              src="./image.webp"
              className="h-8 w-9 rounded-md"
              alt=" Mailrise-logo"
            />
            <span className="font-inter text-[14px] font-medium tracking-tighter">
              Mailrise
            </span>
            <IoIosSearch className="text-subtle ml-4" />
          </span>

          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <span
                onClick={() => {
                  if (item.id === "workspace" || item.id === "inbox") {
                    setactivetab(item.id);
                  }
                }}
                key={item.id}
                className={cn(
                  "font-geist hover:bg-subtle/10 mt-2 flex h-8 w-[90%] cursor-pointer items-center gap-x-1 pl-4 text-[14px] font-light hover:rounded-xl",
                  item.id === activetab && `bg-subtle/10 rounded-xl`
                )}
              >
                <Icon className="mb-1 size-4" />
                <span className="border-subtle/10 ml-2 border-b">
                  {item.label}
                </span>
              </span>
            );
          })}

          <div className="bg-panel/70 relative mt-55 flex h-20 w-[88%] flex-col items-center rounded-md">
            <img
              src="./profile-img.jpg"
              className="absolute size-12 -translate-y-5 rounded-full shadow-[0px_0px_1px_1px_var(--accent-hover)] transition-all duration-200 hover:scale-95"
            />
            <span className="text-focus pt-9 text-sm">Andrew Lee</span>
            <span className="text-subtle text-[10px]">andrew@stripe.com</span>
          </div>
        </div>
      </div>

      <div className="bg-card relative col-span-5 h-full w-full">
        {activetab === "inbox" ? (
          <Workspace className="" isFront={false} />
        ) : (
          <Inbox
            className={cn("bg-card/10 h-full w-full", className)}
            isFront={false}
          />
        )}

        <div className="border-hover border-0.5px bg-card absolute -right-15 -bottom-18 col-span-5 h-full w-[95%] rounded-2xl border shadow-[inset_0px_0px_1px_1px_var(--accent-border)]">
          {activetab === "inbox" ? (
            <Inbox
              className={cn(
                "bg-card/10 h-full w-full to-80% mask-b-from-70%",
                className
              )}
              isFront={true}
            />
          ) : (
            <Workspace className="to-80% mask-b-from-70%" isFront={true} />
          )}
        </div>
      </div>
    </div>
  );
};
