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
          ? "bg-secondaryDark hover:bg-tertiaryDark "
          : "bg-tertiaryDark hover:bg-gray-500 text-secondaryWhite"
      }`}
    >
      {children}
    </button>
  );
};

export default Btn;
