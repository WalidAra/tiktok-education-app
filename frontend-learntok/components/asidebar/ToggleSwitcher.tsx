"use client";

import { useTheme } from "@/context/Theme";
import React, { useState } from "react";

const ToggleSWitcher = () => {
  const currentTheme = localStorage.getItem("learnTok-theme");
  const [isActive, setIsActive] = useState(
    currentTheme ? (currentTheme === "true" ? true : false) : true
  );
  const _theme = useTheme();

  const toggleCheckbox = () => {
    setIsActive((prev) => !prev);
    _theme?.setValue(!isActive);
  };

  return (
    <div>
      <label className="switch scale-75">
        <input onClick={toggleCheckbox} type="checkbox" checked={isActive} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ToggleSWitcher;
