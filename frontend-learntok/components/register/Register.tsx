/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import BlackLayer from "../general/BlackLayer";
import RegContainer from "./RegContainer";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { useRegister } from "@/context/Register";
import { SessionProvider } from "next-auth/react";

const Register = () => {
  const userIsOn = useSelector((state: RootState) => state.user);
  const reg = useRegister();

  useEffect(() => {
    const timer = setInterval(() => {
      reg.setIsShow((prev) => true);
    }, 180000);

    if (!reg.isShow) {
      return () => {
        clearInterval(timer);
        reg.setIsShow((prev) => false);
      };
    }
  }, []);
  if (reg.isShow && userIsOn.guest.isUser === false) {
    return (
      <>
        <BlackLayer
          layerStyle={''}
          method={() => {}}
          style="center_all"
          width={0}
        >
          <SessionProvider>
            <RegContainer isShow={reg.isShow} setIsShow={reg.setIsShow} />
          </SessionProvider>
        </BlackLayer>
      </>
    );
  }
};

export default Register;
