"use client"
import { createContext, useContext, useState } from "react";

type Props = {
  isShow: boolean;
  setIsShow: (p: (value: boolean) => boolean) => void;
};

const Register = createContext<Props|undefined>(undefined);

export const RegisterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <Register.Provider value={{ setIsShow, isShow }}>
      {children}
    </Register.Provider>
  );
};

export const useRegister = () => {
  const context = useContext(Register);

  if (context === undefined) {
    throw new Error("useRegister must be used within a RegisterProvider");
  }

  return context;
};