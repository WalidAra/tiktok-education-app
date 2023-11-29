/* eslint-disable @next/next/no-img-element */
"use client";

import { RootState } from "@/redux/store/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import ColorSync from "../general/ColorSync";

const UserShortCutDef = () => {
  const [_user, setUser] = useState<RootState["user"]>(
    useSelector((state: RootState) => state.user)
  );

  return (
    <div className="flex items-center gap-2">
      <img
        src={_user.userInfo.pfpUrl}
        alt={_user.userInfo.userName}
        className="w-11 h-11 rounded-full"
      />
      <div>
        <ColorSync
          key={undefined}
          onDark="text-white"
          onWhite=""
          style="text-base font-medium"
        >
          {_user.userInfo.userName}
        </ColorSync>

        <p className="text-sm ">{_user.userInfo.fullName}</p>
      </div>
    </div>
  );
};

export default UserShortCutDef;
