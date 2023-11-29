"use client";

type Props = {
  method: () => void;
  text: string;
  style: string;
};

const UploadPBtn = ({ method, text, style }: Props) => {
  return (
    <button
      onClick={method}
      className={`w-24 rounded-lg py-2 px-4 cursor-pointer text-center text-lg ${style} duration-150 hover:opacity-70 `}
    >
      {text}
    </button>
  );
};

export default UploadPBtn;
