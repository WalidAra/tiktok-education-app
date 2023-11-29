/* eslint-disable react/no-children-prop */
"use client";
import { PiSignOutBold } from "react-icons/pi";
import AsideLi from "./AsideLi";
import AsideList from "./AsideList";
import { useDispatch } from "react-redux";
import {
  updateGuestInfo,
  updateUserInfo,
} from "@/redux/features/user/userSlice";
import Link from "next/link";

const SignOutOption = () => {
  const dispatch = useDispatch();
  const SignOut = () => {
    localStorage.clear();
    const userInfo = {
      _id: "",
      email: "",
      favCategories: [],
      followers: [],
      following: [],
      password: "",
      fullName: "",
      joined: "",
      pfpUrl: "",
      userNmae: "",
    };
    dispatch(updateUserInfo(userInfo));
    dispatch(updateGuestInfo({ isUser: false }));
  };

  return (
    <>
      <AsideList>
        <Link href="/">
          <button onClick={SignOut}>
            <AsideLi icon={<PiSignOutBold />} text="sign out" children />
          </button>
        </Link>
      </AsideList>
    </>
  );
};

export default SignOutOption;
