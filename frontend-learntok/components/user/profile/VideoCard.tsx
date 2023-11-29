import ColorSync from "@/app/components/general/ColorSync";
import Link from "next/link";
import React from "react";
type Props = {
  videoInfo: VideoProp;
  key: string;
};

const VideoCard = ({ videoInfo, key }: Props) => {
  return (
    <Link href={`/${videoInfo.video_id}`}>
      <ColorSync
        key={key}
        onDark="bg-black"
        onWhite=""
        style="w-full rounded overflow-hidden h-screen sm:w-60 sm:h-80 m-auto"
      >
        <video controls className="w-full h-full">
          <source src={videoInfo.url} />
        </video>
      </ColorSync>
    </Link>
  );
};

export default VideoCard;
