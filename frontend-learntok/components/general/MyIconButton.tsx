"use client";

import { useTheme } from "@/context/Theme";

type Props = {
  children: React.ReactNode;
  style: string;
};
const MyIconButton = ({ children, style }: Props) => {
  const _theme = useTheme();
  return (
    <button
      className={`p-1.5 rounded-full center_all border border-solid border-transparent text-xl duration-200 hover:shadow-xl ${
        _theme?.value
          ? "bg-secondaryDark hover:bg-tertiaryDark"
          : "border-[#b5b3b3] hover:bg-whitePrimary hover:border-transparent hover:text-white "
      }  ${style} `}
    >
      {children}
    </button>
  );
};

export default MyIconButton;
