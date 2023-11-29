"use client";
import { useTheme } from "@/context/Theme";
import React, { ReactNode } from "react";

const ColorSync = ({
  children,
  style,
  onDark,
  onWhite,
  key,
}: {
  children: ReactNode;
  style: string;
  onDark: string;
  onWhite: string;
  key: string | undefined;
}) => {
  const _theme = useTheme();
  return (
    <div key={key} className={`${_theme?.value ? onDark : onWhite}  ${style} `}>
      {children}
    </div>
  );
};

export default ColorSync;
