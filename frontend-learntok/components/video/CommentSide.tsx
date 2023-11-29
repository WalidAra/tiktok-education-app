import CommentContainer from "./comment side/CommentContainer";
import HeadPoster from "./comment side/HeadPoster";

type Props = {
  video: VideoProp;
};

const CommentSide = ({ video }: Props) => {
  return (
    <div className="w-1/2 h-full ">
      <HeadPoster
        comments_count={video.comments.length}
        like_count={video.likes_count}
        videoTitle={video.title}
        poster_id={video.poster_id}
      />

      <CommentContainer video_id={video.video_id} Comments={video.comments} />
    </div>
  );
};

export default CommentSide;
