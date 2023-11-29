/* eslint-disable @next/next/no-img-element */
import ColorSync from "@/components/general/ColorSync";
import { fcApi } from "@/libs/fcApi";
import { FaHeart } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa6";
import CopyLink from "./CopyLink";

type Props = {
  poster_id: string;
  videoTitle: string;
  like_count: number;
  comments_count: number;
};

const HeadPoster = async ({
  poster_id,
  videoTitle,
  like_count,
  comments_count,
}: Props) => {
  const user: UserProp = await fcApi.fetchUserByID(poster_id);

  return (
    <div className="w-full p-4 flex flex-col gap-3 border-b border-gray-400">
      <ColorSync
        key={undefined}
        style={"w-full rounded-lg p-3 flex flex-col gap-2"}
        onDark={"bg-almostBlack"}
        onWhite={""}
      >
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <img
              src={user.pfpUrl}
              className="w-8 h-8 rounded-full"
              alt={user.userName}
            />

            <div className="flex flex-col ">
              <h1 className="text-sm font-semibold"> {user.userName} </h1>
              <p className="text-xs"> {user.fullName} </p>
            </div>
          </div>

          <button className="rounded py-2 px-5 bg-main text-white font-medium">
            Follow
          </button>
        </div>

        <h1> {videoTitle} </h1>
      </ColorSync>

      <div className="w-full text-lg ">
        <div className="w-full p-2 flex items-center gap-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full center_all test">
              <FaHeart />
            </div>
            <p className="text-sm"> {like_count} </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full center_all test">
              <FaCommentDots />
            </div>

            <p className="text-sm">{comments_count} </p>
          </div>
        </div>
      </div>

      <CopyLink />
    </div>
  );
};

export default HeadPoster;
