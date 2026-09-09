import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "../lib/utils";
import { Star } from "lucide-react";

const FAQ_STARS = [
  { top: "10%", left: "8%", size: 10, rotate: -18 },
  { top: "74%", left: "43%", size: 6, rotate: 16 },
  { top: "16%", left: "51%", size: 9, rotate: -10 },
  { top: "78%", left: "59%", size: 5, rotate: 24 },
  { top: "25%", left: "18%", size: 6, rotate: 22 },
  { top: "14%", left: "84%", size: 8, rotate: 14 },
  { top: "42%", left: "92%", size: 11, rotate: -25 },
  { top: "70%", left: "7%", size: 7, rotate: 20 },
  { top: "82%", left: "88%", size: 6, rotate: -12 },
];

export const FAQ = ({
  className,
}: {
  className?: string;
}): React.JSX.Element => {
  const [open, setOpen] = useState<number | null>(null);
  const faqs: { question: string; answer: React.ReactNode }[] = [
    {
      question: "Will MailRise ever send an email without my approval?",
      answer:
        "Never. MailRise is built on one rule: AI drafts, you decide. Every email sits in review until you personally hit send — that's the whole point.",
    },
    {
      question: "What access does MailRise have to my Gmail?",
      answer:
        "Only what's needed to send from your own address, granted through Google's official OAuth flow. MailRise never reads your password — there's no password to read.",
    },
    {
      question: "Is my data used to train AI models?",
      answer: (
        <>
          No. Your prompts and drafts are used to write <em>your</em> emails,
          nothing else. Your words stay yours.
        </>
      ),
    },
    {
      question: "How do I revoke MailRise's access?",
      answer:
        "Anytime, in one click, from your Google Account settings (Security → Third-party access). Revoke, and MailRise is fully locked out.",
    },
    {
      question: "Which email address does MailRise send from?",
      answer:
        'Your own Gmail — always. Nothing goes out from an "on behalf of" address; recipients see exactly you.',
    },
    {
      question: "Why do I have to sign in with Google?",
      answer:
        "Because it's the safest way in. Google's OAuth means no new password to create, forget, or leak — your session lives in a secure, HttpOnly cookie.",
    },
  ];

  function toggle(index: number) {
    setOpen((current) => (current === index ? null : index));
  }

  return (
    <section
      id="FAQ"
      className={cn("relative w-full py-20 sm:py-28", className)}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {FAQ_STARS.map((star, index) => (
          <Star
            key={index}
            size={star.size}
            className="text-focus/40 absolute fill-current"
            style={{
              top: star.top,
              left: star.left,
              transform: `rotate(${star.rotate}deg)`,
            }}
          />
        ))}
      </div>
      <div className="selection:text-screen selection:bg-mdark relative mx-auto w-full px-5 sm:px-8 flex items-start justify-center">
        <Rise className="w-full flex h-full flex-col items-start justify-center px-20 py-30">
          <h2 className="font-sans from-mdark to-mdark/70 mb-4 flex items-center justify-center bg-linear-to-b bg-clip-text text-3xl leading-[1.15] font-medium tracking-tight text-balance text-transparent sm:text-4xl lg:text-5xl underline underline-offset-3">
            FAQ
          </h2>
          <h3 className="text-headline/80 text-center font-sans text-2xl leading-[1.15] font-normal tracking-tight sm:text-2xl ">
            A few things you might ask
          </h3>
          <p className="text-subtle mt-2 w-full max-w-xs font-sans flex items-start justify-start">
            Everything people ask before they trust an AI with their inbox.
          </p>
        </Rise>

        <Rise delay={0.12} className="mt-12 sm:mt-16">
          <ul className="border-default border-t">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                index={index}
                question={faq.question}
                open={open === index}
                onToggle={() => toggle(index)}
              >
                {faq.answer}
              </FaqItem>
            ))}
          </ul>
        </Rise>
      </div>
    </section>
  );
};

const FaqItem = ({
  index,
  question,
  open,
  onToggle,
  children,
}: {
  index: number;
  question: string;
  open: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
}): React.JSX.Element => {
  const reduce = useReducedMotion();

  return (
    <li className="border-default border-b">
      <button
        type="button"
        onClick={onToggle}
        className="group flex w-full cursor-pointer items-center gap-4 py-6 text-left sm:gap-6"
      >
        <span className="text-subtle w-7 shrink-0 font-sans text-xs tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={cn(
            "font-sans text-base leading-relaxed font-light transition-colors duration-200 sm:text-lg",
            open ? "text-headline" : "text-body group-hover:text-headline"
          )}
        >
          {question}
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-subtle ml-auto size-4 shrink-0 transition-transform duration-300"
        >
          <path
            d="M12 5v14"
            className={cn(
              "origin-center transition-transform duration-300 text-focus",
              open ? "rotate-90" : "rotate-0",
              reduce && "transition-none"
            )}
          />
          <path d="M5 12h14" className="text-focus"/>
        </svg>
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          reduce && "transition-none"
        )}
      >
        <div className="overflow-hidden">
          <p
            className={cn(
              "text-body pl-11 font-sans text-[15px] leading-relaxed transition-opacity duration-300 sm:pl-13",
              open ? "pb-6 opacity-100" : "opacity-0",
              reduce && "transition-none"
            )}
          >
            {children}
          </p>
        </div>
      </div>
    </li>
  );
};

const Rise = ({
  delay = 0,
  className,
  children,
}: {
  delay?: number;
  className?: string;
  children?: React.ReactNode;
}): React.JSX.Element => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: reduce ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
};
