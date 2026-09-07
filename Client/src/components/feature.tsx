import React from "react";
import { cn } from "../lib/utils";
import { Calendar } from "lucide-react";
import { ChevronDown, Pencil } from "lucide-react";
import { BsFillInboxesFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Inbox } from "./Inbox";
import { motion } from "motion/react";
import { Send } from "lucide-react";

export const Feature = ({
  className,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "bg-panel/10 border-subtle/10 mx-auto w-full overflow-hidden",
        className
      )}
    >
      <div className="relative grid grid-cols-1 gap-3 overflow-hidden px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-12 lg:px-0">
        <div className="bg-screen group border-subtle/10 h-100 rounded-2xl border-r border-b sm:col-span-2 lg:col-span-3 lg:row-start-1">
          <Logincard className="flex h-full w-full items-start justify-center overflow-hidden" />
        </div>
        <InboxActivityCard className="pointer-events-none h-110 rounded-br-3xl rounded-bl-3xl border-t-0 sm:col-span-2 lg:col-span-6 lg:col-start-4 lg:row-start-1" />
        <SchedulingCard className="sm:col-span-2 lg:col-span-3 lg:col-start-10 lg:row-start-1" />
        <DashboardShowcase className="border-subtle/25 border border-l-0 sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2" />
        <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2">
          <ImageFeatureCard />
          <ToneEditCard className="bg-hover/10 text-headline flex items-center justify-center" />
          <ChatStatusCard />
        </div>
      </div>
    </div>
  );
};

export const Logincard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col items-center justify-center mask-l-from-90%",
        className
      )}
    >
      <div className="bg-panel/60 absolute inset-0 flex w-full max-w-sm flex-col gap-3 p-6 opacity-100 shadow-md backdrop-blur-sm transition-opacity duration-200 ease-in group-hover:pointer-events-none group-hover:opacity-0">
        <div className="flex flex-col gap-1">
          <h3 className="font-satoshi text-headline text-xl font-semibold tracking-tight">
            Create your account
          </h3>
          <p className="font-satoshi text-mdark/60 text-sm font-normal">
            Sign in to continue to your workspace.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="font-satoshi text-mdark/70 text-xs font-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="border-subtle/30 bg-screen/50 text-headline placeholder:text-mdark/40 focus:border-subtle/60 font-satoshi rounded-lg border px-3 py-2 text-sm outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-satoshi text-mdark/70 text-xs font-medium">
              Gmail address
            </label>
            <input
              type="email"
              placeholder="john@gmail.com"
              className="border-subtle/30 bg-screen/50 text-headline placeholder:text-mdark/40 focus:border-subtle/60 font-satoshi rounded-lg border px-3 py-2 text-sm outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="border-subtle/20 h-px flex-1 border-t" />
          <span className="font-satoshi text-mdark/40 text-xs">or</span>
          <div className="border-subtle/20 h-px flex-1 border-t" />
        </div>

        <button
          type="button"
          className="border-subtle/40 bg-screen hover:border-subtle/70 font-satoshi text-headline flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold shadow-sm transition-opacity duration-200 hover:shadow-md"
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.766 12.276c0-.818-.074-1.606-.212-2.364H12.24v4.474h6.48a5.54 5.54 0 0 1-2.4 3.632v3.02h3.882c2.27-2.09 3.564-5.168 3.564-8.762z"
            />
            <path
              fill="#34A853"
              d="M12.24 24c3.24 0 5.956-1.075 7.942-2.908l-3.882-3.02c-1.076.722-2.454 1.148-4.06 1.148-3.124 0-5.77-2.11-6.716-4.946H1.514v3.11A11.996 11.996 0 0 0 12.24 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.524 14.274a7.19 7.19 0 0 1-.376-2.274c0-.788.136-1.552.376-2.274v-3.11H1.514A11.996 11.996 0 0 0 .24 12c0 1.936.466 3.766 1.274 5.384l4.01-3.11z"
            />
            <path
              fill="#EA4335"
              d="M12.24 4.78c1.762 0 3.344.606 4.59 1.796l3.444-3.444C18.19 1.19 15.474 0 12.24 0 7.514 0 3.43 2.69 1.514 6.616l4.01 3.11c.946-2.836 3.592-4.946 6.716-4.946z"
            />
          </svg>
          Sign in with Google
        </button>
      </div>

      <div className="text-subtle absolute inset-0 flex h-full w-full flex-col items-center justify-center p-4 opacity-0 backdrop-blur-3xl transition-opacity duration-200 ease-in group-hover:opacity-100">
        <div>
          <h3 className="font-satoshi text-mdark pb-5 text-xl font-semibold">
            Connect your Google account, securely.
          </h3>
          <p className="text-mdark/70 mt-1 text-sm leading-relaxed">
            Sign in with Google and manage your MailRise workspace with
            permission-based access.
          </p>
          <ul className="text-mdark/75 mt-5 space-y-1 text-xs">
            <li>✓ Google OAuth authentication</li>
            <li>✓ Verified Gmail sender</li>
            <li>✓ Disconnect anytime</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const InboxActivityCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "border-subtle/15 bg-panel/40 flex w-full flex-col gap-4 overflow-hidden border p-5 shadow-sm backdrop-blur-sm",
        className
      )}
    >
      <div className="flex items-center">
        <div className="bg-screen border-subtle/30 text-headline font-satoshi flex items-center rounded-xl border px-4 py-2.5 text-sm font-semibold shadow-sm">
          <BsFillInboxesFill size={16} />
          Inbox
        </div>

        <div className="text-mdark/50 font-satoshi flex items-center rounded-lg px-3 text-xs font-medium">
          <CgProfile size={14} />
          Profile
        </div>
      </div>

      <Inbox isFront className="h-full justify-center mask-b-from-70%" />
    </div>
  );
};

export const ToneEditCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "border-subtle/15 bg-panel/40 flex min-h-50 w-full flex-col rounded-xl border p-6 shadow-sm backdrop-blur-sm",
        className
      )}
    >
      <div className="flex flex-col justify-center gap-2">
        <h3 className="font-sans text-headline text-xl leading-snug font-semibold tracking-tight">
          Tone and edit control, built into every draft.
        </h3>
        <p className="font-sans text-mdark/65 text-sm leading-relaxed font-normal">
          Rewrite the wording or switch between Professional, Formal, and Casual
          to make each message fit its purpose.
        </p>
      </div>

      <div className="mt-3 flex h-10 w-full items-center justify-between">
        <div className="border-subtle/30 bg-screen/60 text-headline font-satoshi flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium">
          Professional
          <ChevronDown size={14} className="text-mdark/50" />
        </div>

        <div className="border-subtle/40 bg-focus text-panel font-satoshi flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium shadow-sm">
          <Pencil size={13} className="text-panel" />
          Edit
        </div>
      </div>
    </div>
  );
};

export const ImageFeatureCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "border-subtle/15 bg-panel/40 flex min-h-60 w-full flex-col overflow-hidden rounded-2xl border shadow-sm backdrop-blur-sm",
        className
      )}
    >
      <div className="border-subtle/10 bg-screen/40 flex h-36 w-full shrink-0 items-end justify-end overflow-hidden border-b bg-[radial-gradient(circle_at_left,var(--color-blue)_30%,var(--color-purple)_60%,transparent_100%)]">
        <img src="./text.png" alt="" className="w-[90%] rounded-md" />
      </div>

      <div className="flex flex-1 flex-col justify-center gap-1 px-4 py-3">
        <h4 className="font-satoshi text-headline text-md font-semibold tracking-tight">
          Turn a simple prompt into a structured email.
        </h4>
        <p className="font-satoshi text-mdark/60 text-xs leading-relaxed font-normal">
          Describe the purpose of your message in plain language, and MailRise
          generates the subject, body, and closing—ready for you to review and
          edit.
        </p>
      </div>
    </div>
  );
};

export const SchedulingCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "border-subtle/15 bg-panel/40 flex min-h-100 w-full flex-col gap-5 rounded-bl-2xl border-r-0 border-b border-l p-5 shadow-sm backdrop-blur-sm",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Calendar size={13} className="text-mdark/50" />
          <span className="font-satoshi text-mdark/50 text-xs font-semibold tracking-wide uppercase">
            Schedule
          </span>
        </div>
        <span className="font-satoshi text-mdark/40 text-xs">Today</span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt=""
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-satoshi text-headline text-sm font-semibold">
              James Lenin
            </span>
            <span className="font-satoshi text-mdark/40 text-xs">9:30 AM</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40?img=32"
            alt=""
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-satoshi text-headline text-sm font-semibold">
              Margarette Smith
            </span>
            <span className="font-satoshi text-mdark/40 text-xs">11:00 AM</span>
          </div>
          <span className="border-subtle/30 text-mdark/50 font-satoshi ml-auto rounded-md border px-2 py-0.5 text-[10px] font-medium">
            Follow-up
          </span>
        </div>
      </div>

      <div className="border-subtle/15 border-t" />

      <div className="flex flex-col gap-1.5">
        <span className="font-satoshi text-mdark/50 text-xs font-semibold tracking-wide uppercase">
          Upcoming
        </span>

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40?img=45"
            alt=""
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-satoshi text-headline text-sm font-semibold">
              Anastasia Slovic
            </span>
            <span className="font-satoshi text-mdark/40 text-xs">
              Tomorrow, 2:00 PM
            </span>
          </div>
        </div>
      </div>
      <div className="border-subtle/15 border-t" />
      <p className="font-satoshi text-mdark/70 text-[12px] leading-relaxed font-normal">
        Plan each email in advance by selecting its recipient, delivery date,
        and preferred time. MailRise keeps scheduled messages organized in your
        workspace, giving you a clear view of what is planned, pending, and
        ready for delivery.
      </p>
    </div>
  );
};

export const ChatStatusCard = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className={cn(
        "group border-subtle/20 bg-panel/30 relative flex h-12 w-full items-center gap-3 rounded-md border px-4 shadow-sm backdrop-blur-xl",
        className
      )}
    >
      <motion.span
        variants={{
          rest: { backgroundColor: "rgb(163 163 163 / 0.5)" },
          hover: { backgroundColor: "rgb(16 185 129 / 1)" },
        }}
        transition={{ duration: 0.3 }}
        className="h-2 w-2 shrink-0 rounded-full"
      />

      <span className="font-satoshi text-mdark/50 flex-1 truncate text-sm font-light">
        Type your message...
      </span>
      <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-linear-to-bl from-blue-500 to-neutral-200 shadow-sm">
        <Send size={14} className="text-white" />
      </div>
    </motion.div>
  );
};

export const DashboardShowcase = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "bg-panel/40 relative min-h-140 overflow-hidden rounded-tr-3xl rounded-br-3xl border-dashed mask-b-from-75% shadow-xl",
        className
      )}
    >
      <div className="absolute inset-x-6 top-8 z-20 md:inset-x-10 md:top-10">
        <p className="font-sans text-mdark/60 text-xs font-semibold tracking-[0.12em] uppercase">
          Dashboard & analytics
        </p>

        <h3 className="font-sans text-mdark/90 mt-4 max-w-xl text-2xl leading-[1.25] font-semibold tracking-tight md:text-3xl">
          A comprehensive dashboard to monitor, analyze, and optimize every
          email send.
        </h3>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center">
        <div className="h-95 w-[88%] overflow-hidden">
          <div className="border-subtle/30 rounded-t-3xl border bg-[radial-gradient(circle_at_center,var(--color-focus)_45%,var(--color-screen)_100%)] p-5">
            <div className="overflow-hidden rounded-2xl border border-white/30 shadow-2xl">
              <img
                src="/dashboard.png"
                alt="MailRise dashboard analytics"
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
