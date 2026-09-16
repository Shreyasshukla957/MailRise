import React from "react";
import { cn } from "../lib/utils";
import { Outlet, Link, useLocation } from "react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  BriefcaseBusinessIcon,
  DashboardSquare02Icon,
  Home02Icon,
  InboxIcon,
} from "@hugeicons/core-free-icons";

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

  return (
    <div
      className={cn(
        "flex h-screen w-screen items-center justify-center",
        className
      )}
    >
      <div className="bg-card relative h-full w-[16%] shrink-0 overflow-hidden">
        <nav className="bg-subtle/10 flex h-full w-full flex-col gap-y-2 px-3 py-6">
          <div className="mb-2 flex h-11 items-center px-2 pb-2">
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
      </div>
      <Outlet />
    </div>
  );
};
