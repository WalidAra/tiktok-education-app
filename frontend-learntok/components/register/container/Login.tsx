/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useState } from "react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { fcApi } from "@/libs/fcApi";
import {
  updateUserInfo,
  updateGuestInfo,
} from "@/redux/features/user/userSlice";
import { useDispatch } from "react-redux";
import CheckBox from "./main/CheckBox";
import RegInput from "./main/RegInput";
import { useTheme } from "@/context/Theme";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [wrong, setWrong] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState(false);
  const _theme = useTheme();

  const getLoginData = async () => {
    const info = { email, password };
    const result: { status: boolean; user: UserProp } = await fcApi.fetchLogin({
      info,
    });
    console.log("here : ", result, typeof result);

    if (!result.status) {
      setWrong(true);
    } else {
      dispatch(updateUserInfo(result.user));
      dispatch(updateGuestInfo({ isUser: true }));
      console.log(result.user);

      if (isChecked) {
        localStorage.setItem("userID", result.user._id);
      }
    }
  };

  return (
    <div key={"login"} className={`w-full center_all flex-shrink-0`}>
      <form className="flex w-full p-5 flex-col gap-5" action="">
        <RegInput
          style=""
          label={"Email"}
          placeholder={"example@gmail.com"}
          value={email}
          setValue={setEmail}
        />
        <RegInput
          style={`${wrong ? "border-red-500" : "border-transparent"}`}
          label={"Password"}
          placeholder={"password"}
          value={password}
          setValue={setPassword}
        />

        {wrong && (
          <p className="text-sm text-red-600">Incorrect password or email</p>
        )}

        <div className="flex items-center justify-between">
          <CheckBox
            id="cr1"
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />

          <Link href={"/forget password"}>
            <Button  variant="link">
              <span className="text-sm font-normal text-main">Forget password?</span>
            </Button>
          </Link>
        </div>

        <button
          onClick={() => {
            getLoginData();
          }}
          className="w-full rounded-md py-2 px-4 bg-main text-white font-medium duration-200 hover:bg-[#2249aa] cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
