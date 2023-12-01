/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { RootState } from "@/redux/store/store";
import { Button } from "@chakra-ui/react";
import { ChangeEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteAccountContainer from "@/components/user/account/DeleteAccountContainer";
import VidsContainer from "@/components/user/account/VidsContainer";
import { UploadButton } from "@/src/utils/uploadthing";
import { fcApi } from "@/libs/fcApi";
import { updateUserInfo } from "@/redux/features/user/userSlice";

const YourAccount = () => {
  const dispatch = useDispatch();
  const _user = useSelector((state: RootState) => state.user);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUserName] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");

  const updateData = async (url: string) => {
    const result = await fcApi.UpdatePfp({
      id: _user.userInfo._id,
      pfp: url,
    });

    if (result) {
      dispatch(updateUserInfo({ pfpUrl: url }));
      console.log(" updated");
    } else console.log("Failed");
  };

  return (
    <div className="w-full">
      <div className="w-full p-5 gap-6 flex flex-col">
        <h1 className="capitalize text-xl font-medium">profile details</h1>
        <h1 className="capitalize ">upload profile picture</h1>

        <div className="w-full flex gap-5 ">
          <img
            src={_user.userInfo.pfpUrl}
            className="w-16 h-16 rounded-xl"
            alt={_user.userInfo.fullName}
          />

          <div className="flex flex-col gap-3">
            <div className="flex  gap-4">
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={async (res) => {
                  await updateData(res[0].fileUrl);
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`);
                }}
              />
              <Button
                onClick={() => {
                  history.back();
                }}
                colorScheme="whiteAlpha"
                variant="outline"
              >
                cancel
              </Button>
            </div>

            <p className="text-sm font-medium">
              Allowed JPG, GIF or PNG , Max size 4MB
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-white  " htmlFor="">
              Username
            </label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Enter your new username"
              className="rounded py-2.5 px-4 bg-almostBlack w-full focus:border-bgSixDark duration-150 border border-solid border-transparent"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white  " htmlFor="">
              Full name
            </label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Enter your new full name"
              className="rounded py-2.5 px-4 bg-almostBlack w-full focus:border-bgSixDark duration-150 border border-solid border-transparent"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white  " htmlFor="">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="example@gmail.com"
              className="rounded py-2.5 px-4 bg-almostBlack w-full focus:border-bgSixDark duration-150 border border-solid border-transparent"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white  " htmlFor="">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="rounded py-2.5 px-4 bg-almostBlack   w-full focus:border-bgSixDark duration-150 border border-solid border-transparent"
            />
          </div>
        </div>

        <div className="flex justify-center sm:justify-start items-center gap-3">
          <Button backgroundColor={"green.400"}>Save changes</Button>
          <Button
            onClick={() => {
              history.back();
            }}
            colorScheme="whiteAlpha"
            variant="outline"
          >
            cancel
          </Button>
        </div>
      </div>

      <VidsContainer id={_user.userInfo._id} />

      <DeleteAccountContainer />
    </div>
  );
};

export default YourAccount;
