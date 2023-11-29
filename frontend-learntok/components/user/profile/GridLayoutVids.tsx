import VideoCard from "./VideoCard";

type Props = {
  userVids: VideoProp[];
};

const GridLayoutVids = ({ userVids }: Props) => {
  return (
    <section className="flex gap-4 justify-center sm:justify-start flex-wrap items-center">
      {userVids.map((vid) => (
        <VideoCard key={vid.video_id.toString()} videoInfo={vid} />
      ))}
    </section>
  );
};

export default GridLayoutVids;
