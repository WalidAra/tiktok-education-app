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

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [check, setChecked] = useState(false);

  const SignUpFunc = async () => {
    const result: {
      status: boolean;
      user: { status: boolean; user: UserProp };
      message: string;
    } = await fcApi.SignUp({
      email,
      fullName,
      password,
      userName: userName,
    });

    if (result.status) {
      dispatch(updateUserInfo(result.user.user));
      dispatch(updateGuestInfo({ isUser: true }));
      if (check) {
        localStorage.setItem("userID", result.user.user._id);
      }
    
    }
  };

  return (
    <div key={"signUp"} className={`w-full center_all flex-shrink-0`}>
      <form className="flex w-full p-5 flex-col gap-2" action="">
        <RegInput
          label={"User Name"}
          placeholder={"Enter your username"}
          value={userName}
          setValue={setUserName}
        />
        <RegInput
          label={"Full Name"}
          placeholder={"Enter your full name"}
          value={fullName}
          setValue={setFullName}
        />

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
          <CheckBox id="cr2" isChecked={check} setIsChecked={setChecked} />

          <Link href={"/forget password"}>
            <Button colorScheme="green" variant="link">
              <span className="text-sm font-normal">Forget password?</span>
            </Button>
          </Link>
        </div>

        <Button
          onClick={() => SignUpFunc()}
          color={"black"}
          backgroundColor={"green.500"}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
