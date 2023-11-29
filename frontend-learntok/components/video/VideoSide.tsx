import ColorSync from "../general/ColorSync";

type Props = {
  url: string;
};

const VideoSide = ({ url }: Props) => {
  return (
    <div className="w-1/2 h-full center_all py-3 ">
      <div className="h-full" >
        <video controls className="h-full rounded-md" src={url}></video>
      </div>
    </div>
  );
};

export default VideoSide;
