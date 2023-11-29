import { ThemeProvider } from "@/context/Theme";
import React from "react";
import ColorSync from "../general/ColorSync";
import { ChakraProvider } from "@chakra-ui/react";
import SideBar from "../home/SideBar";
import Main from "../home/Main";

const HomeWrapper = ({ children }: ChildrenProps) => {
  return (
    <>
      <ThemeProvider>
        <ChakraProvider>
          <ColorSync
            key={undefined}
            style={
              "w-full h-screen grid-cols-auto1fr block sm:grid overflow-hidden relative"
            }
            onDark={"bg-primaryDark text-textDark"}
            onWhite={"bg-primaryWhite text-light"}
          >
            <SideBar />

            <Main>{children}</Main>
          </ColorSync>
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
};

export default HomeWrapper;
