import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Works } from "./Works";
import { UNDERSTAND } from "./svgworks";
import { Feature } from "./feature";
import { cn } from "../lib/utils";
import { Container } from "./container";
import { FAQ } from "./FAQ";

export const Landing = () => {
  return (
    <Container className="relative mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center">
      <div className="absolute inset-y-0 left-0 z-10 mx-auto w-px bg-[repeating-linear-gradient(to_bottom,var(--accent-border)_0px_8px,transparent_8px_16px)]"></div>

      <BackgroundColor className="h-full w-full">
        <Navbar className="font-satoshi max-w-7xl" />
        <Hero className="selection:text-screen selection:bg-headline mx-auto mt-12 w-full max-w-7xl sm:mt-20" />
      </BackgroundColor>

      <div className="absolute inset-y-0 right-0 z-10 mx-auto w-px bg-[repeating-linear-gradient(to_bottom,var(--accent-border)_0px_8px,transparent_8px_16px)]"></div>

      <section
        className="bg-screen relative flex w-full max-w-7xl scroll-mt-24 flex-col items-center pt-24 xl:pt-75"
        id="Works"
      >
        <SectionHead1 />
        <Works />
      </section>

      <section
        id="features"
        className="mx-auto mt-16 flex w-full max-w-7xl scroll-mt-24 flex-col items-center sm:mt-24"
      >
        <div className="relative flex h-auto w-full flex-col">
          <SectionHead2 className="w-full" />
          <div className="relative mt-10 w-full sm:mt-12">
            <Constraints className="top-0" />
            <Feature />
            <Constraints className="bottom-0" />
          </div>
        </div>
      </section>

      <FAQ />
    </Container>
  );
};

const SectionHead1 = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "selection:text-screen selection:bg-mdark mb-10 flex w-full flex-col items-start px-6 sm:px-10 lg:px-15",
        className
      )}
    >
      <p className="text-mdark/60 mb-2 font-sans text-[13px] font-semibold tracking-wide uppercase">
        The workflow
      </p>
      <h2 className="text-headline font-sans text-3xl leading-[1.15] font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        How it works
      </h2>
    </div>
  );
};

const SectionHead2 = ({ className }: { className?: string }) => {
  return (
    <div className={cn("px-6 sm:px-10 lg:px-15", className)}>
      <div className="flex max-w-3xl flex-col">
        <p className="text-mdark/60 selection:text-screen selection:bg-mdark mb-3 font-sans text-[13px] font-semibold tracking-[0.12em] uppercase">
          One workspace
        </p>
        <h2 className="text-headline font-sans text-3xl leading-[1.15] font-semibold tracking-tight text-balance selection:bg-blue-400 selection:text-white sm:text-4xl lg:text-5xl">
          A unified workspace that powers your entire email{" "}
          <span className="text-blue-400">workflow.</span>
        </h2>
        <p className="text-mdark/65 sm:text-md selection:text-screen selection:bg-mdark mt-2 max-w-2xl font-sans text-base leading-relaxed">
          Explore the features Mailrise brings together in one workspace.
        </p>
      </div>
    </div>
  );
};

const Constraints = ({ className }: { className?: string }) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-1/2 z-10 h-px w-screen -translate-x-1/2 bg-[repeating-linear-gradient(to_right,var(--accent-border)_0px_8px,transparent_8px_16px)]",
        className
      )}
    ></div>
  );
};

const BackgroundColor = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("relative", className)}>
      <div className="bg-[linear-gradient(var(--color-focus)_1px,transparent_1px),linear-gradient(to_right,var(--color-focus)_0.5px,transparent_0.5px)] bg-size-[60px_60px] absolute h-full w-full opacity-5">
        
      </div>
      {children}
    </div>
  );
};
