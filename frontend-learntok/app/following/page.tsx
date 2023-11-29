/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react/jsx-key */

"use client";

import { Suspense, useEffect, useState } from "react";
import Loading from "../loading";
import { fcApi } from "@/libs/fcApi";
import Card from "@/components/main/Card";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

const FollowingVidsPage = async () => {
  const _user = useSelector((state: RootState) => state.user);
  const [learnTokVideos, setLearnTokVideos] = useState<VideoProp[]>([]);

  const fetchData = async () => {
    const data = await fcApi.fetchFollowingVids(_user.userInfo._id);
    setLearnTokVideos(data);
  };

  useEffect(() => {
    fetchData();
  }, [_user.userInfo._id]);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        {learnTokVideos.map((video) => (
          <Card card={video} key={video.video_id} />
        ))}
      </Suspense>
    </div>
  );
};

export default FollowingVidsPage;
