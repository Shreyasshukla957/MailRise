import React, { useState } from "react";
import { Check, ChevronRight, Moon, Sun } from "lucide-react";

export const Theme = ({
  variant = "icon",
}: {
  variant?: "icon" | "appearance";
}): React.JSX.Element => {
  const [dark, setdark] = useState<boolean>(
    localStorage.getItem("mailrise-theme") !== "light"
  );
  const [isAppearanceMenuOpen, setIsAppearanceMenuOpen] = useState(false);

  const applyTheme = (theme: boolean) => {
    setdark(theme);
    document.documentElement.classList.toggle("dark", theme);
    localStorage.setItem("mailrise-theme", theme ? "dark" : "light");
    setIsAppearanceMenuOpen(false);
  };

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    applyTheme(!dark);
  };

  if (variant === "appearance") {
    return (
      <div className="relative">
        <button
          type="button"
          title="Choose appearance"
          onClick={(event) => {
            event.stopPropagation();
            setIsAppearanceMenuOpen((open) => !open);
          }}
          className="text-subtle/80 hover:bg-hover flex h-8 w-full cursor-pointer items-center gap-x-2 rounded-lg px-2.5 font-sans text-xs font-medium transition-colors duration-200"
        >
          <span className="border-headline relative size-4 shrink-0 overflow-hidden rounded-full border">
            <span className="bg-headline absolute inset-y-0 left-0 w-1/2" />
          </span>
          <span className="flex-1 text-left">Appearance</span>
          <ChevronRight
            size={14}
            className="text-subtle transition-transform duration-200"
          />
        </button>

        {isAppearanceMenuOpen && (
          <div className="border-default bg-card absolute bottom-0 left-full z-10 ml-1 w-32 rounded-xl border p-1 shadow-lg">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                applyTheme(false);
              }}
              className="text-subtle/80 hover:bg-hover flex h-7 w-full cursor-pointer items-center gap-x-2 rounded-lg px-2.5 font-sans text-xs font-medium transition-colors duration-200"
            >
              <Sun size={14} />
              <span className="flex-1 text-left">Light</span>
              {!dark && <Check size={14} className="text-subtle" />}
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                applyTheme(true);
              }}
              className="text-subtle/80 hover:bg-hover flex h-7 w-full cursor-pointer items-center gap-x-2 rounded-lg px-2.5 font-sans text-xs font-medium transition-colors duration-200"
            >
              <Moon size={14} />
              <span className="flex-1 text-left">Dark</span>
              {dark && <Check size={14} className="text-subtle" />}
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <button
        title={dark ? "Switch to light theme" : "Switch to dark theme"}
        onClick={toggleTheme}
        className="border-default bg-card/60 group hover:border-themeborder focus-visible:ring-focus focus-visible:ring-offset-screen relative flex size-9 cursor-pointer items-center justify-center rounded-md border transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        <Sun
          size={18}
          className={`absolute transition-[transform,opacity] duration-150 ${
            dark
              ? "text-theme scale-100 rotate-0 opacity-100"
              : "scale-0 rotate-45 opacity-0"
          }`}
        />
        <Moon
          size={18}
          className={`absolute transition-[transform,opacity] duration-150 ${
            dark
              ? "scale-0 rotate-45 opacity-0"
              : "text-theme group-hover:text-themeborder scale-100 rotate-0 opacity-100"
          }`}
        />
      </button>
    </div>
  );
};
