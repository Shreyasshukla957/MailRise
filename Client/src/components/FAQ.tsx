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


