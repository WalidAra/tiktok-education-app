import React from "react";
import ForYou from "../sidebar/ForYou";
import Menu from "../sidebar/Menu";

const SideBar = () => {
  return (
    <div className=" hidden sm:flex sm:flex-col xl:justify-between sm:w-auto xl:w-290 sm:h-screen xl:py-3 xl:pr-1.5 xl:pl-3">
      <Menu />
      <ForYou />
    </div>
  );
};

export default SideBar;
