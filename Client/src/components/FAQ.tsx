import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "../lib/utils";

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
      <div className="selection:text-screen selection:bg-mdark relative mx-auto max-w-3xl px-5 sm:px-8">
        <Rise>
          <h2 className="font-instrument from-mdark to-mdark/70 mb-4 flex items-center justify-center bg-linear-to-b bg-clip-text text-3xl leading-[1.15] font-medium tracking-tight text-balance text-transparent sm:text-4xl lg:text-5xl ">
            FAQ
          </h2>
          <h3 className="text-headline/80 text-center font-sans text-2xl leading-[1.15] font-normal tracking-tight sm:text-2xl ">
            A few things you might ask
          </h3>
          <p className="text-subtle mx-auto mt-2 max-w-md text-center font-sans leading-relaxed ">
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
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
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
          aria-hidden="true"
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
        id={`faq-panel-${index}`}
        role="region"
        aria-hidden={!open}
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
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
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
