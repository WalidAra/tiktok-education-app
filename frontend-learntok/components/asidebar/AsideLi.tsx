import ColorSync from "../general/ColorSync";

type Props = {
  children: React.ReactNode | undefined;
  icon: React.ReactNode;
  text: string;
};

const AsideLi = ({ children, icon, text }: Props) => {
  return (
    <ColorSync
      key=""
      onDark="hover:bg-secondaryDark"
      onWhite=""
      style="flex items-center justify-between py-2 rounded-lg duration-150 cursor-pointer px-2"
    >
      <div className="flex items-center gap-2">
        <ColorSync key="" onDark="text-gray-600" onWhite="" style="text-xl">
          {icon}
        </ColorSync>
        <ColorSync key="" onDark="text-white" onWhite="" style="capitalize">
          {text}
        </ColorSync>
      </div>

      {children}
    </ColorSync>
  );
};

export default AsideLi;
