"use client";

import { useTheme } from "@/context/Theme";

type Props = {
  children: React.ReactNode;
};
const Btn = ({ children }: Props) => {
  const _theme = useTheme();

  return (
    <button
      className={`button ${
        _theme?.value
          ? " hover:bg-tertiaryDark btnColor "
          : "bg-secondaryWhite hover:bg-gray-500 "
      }`}
    >
      {children}
    </button>
  );
};

export default Btn;
