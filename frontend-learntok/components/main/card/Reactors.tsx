"use client";

import Link from "next/link";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineLink } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import Btn from "./Btn";
import { fcApi } from "@/libs/fcApi";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store"; 

type Props = {
  videoID: string;
};

const Reactors = ({ videoID }: Props) => {
  const [isLiked, setILiked] = useState<boolean>(false);
  const userID = useSelector((state: RootState) => state.user).userInfo._id;

  const addLikeToServer = async () => {
    try {
      const result = await fcApi.updateLikeState({
        op: true,
        userID: userID,
        videoID: videoID,
      });
      console.log("adding like to video done : ", result);
    } catch (error) {
      console.log("cant add like to server");
    }
  };

  const RemoveLikeToServer = async () => {
    try {
      const result = await fcApi.updateLikeState({
        op: false,
        userID: userID,
        videoID: videoID,
      });
      console.log("deleting like to video done : ", result);
    } catch (error) {
      console.log("cant del like to server");
    }
  };

  return (
    <div className="absolute z-50 top-1/2 sm:right-0 xl:right-11 -translate-y-1/4 hidden sm:flex flex-col gap-3">
      <div
        onClick={() => {
          setILiked((prev) => !prev);
          if (!isLiked) {
            addLikeToServer();
          } else {
            RemoveLikeToServer();
          }
        }}
      >
        <Btn>
          <div className={`text-2xl ${isLiked ? "text-mainOne" : ""}`}>
            {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
          </div>
        </Btn>
      </div>

      <Link href={`/${videoID}`}>
        <Btn>
          <div className={`text-2xl`}>
            <GoComment />
          </div>
        </Btn>
      </Link>

      <Btn>
        <div className={`text-2xl`}>
          <AiOutlineLink />
        </div>
      </Btn>
    </div>
  );
};

export default Reactors;
