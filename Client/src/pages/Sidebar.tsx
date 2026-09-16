import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cn } from "../lib/utils";
import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  BriefcaseBusinessIcon,
  DashboardSquare02Icon,
  Home02Icon,
  InboxIcon,
} from "@hugeicons/core-free-icons";
import { LogOut } from "lucide-react";
import { Theme } from "../context/theme";
import { SidebarControl } from "../components/SidebarControl";
import type { AppDispatch, RootState } from "../store/store";
import { logoutUser } from "../features/authSlice";

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
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const firstName = user?.name.trim().split(" ")[0] || "";
  const initial = user?.name[0] || "";

  const handleLogout = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    await dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div
      className={cn(
        "flex h-screen w-screen items-center justify-center",
        className
      )}
    >
      <div
        className={cn(
          "group/sidebar bg-card relative h-full shrink-0 cursor-pointer transition-[width] duration-300 ease-in-out",
          isProfileMenuOpen ? "overflow-visible" : "overflow-hidden",
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

          <button
            type="button"
            className="mb-[25px] flex h-[33px] w-full items-center gap-x-3 rounded-xl px-3 text-left"
          >
            <span className="bg-focus text-panel flex size-6 shrink-0 items-center justify-center rounded-md text-xs font-semibold">
              {initial}
            </span>
            <span className="text-subtle/90 flex-1 truncate font-sans text-sm font-light">
              {firstName} Workspace
            </span>
          </button>

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

          <div
            onClick={() => setIsProfileMenuOpen((open) => !open)}
            className="bg-panel/80 ring-focus/15 relative mt-auto flex h-12.5 w-full cursor-pointer items-center gap-x-2.5 self-center rounded-xl px-3 ring-1"
          >
            {isProfileMenuOpen && (
              <div className="border-default bg-card absolute bottom-16 left-0 z-20 w-40 rounded-xl border p-1 shadow-lg">
                <Theme variant="appearance" />
                <button
                  type="button"
                  onClick={handleLogout}
                  className="text-subtle/80 hover:bg-hover flex h-8 w-full cursor-pointer items-center gap-x-2 rounded-lg px-2.5 font-sans text-xs font-medium transition-colors duration-200"
                >
                  <LogOut size={14} />
                  Sign out
                </button>
              </div>
            )}

            {user?.profilepicture ? (
              <img
                src={user.profilepicture}
                alt={user.name}
                className="size-9 shrink-0 rounded-full object-cover"
              />
            ) : (
              <div className="bg-hover size-9 shrink-0 rounded-full" />
            )}
            <div className="flex min-w-0 flex-col">
              <span className="text-headline/90 truncate font-sans text-xs font-medium">
                {user?.name}
              </span>
              <span className="text-subtle/70 truncate font-sans text-[10px]">
                {user?.emailId}
              </span>
            </div>
          </div>
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

        {isCollapsed && (
          <div className="absolute bottom-[35px] left-[26px]">
            {user?.profilepicture ? (
              <img
                src={user.profilepicture}
                alt={user.name}
                title={user.name}
                className="border-default/70 size-8 rounded-full border object-cover"
              />
            ) : (
              <div className="bg-hover border-default/70 size-8 rounded-full border" />
            )}
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};
