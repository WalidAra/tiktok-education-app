"use client";
import { createContext, useContext, useState } from "react";

type Props = {
  value: boolean;
  setValue: (p: (prev: boolean) => boolean | boolean) => void;
};

const ActiveSite = createContext<Props | undefined>(undefined);

const ActiveSiteProvider = ({ children }: ChildrenProps) => {
  const [value, setValue] = useState<boolean>(false);

  return (
    <>
      <ActiveSite.Provider value={{ setValue, value }}>
        {children}
      </ActiveSite.Provider>
    </>
  );
};

export default ActiveSiteProvider;

export const useActiveSite = () => {
  return useContext(ActiveSite);
};
