import ColorSync from "../general/ColorSync";

type Props = {
  children: React.ReactNode;
};

const AsideList = ({ children }: Props) => {
  return (
    <ColorSync
      key={undefined}
      onDark="border-slate-400"
      onWhite=""
      style="w-full p-3 border-l-0 border-r-0 border-b-0 border-t border-solid "
    >
      {children}
    </ColorSync>
  );
};

export default AsideList;
