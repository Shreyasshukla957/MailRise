import React, { useState } from "react";
import { cn } from "../lib/utils";
import { Outlet, Link, useLocation } from "react-router";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  BriefcaseBusinessIcon,
  DashboardSquare02Icon,
  Home02Icon,
  InboxIcon,
} from "@hugeicons/core-free-icons";
import { SidebarControl } from "../components/SidebarControl";

const SIDEBAR_LINKS = [
  {
    link: "/",
    button: "Home",
    icon: Home02Icon,
    backIcon: ArrowLeft01Icon,
  },
  {
    link: "/workspace",
    button: "Workspace",
    icon: BriefcaseBusinessIcon,
  },
  {
    link: "/dashboard",
    button: "Dashboard",
    icon: DashboardSquare02Icon,
  },
  {
    link: "/inbox",
    button: "Inbox",
    icon: InboxIcon,
  },
];

export const Sidebar = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const { pathname } = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "flex h-screen w-screen items-center justify-center",
        className
      )}
    >
      <div
        className={cn(
          "group/sidebar bg-card relative h-full shrink-0 cursor-pointer overflow-hidden transition-[width] duration-300 ease-in-out",
          isCollapsed ? "w-[4%] before:absolute before:inset-0 before:bg-subtle/10" : "w-[16%]"
        )}
      >
        <nav
          className={cn(
            "bg-subtle/10 flex h-full w-full flex-col gap-y-2 px-3 py-6",
            isCollapsed && "pointer-events-none opacity-0"
          )}
        >
          <div className="border-default/60 mb-2 flex h-11 items-center justify-between border-b px-2 pb-2">
            <div className="flex min-w-0 items-center gap-x-2.5">
              <img
                src="/image.webp"
                alt="Mailrise logo"
                className="size-7 shrink-0 rounded-md object-cover transition-none"
              />
              <span className="text-headline/90 font-geistmono text-sm font-medium tracking-tight">
                Mailrise
              </span>
            </div>
            <div className="border-default/60 ml-2 shrink-0 border-l pl-2">
              <SidebarControl onClick={() => setIsCollapsed(true)} />
            </div>
          </div>

          {SIDEBAR_LINKS.map(({ link, button, icon, backIcon }) => (
            <Link
              key={link}
              to={link}
              className={cn(
                "border-default/0 font-geist hover:border-default/70 hover:bg-screen/90 group relative flex h-[34px] items-center gap-x-3 rounded-xl border px-4 text-sm font-light backdrop-blur-md transition-transform duration-300 ease-linear",
                pathname === link && "border-default/70 bg-screen/90"
              )}
            >
              {backIcon && (
                <HugeiconsIcon
                  icon={backIcon}
                  size={13}
                  strokeWidth={2}
                  className="text-headline/90 absolute left-4 opacity-0 transition-all duration-200 group-hover:opacity-100"
                />
              )}
              <span
                className={cn(
                  "text-headline/90 relative flex size-4 shrink-0 items-center justify-center transition-all duration-200",
                  backIcon && "group-hover:translate-x-4"
                )}
              >
                <HugeiconsIcon icon={icon} size={16} strokeWidth={1.8} />
              </span>
              <span
                className={cn(
                  "text-headline/80 transition-all duration-200",
                  backIcon && "group-hover:translate-x-4"
                )}
              >
                {button}
              </span>
            </Link>
          ))}
        </nav>

        <button
          type="button"
          title="Open sidebar"
          onClick={() => setIsCollapsed(false)}
          className={cn(
            "text-subtle hover:bg-card hover:text-foreground absolute top-6 left-[17px] flex size-10 cursor-pointer items-center justify-center rounded-full transition-none",
            isCollapsed ? "opacity-100" : "pointer-events-none opacity-0"
          )}
        >
          <BsLayoutSidebarInsetReverse className="size-4 translate-y-0.5" />
        </button>

        {isCollapsed && (
          <div className="absolute top-37.75 left-0 flex w-full flex-col items-center justify-center gap-y-2">
            {SIDEBAR_LINKS.map(({ link, button, icon }) => (
              <Link
                key={link}
                to={link}
                title={button}
                className="group/closed text-headline/90 relative flex h-[34px] w-full items-center justify-start"
              >
                <span
                  className={cn(
                    "border-default/70 bg-screen/90 pointer-events-none absolute inset-y-0 left-[5%] w-[90%] rounded-xl border opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover/closed:opacity-100",
                    pathname === link && "opacity-100"
                  )}
                />
                <HugeiconsIcon
                  icon={icon}
                  size={16}
                  strokeWidth={1.8}
                  className="text-headline/90 relative z-10 ml-[28px]"
                />
              </Link>
            ))}
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};
