"use client";

import { RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";
import GoogleButton from "./auth/GoogleButton";
import { FcGoogle } from "react-icons/fc";
import UserOptions from "./auth/UserOptions";

const AuthContainer = () => {
  const _user = useSelector((state: RootState) => state.user).guest;
  return (
    <div>
      {_user.isUser ? (
        <UserOptions />
      ) : (
        <GoogleButton text={"Continue with google"}>
          <FcGoogle />
        </GoogleButton>
      )}
    </div>
  );
};

export default AuthContainer;
