"use client";
import React, { useState } from "react";
type Props = {
  video: VideoProp;
};

const VideoCard = ({ video }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="relative sm:h-80 sm:w-60 w-full h-searchVid overflow-hidden cursor-pointer rounded "
      onMouseEnter={handleTogglePlay}
      onMouseLeave={handleTogglePlay}
    >
      <video
        controls
        className="w-full h-full object-cover"
        src={video.url}
        autoPlay={isPlaying}
        loop
        muted={!isPlaying}
      />
    </div>
  );
};

export default VideoCard;
