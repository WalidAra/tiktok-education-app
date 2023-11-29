/* eslint-disable react/jsx-key */
"use client";

import { useState } from "react";
import CommentInput from "./CommentInput";
import { useTheme } from "@/context/Theme";
import Comment from "./Comment";

type Props = {
  Comments: CommentProp[];
  video_id: string;
};

const CommentContainer = ({ Comments, video_id }: Props) => {
  const [comments, setComments] = useState(Comments);
  const _theme = useTheme();

  return (
    <div className="w-full h-commentContainer relative overflow-auto">
      {comments.length > 0 ? (
        comments.map((comment) => <Comment aos="" comment={comment} />)
      ) : (
        <div className="w-full h-full center_all">
          <span> there are no comments</span>
        </div>
      )}

      <div
        className={`absolute bottom-0 left-0 w-full bg-gradient-to-t to-transparent ${
          _theme?.value ? "from-secondaryDark" : "'"
        }`}
      >
        <CommentInput setComments={setComments} videoID={video_id} />
      </div>
    </div>
  );
};

export default CommentContainer;
