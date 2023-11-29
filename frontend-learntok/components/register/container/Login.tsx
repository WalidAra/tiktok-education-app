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

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [wrong, setWrong] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState(false);

  const getLoginData = async () => {
    const info = { email, password };
    const result: { status: boolean; user: UserProp } = await fcApi.fetchLogin({
      info,
    });
    console.log("here : ",result, typeof result);
    
    if (!result.status) {
      setWrong(true);
      throw new Error("LoginError nigga");
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
          label={"Email"}
          placeholder={"example@gmail.com"}
          value={email}
          setValue={setEmail}
        />
        <RegInput
          label={"Password"}
          placeholder={"password"}
          value={password}
          setValue={setPassword}
        />   

        <div className="flex items-center justify-between">
          <CheckBox
            id="cr1"
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />

          <Link href={"/forget password"}>
            <Button colorScheme="green" variant="link">
              <span className="text-sm font-normal">Forget password?</span>
            </Button>
          </Link>
        </div>

        <Button
          onClick={() => {
            getLoginData();
          }}
          color={"black"}
          backgroundColor={"green.500"}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
