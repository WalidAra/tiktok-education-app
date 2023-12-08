"use client";
import LearnTokLogo from "@/components/general/Logo";
import { useTheme } from "@/context/Theme";
import React from "react";

const LogoNav = () => {
  const _theme = useTheme();
  return (
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 p-1 bg-main rounded-xl center_all">
        <LearnTokLogo />
      </div>
      <span className={`font-semibold text-2xl hidden xl:inline-block ${_theme?.value ? "text-white":"text-black"}`}>
        LearnTok
      </span>
    </div>
  );
};

export default LogoNav;
