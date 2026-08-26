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
    
    </div>
  );
};


