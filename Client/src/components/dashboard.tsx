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
      className={cn(
        "grid h-13 w-full grid-cols-6 items-center rounded-t-md"
      )}
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
          <span
            className="hover:bg-hover mx-auto flex h-full w-[90%] cursor-pointer items-center justify-center px-1 text-[13px] font-medium ease-in hover:rounded-xl text-shadow-xs"
          >
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


