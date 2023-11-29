"use client";
import React, { useRef, useEffect, useState } from "react";

type Props = {
  id: string;
  userID: string;
  username: string;
  pfp: string;
  description: string;
  url: string;
  comments: CommentProp[];
};

const Video = ({
  url,
  description,
  userID,
  pfp,
  username,
  comments,
  id,
}: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, [url]);

  return (
    <div className="relative w-full sm:pb-3 h-screen sm:h-video xl:h-video_xl center_all z-0">
      <div className=" h-full bg-black center_all overflow-hidden sm:rounded-lg">
        <video
          autoPlay
          controls
          ref={videoRef}
          className=" w-full h-screen xl:w-[278px] sm:w-[280px] sm:h-auto "
          loop
        >
          <source src={url} />
        </video>
      </div>
    </div>
  );
};

export default Video;
