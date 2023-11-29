/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
"use client"
import { fcApi } from "@/libs/fcApi";

type Props = {
  comment: CommentProp;
  aos:string;
};

const Comment = async ({ comment , aos }: Props) => {
  const Commenter: UserProp = await fcApi.fetchUserByID(comment.commenter_id);
  return (
    <div data-aos={aos} className="flex w-full gap-3 p-2" key={comment.comment_id}>
      <img src={Commenter.pfpUrl} className="w-9 h-9 rounded-full" alt={Commenter.userName} />

      <div className="flex flex-col ">
        <h2 className="text-sm font-medium" > {Commenter.userName} </h2>

        <p className="text-xs font-semibold" > {comment.usercomment} </p>
      </div>
    </div>
  );
};

export default Comment;
