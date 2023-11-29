/* eslint-disable react/jsx-no-undef */
"use client";

import MyIconButton from "@/components/general/MyIconButton";
import { AiOutlineSetting } from "react-icons/ai";
import { useState } from "react";
import RightBar from "@/components/layout/RightBar";

const BarToggle = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div>
      <RightBar active={active} setActive={setActive} />
      <div
        onClick={() => {
          setActive((prev) => !prev);
        }}
      >
        <MyIconButton style="">
          <AiOutlineSetting />
        </MyIconButton>
      </div>
    </div>
  );
};

export default BarToggle;
