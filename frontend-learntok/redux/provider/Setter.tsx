/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateUserInfo, updateGuestInfo } from "../features/user/userSlice";
import { clientLocalStorage } from "@/libs/localStorage";

type Props = {
  children: React.ReactNode;
};

const Setter = ({ children }: Props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState<UserProp | undefined>(undefined);
  const id: string | null = clientLocalStorage.getItem("userID");

  const getUserData = async () => {
    try {
      if (id) {
        const response = await fetch("http://localhost:4040/api/userById", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        const userData = await response.json();
        setData(userData);
        dispatch(updateUserInfo(userData));
        dispatch(updateGuestInfo({ isUser: true }));
        
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserData();
    
  }, [id]);

  return <>{children}</>;
};

export default Setter;
