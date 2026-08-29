import React from "react";
import { cn } from "../lib/utils";
import { IoIosSearch } from "react-icons/io";
import { INBOX_Activity } from "../constants/data";
import { Archive, Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export const Inbox = ({
  className,
  isFront,
}: {
  className?: string;
  isFront: boolean;
}) => {
  const INBOX_COLUMNS = [
    { id: "recipient", label: "Recipient", className: "col-span-3" },
    { id: "subject", label: "Subject", className: "col-span-5" },
    { id: "activity", label: "Delivery", className: "col-span-2" },
    { id: "sent", label: "Sent", className: "col-span-2 text-right" },
  ];

  return (
    <motion.div
      initial={isFront ? { scale: 0.95, opacity: 0 , filter: "blur(8px)" } : false}
      animate={isFront ? { scale: 1, opacity: 1 , filter: "blur(0px)" } : false}
      transition={{ duration: 0.3 }}

      className={cn("flex flex-col items-center", className)}
    >
      <div className="border-default/70 mt-2 flex h-13 w-[98%] items-center justify-between border-b px-3">
        <span className="font-geistmono text-body text-[13px] font-medium tracking-tight">
          Mail Activity
        </span>

        <div className="flex items-center gap-x-3">
          <div className="bg-panel/40 ring-focus/40 hover:ring-focus flex h-8 cursor-pointer items-center gap-x-2 rounded-md px-2.5 ring transition-shadow duration-300 ease-in">
            <IoIosSearch className="text-subtle size-4" />

            <input
              type="text"
              placeholder="Search emails..."
              className="text-body placeholder:text-subtle/90 h-full w-32 bg-transparent text-[11px] font-light outline-none"
            />
          </div>

          <button className="border-bright/50 text-geistmono hover:border-bright/80 text-mdark flex h-8 cursor-pointer items-center gap-x-1 rounded-md border px-2.5 text-[11px] hover:shadow-md">
            <span className="text-focus text-sm">+</span>
            New
          </button>
        </div>
      </div>

      <div className="bg-panel/40 border-default/80 grid h-15 w-full grid-cols-12 items-center border-y">
        {INBOX_COLUMNS.map((column) => (
          <span
            key={column.id}
            className={cn(
              "font-lora text-headline/80 flex justify-center pr-3 text-[12px] font-medium tracking-wide uppercase",
              column.className
            )}
          >
            {column.label}
          </span>
        ))}
      </div>

      <div
        className={cn(
          "h-100 w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          isFront ? "overflow-y-auto" : "overflow-hidden pointer-events-none"
        )}
      >
        {INBOX_Activity.map(
          ({
            className,
            id,
            avatar,
            sender,
            subject,
            timestamp,
            status,
            statusClass,
          }: {
            className?: string;
            id: string;
            avatar: string;
            sender: string;
            subject: string;
            timestamp: string;
            status: string;
            statusClass: string;
          }) => {
            return (
              <div
                key={id}
                className={cn(
                  "bg-panel/40 border-default/80 hover:bg-hover/50 group grid h-11 w-full grid-cols-12 grid-rows-10 overflow-hidden border-b transition-colors duration-200"
                )}
              >
                <span className="border-default/50 text-headline col-span-3 flex h-11 items-center gap-x-2.5 px-3 font-semibold">
                  <img
                    src={avatar}
                    alt=""
                    className="border-default/40 mr-2 size-7 rounded-md border object-cover hover:scale-105"
                  />
                  <span className="font-lora from-headline to-subtle truncate bg-linear-to-b bg-clip-text text-[13px] font-light text-transparent">
                    {sender}
                  </span>
                </span>

                <span className="border-default/50 text-subtle col-span-5 flex h-11 items-center truncate px-3 text-[13px]">
                  {subject}
                </span>

                <span className="border-default/50 font- geistmono text-subtle col-span-2 flex h-11 items-center justify-center px-2 text-[12px]">
                  {timestamp}
                </span>

                <span
                  className={cn(
                    "border-default/50 col-span-2 flex h-11 items-center justify-center px-3 text-[12px] group-hover:invisible",
                    statusClass
                  )}
                >
                  {status}

                  <span className="invisible flex items-center justify-end gap-x-1 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
                    <button
                      title="Archive"
                      className="text-subtle hover:text-body hover:bg-hover flex size-6 cursor-pointer items-center justify-center rounded-md transition-colors"
                    >
                      <Archive size={13} />
                    </button>

                    <button
                      title="Delete"
                      className="text-subtle hover:bg-bright flex size-6 cursor-pointer items-center justify-center rounded-md transition-colors"
                    >
                      <Trash2 size={13} />
                    </button>
                  </span>
                </span>
              </div>
            );
          }
        )}
      </div>
    </motion.div>
  );
};
