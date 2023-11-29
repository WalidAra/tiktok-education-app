"use client";

import { useActiveSite } from "@/context/ActiveVids";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

const HomeLink = () => {
  const activeSite = useActiveSite();
  return (
    <Link onClick={() => activeSite?.setValue((prev) => false)} href={"/"}>
      <div
        className={`w-full flex cursor-pointer duration-200 items-center gap-2 p-2 justify-center sm:justify-normal ${
          !activeSite?.value ? "text-main" : ""
        }`}
      >
        <div className="text-2xl">
          <AiFillHome />
        </div>
        <span className="capitalize hidden xl:inline-block">Home</span>
      </div>
    </Link>
  );
};

export default HomeLink;
