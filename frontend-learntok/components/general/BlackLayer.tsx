type Props = {
  width: number;
  method: () => void;
  style: string;
  children: React.ReactNode | undefined;
  layerStyle: string;
};

const BlackLayer = ({ method, style, width, children, layerStyle }: Props) => {
  const divWidth = {
    width: `${width}px`,
  };

  return (
    <div
      className={`bg-blackLayer absolute w-full h-screen top-0 left-0 grid grid-cols-_1frAuto z-40 ${layerStyle} `}
    >
      <div className={String(style)} onClick={method}>
        {children}
      </div>
      <div style={divWidth}></div>
    </div>
  );
};

export default BlackLayer;
