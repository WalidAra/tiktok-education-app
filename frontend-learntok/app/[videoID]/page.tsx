import CommentSide from "@/components/video/CommentSide";
import VideoSide from "@/components/video/VideoSide";
import { fcApi } from "@/libs/fcApi";

type Props = {
  params: {
    videoID: string;
  };
};

const VideoPage = async ({ params: { videoID } }: Props) => {
  const videoData: VideoProp[] = await fcApi.fetchVidByID(videoID);

  return (
    <div className="w-full h-full flex ">
      <VideoSide url={videoData[0].url} />
      <CommentSide video={videoData[0]} />
    </div>
  );
};

export default VideoPage;
