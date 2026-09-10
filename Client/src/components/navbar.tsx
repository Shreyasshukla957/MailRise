import React, { useRef, useState } from "react";
import { cn } from "../lib/utils";
import { ArrowRight, Menu, X } from "lucide-react";
import { Theme } from "../context/theme";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";

export const Navbar = ({
  className,
}: {
  className?: string;
}): React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuButton = useRef<HTMLButtonElement>(null);
  const navlinks = [
    {
      name: "Features",
      href: "#features",
    },
    {
      name: "FAQ",
      href: "#FAQ",
    },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  const handleGetStarted = () => navigate("/workspace");

  return (
    <motion.header
      onKeyDown={(event) => {
        if (event.key === "Escape" && isMenuOpen) {
          closeMenu();
          menuButton.current?.focus();
        }
      }}
      className={cn(
        "border-default/70 bg-screen/90 fixed top-0 z-50 w-full mx-auto border-b font-sans backdrop-blur-md rounded-xs",
        className
      )}
      initial={{ y: 28, opacity: 0, filter: "blur(8px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.45, ease: "linear" }}
    >
      <a
        href="#introduction"
        className="bg-screen text-headline focus-visible:ring-focus absolute top-2 left-5 z-10 -translate-y-24 rounded-md px-4 py-2 focus:translate-y-0 focus-visible:ring-2"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 w-full items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          className="group focus-visible:ring-focus focus-visible:ring-offset-screen flex w-fit items-center gap-1 rounded-md py-1 outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          onClick={closeMenu}
          to="/"
        >
          <img
            alt="Mailrise"
            width={32}
            height={32}
            className="size-8"
            src="/image.webp"
          />
          <span className="text-mdark/80 group-hover:text-focus font-geistmono text-md font-normal tracking-tighter transition-colors duration-200">
            Mailrise
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <nav
            className="hidden items-center gap-1 lg:flex"
          >
            {navlinks.map((item) => (
              <a
                className="text-body hover:bg-hover/40 hover:text-mdark focus-visible:ring-focus relative rounded-md px-3 py-2.5 font-sans text-[14px] font-medium transition-colors duration-200 outline-none focus-visible:ring-2"
                href={item.href}
                key={item.href}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <Theme />

          <button
            type="button"
            onClick={handleGetStarted}
            className="border-focus/30 bg-focus/5 hover:border-focus group focus-visible:ring-focus focus-visible:ring-offset-screen hidden cursor-pointer rounded-md border p-[1.5px] transition-[border-color,box-shadow,transform] duration-200 ease-out hover:shadow-[inset_0_0_2px_0.5px_var(--accent-bright)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:flex"
          >
            <span className="bg-focus text-panel flex items-center rounded-md px-3 py-2 text-[15px] font-semibold shadow-md transition-shadow duration-200 text-shadow-md group-hover:shadow-lg">
              Get Started
              <ArrowRight
                className="ml-1 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                size={16}
              />
            </span>
          </button>

          <HamburgerButton
            isMenuOpen={isMenuOpen}
            menuButton={menuButton}
            onClick={() => setIsMenuOpen((open) => !open)}
          />
        </div>
      </div>

      {isMenuOpen && (
        <nav
          className="border-default bg-screen absolute inset-x-0 top-full flex max-h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto overscroll-contain border-b px-5 py-4 shadow-sm sm:px-8 lg:hidden"
          id="mobile-navigation"
        >
          {navlinks.map((item) => (
            <a
              className="text-body hover:bg-hover/40 hover:text-headline focus-visible:ring-focus rounded-lg px-3 py-3 font-lora text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none tracking-wider"
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}
          <div className="border-default mt-2 border-t pt-4 sm:hidden">
            <button
              type="button"
              className="border-focus/30 bg-focus/5 hover:border-focus group focus-visible:ring-focus flex cursor-pointer rounded-md border p-[1.5px] transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-px hover:shadow-[inset_0_0_2px_0.5px_var(--accent-bright)] focus-visible:ring-2 focus-visible:outline-none"
              onClick={() => {
                closeMenu();
                handleGetStarted();
              }}
            >
              <span className="bg-focus text-panel flex w-full items-center justify-center rounded-md px-3 py-2.5 text-[15px] font-semibold shadow-md transition-shadow duration-200 text-shadow-md group-hover:shadow-lg">
                Get Started
                <ArrowRight
                  className="ml-1 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                  size={16}
                />
              </span>
            </button>
          </div>
        </nav>
      )}
    </motion.header>
  );
};

export const GetStarted = ({
  className,
  label = "Get Started",
}: {
  className?: string;
  label?: string;
}) => (
  <button
    className={cn(
      "bg-focus text-cta-button inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm",
      className
    )}
    type="button"
  >
    {label}
    <ArrowRight className="ml-1.5" size={15} />
  </button>
);

const HamburgerButton = ({
  isMenuOpen,
  menuButton,
  onClick,
}: {
  isMenuOpen: boolean;
  menuButton: React.RefObject<HTMLButtonElement | null>;
  onClick: () => void;
}) => {
  return (
    <button
      ref={menuButton}
      title={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
      className="border-default text-mdark hover:border-subtle/50 focus-visible:ring-focus flex size-10 cursor-pointer items-center justify-center rounded-lg border transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none lg:hidden"
      onClick={onClick}
      type="button"
    >
      {isMenuOpen ? (
        <X size={18} />
      ) : (
        <Menu size={18} />
      )}
    </button>
  );
};
