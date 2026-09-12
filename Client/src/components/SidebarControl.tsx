import { BsLayoutSidebarInset } from "react-icons/bs";

export const SidebarControl = ({
  onClick,
}: {
  onClick: () => void;
}): React.JSX.Element => {
  return (
    <button
      type="button"
      title="Close sidebar"
      onClick={onClick}
      className="group/logo relative h-10 w-11 -translate-x-1 cursor-pointer text-left"
    >
      <img
        src="/image.webp"
        alt="Mailrise logo"
        className="absolute inset-0 h-10 w-11 rounded-lg transition-[opacity,filter] duration-200 ease-out group-hover/sidebar:blur-sm group-hover/sidebar:opacity-0"
      />
      <span className="text-subtle absolute inset-0 m-auto flex size-10 items-center justify-center rounded-full opacity-0 transition-opacity delay-0 duration-0 group-hover/logo:bg-hover group-hover/sidebar:delay-200 group-hover/sidebar:opacity-100">
        <BsLayoutSidebarInset className="size-4" />
      </span>
      <span className="border-subtle/50 bg-card text-subtle/80 pointer-events-none absolute top-1.5 left-[45px] z-10 flex h-7 w-max items-center gap-x-2 rounded-full border px-2.5 text-[11px] font-medium opacity-0 shadow-lg transition-all duration-200 group-hover/logo:pointer-events-auto group-hover/logo:opacity-100">
        <span>Close sidebar</span>
        <kbd className="border-subtle/60 bg-hover text-subtle flex size-4 items-center justify-center rounded-md border text-[9px]">
          [
        </kbd>
      </span>
    </button>
  );
};
