"use client";
import { createContext, useContext, useState } from "react";

type Props = {
  value: boolean;
  setValue: (p: boolean) => void;
};

const SearchContext = createContext<Props | undefined>(undefined);

const WhichSearchProvider = ({ children }: ChildrenProps) => {
  const [whichOn, setWhichOn] = useState<boolean>(false);
  return (
    <>
      <SearchContext.Provider value={{ setValue: setWhichOn, value: whichOn }}>
        {children}
      </SearchContext.Provider>
    </>
  );
};

export default WhichSearchProvider;

export const useSearch = () => {
  return useContext(SearchContext);
};
