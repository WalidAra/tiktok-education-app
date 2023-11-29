type nextProps = {
  value: number;
  setValue: (value: number) => void;
};

type Props = {
  icon: React.ReactNode;
  text: string;
  style: string;
  method: () => void;
};

const RegCard = ({ icon, text, style, method }: Props) => {
  return (
    <div
      onClick={() => {
        method();
      }}
      className={`flex bg-almostBlack hover:bg-secondaryDark items-center justify-between font-medium text-sm cursor-pointer duration-150 p-3 rounded-md  `}
    >
      <div className={`${style} text-xl `}> {icon} </div>

      <span className={` text-white `}>{text}</span>

      <div className="block"></div>
    </div>
  );
};

export default RegCard;
