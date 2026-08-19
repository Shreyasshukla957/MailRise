import React from "react";
import { cn } from "../lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): React.JSX.Element => {
  return <div className={cn("bg-screen mx-auto", className)}>{children}</div>;
};
