/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import ColorSync from "@/app/components/general/ColorSync";
import { RootState } from "@/app/redux/store/store";
import FcFetcher from "@/lib/FC";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

/* eslint-disable @next/next/no-img-element */

type Props = {
  userPfp: string;
  fullName: string;
  userName: string;
  numFollowing: number;
  Followers: FollowerProp[];
  postedVids: number;
  userID: string;
};

const UserHeader = ({
  userID,
  fullName,
  userName,
  Followers,
  numFollowing,
  userPfp,
  postedVids,
}: Props) => {
  const _user = useSelector((state: RootState) => state.user);
  const [isFollowed, setIsFollowed] = useState<boolean>(false);

  useEffect(() => {
    if (Followers.find((follower) => follower._id === _user.userInfo._id)) {
      setIsFollowed(true);
    } else {
      setIsFollowed(false);
    }
  }, [_user.userInfo._id]);

  return (
    <div className="flex flex-col gap-5 mt-12 sm:m-0">
      <div className="flex gap-6">
        <img src={userPfp} className="w-24 h-24 rounded-full" alt="" />

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <ColorSync
              key={undefined}
              onDark="text-white"
              onWhite=""
              style="text-2xl font-medium"
            >
              <h1>{userName}</h1>
            </ColorSync>
            <ColorSync
              key={undefined}
              onDark=""
              onWhite=""
              style="text-sm font-base"
            >
              <h3> {fullName} </h3>
            </ColorSync>
          </div>
          {userID !== _user.userInfo._id && (
            <Button
              onClick={async () => {
                setIsFollowed((prev) => !prev);
                await FcFetcher.ReverseFollowingAction({
                  followedID: userID,
                  userID: _user.userInfo._id,
                  op: !isFollowed,
                });
              }}
            >
              {isFollowed ? "Following" : "Follow"}
            </Button>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <p className="font-medium flex items-center gap-2">
          <ColorSync
            key={undefined}
            onDark="text-bgSevenDark"
            onWhite=""
            style=""
          >
            {Followers.length}
          </ColorSync>

          <ColorSync
            key={undefined}
            onDark="text-white"
            onWhite=""
            style="capitalize"
          >
            <span> followers</span>
          </ColorSync>
        </p>
        <p className="font-medium flex items-center gap-2">
          <ColorSync
            key={undefined}
            onDark="text-bgSevenDark"
            onWhite=""
            style=""
          >
            {numFollowing}
          </ColorSync>

          <ColorSync
            key={undefined}
            onDark="text-white"
            onWhite=""
            style="capitalize"
          >
            <span> following</span>
          </ColorSync>
        </p>
        <p className="font-medium flex items-center gap-2">
          <ColorSync
            key={undefined}
            onDark="text-bgSevenDark"
            onWhite=""
            style=""
          >
            {postedVids}
          </ColorSync>

          <ColorSync
            key={undefined}
            onDark="text-white"
            onWhite=""
            style="capitalize"
          >
            <span> videos</span>
          </ColorSync>
        </p>
      </div>
    </div>
  );
};

export default UserHeader;
