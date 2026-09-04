import React, { useState } from "react";
import { Sun } from "lucide-react";
import { RxMoon } from "react-icons/rx";

export const Theme = (): React.JSX.Element => {
  const [dark, setdark] = useState<boolean>(
    localStorage.getItem("mailrise-theme") !== "light"
  );

  const toggleTheme = () => {
    const theme = !dark;
    setdark(theme);

    document.documentElement.classList.toggle("dark", theme);
    localStorage.setItem("mailrise-theme", theme ? "dark" : "light");
  };

  return (
    <div className="cursor-pointer">
      <button
        onClick={toggleTheme}
        className="border-default bg-card/60 group hover:border-themeborder relative flex cursor-pointer items-center justify-center rounded-md border p-4 transition-all duration-200 outline-none"
      >
        <Sun
          size={35}
          className={`-[transform,opacity] absolute p-2 duration-100 ${
            dark
              ? "text-theme scale-100 rotate-0 opacity-100"
              : "scale-0 rotate-45 opacity-0"
          }`}
        />
        <RxMoon
          size={35}
          className={`absolute p-2 transition-[transform,opacity] duration-100 ${
            dark
              ? "scale-0 rotate-45 opacity-0"
              : "text-theme group-hover:text-themeborder scale-100 rotate-0 opacity-100"
          }`}
        />
      </button>
    </div>
  );
};
