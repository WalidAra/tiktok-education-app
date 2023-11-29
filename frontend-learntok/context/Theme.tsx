"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type ThemeContextType = {
  value: boolean;
  setValue: (newValue: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const currentTheme = localStorage.getItem("learnTok-theme");
    if (currentTheme !== null) {
      setThemeValue(currentTheme === "true");
    }
  }, []);

  const [value, setValue] = useState<boolean>(true);

  const setThemeValue = (newValue: boolean) => {
    localStorage.setItem("learnTok-theme", newValue.toString());
    setValue(newValue);
  };

  return (
    <>
      <ThemeContext.Provider value={{ value, setValue: setThemeValue }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
