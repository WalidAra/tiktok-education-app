import ColorSync from "./ColorSync";

type Props = {
  children: React.ReactNode;
  method: () => void;
};

const IconButton = ({ children, method }: Props) => {
  return (
    <ColorSync
      key={undefined}
      onDark="hover:bg-[#aaaaaa10]"
      onWhite=""
      style="p-2 cursor-pointer text-2xl rounded duration-150 "
    >
      <button onClick={method}>{children}</button>
    </ColorSync>
  );
};

export default IconButton;
