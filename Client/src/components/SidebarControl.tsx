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
      className="text-subtle hover:bg-hover flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors duration-75"
    >
      <BsLayoutSidebarInset className="size-4" />
    </button>
  );
};
