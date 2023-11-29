/* eslint-disable react/no-children-prop */
"use client";
import Link from "next/link";
import AsideLi from "./AsideLi";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

const YourAccountLink = () => {
  const _user = useSelector((state: RootState) => state.user);
  return (
    <>
      <Link href={`/user/${_user.userInfo._id}/account`}>
        <AsideLi icon={<AiOutlineUser />} text="your account" children />
      </Link>
    </>
  );
};

export default YourAccountLink;
