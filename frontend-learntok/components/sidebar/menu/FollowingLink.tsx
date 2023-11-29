"use client";

import { useActiveSite } from "@/context/ActiveVids";
import { RootState } from "@/redux/store/store";
import Link from "next/link";
import { FaUserFriends } from "react-icons/fa";
import { useSelector } from "react-redux";

const FollowingLink = () => {
  const activeSite = useActiveSite();
  const _user = useSelector((state: RootState) => state.user);

  return (
    <Link
      className={`${_user.guest.isUser ? "cursor-pointer" : "cursor-default"}`}
      href={`${_user.guest.isUser ? "/following" : ""} `}
    >
      <div
        className={`w-full flex  items-center gap-2 p-2 justify-center sm:justify-normal ${
          _user.guest.isUser
            ? "cursor-pointer duration-200"
            : "pointer-events-none opacity-30"
        } ${activeSite?.value ? "text-main" : ""}`}
      >
        <div className="text-2xl">
          <FaUserFriends />
        </div>
        <span className="capitalize hidden xl:inline-block">Following</span>
      </div>
    </Link>
  );
};

export default FollowingLink;
