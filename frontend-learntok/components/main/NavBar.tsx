import React from "react";
import ColorSync from "../general/ColorSync";
import LogoNav from "./navbar/LogoNav";
import InputSearch from "./navbar/InputSearch";
import AuthContainer from "./navbar/AuthContainer";
import { RegisterProvider } from "@/context/Register";
import Register from "../register/Register";

const NavBar = () => {
  return (
    <ColorSync
      key={undefined}
      style={
        "w-full py-2 px-4 rounded hidden sm:flex items-center justify-between"
      }
      onDark={"bg-tertiaryDark"}
      onWhite={"bg-secondaryWhite"}
    >
      <LogoNav />
      <InputSearch />

      <RegisterProvider>
        <Register />
        <AuthContainer />
      </RegisterProvider>
    </ColorSync>
  );
};

export default NavBar;
