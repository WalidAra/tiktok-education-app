import ColorSync from "../general/ColorSync";
import Poster from "./card/Poster";
import Reactors from "./card/Reactors";
import Video from "./card/Video";

type Props = {
  card: VideoProp;
};

const Card = ({ card }: Props) => {
  return (
    <ColorSync
      key={undefined}
      style={
        "scroll-snap-align w-full z-0 h-screen xl:w-[500px] sm:w-96 sm:h-full m-auto relative "
      }
      onDark={""}
      onWhite={""}
    >



      <Poster description={card.description} poster={card.poster} />
      <Reactors videoID={card.video_id.toString()} />
      <Video
        userID={card.poster._id}
        comments={card.comments}
        description={card.description}
        id={card.video_id.toString()}
        pfp={card.poster.pfpUrl}
        username={card.poster.userName}
        url={card.url}
      />
    </ColorSync>
  );
};

export default Card;
