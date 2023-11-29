"use client";

import { useRegister } from "@/context/Register";
import { useTheme } from "@/context/Theme";
import { Button } from "@chakra-ui/react";
type Props = {
  children: React.ReactNode;
  text: string;
};
const GoogleButton = ({ children, text }: Props) => {
  const reg = useRegister();

  const _theme = useTheme();
  const btnColor = _theme?.value ? "gray" : "";
  return (
    <Button
      onClick={() => reg.setIsShow((prev) => !prev)}
      borderRadius={"24px"}
      colorScheme={btnColor}
    >
      <div
        className={`rounded-3xl py-1 duration-150 hover:shadow-2xl  px-2 flex items-center gap-2 `}
      >
        <div className="text-xl"> {children} </div>
        <span className={_theme?.value ? "text-bgThreeDark" : ""} font-medium>
          {text}
        </span>
      </div>
    </Button>
  );
};

export default GoogleButton;
