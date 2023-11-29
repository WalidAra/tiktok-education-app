"use client";

import { RootState } from "@/redux/store/store";
import { useTheme } from "@/context/Theme";
import { fcApi } from "@/libs/fcApi";
import { IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useSelector } from "react-redux";

type Props = {
  videoID: string;
  setComments: (p: (prev: CommentProp[]) => CommentProp[]) => void;
};

const CommentInput = ({ videoID, setComments }: Props) => {
  const [textValue, setTextValue] = useState<string>("");
  const _theme = useTheme();
  const _user = useSelector((state: RootState) => state.user);

  const fetchSendData = async () => {

    const newComment: {
      usercomment: string;
      commenter_id: string;
      video_id: string;
    } = {
      commenter_id: "65622e2c469aa46515e0055e",
      usercomment: textValue,
      video_id: videoID,
    };

    if (textValue.trim() !== "") {
      const result = await fcApi.AddNewComment({ info: newComment });
      
      if (result) {
        setComments((prev) => [
          {
            comment_id: "",
            commenter_id: newComment.commenter_id,
            usercomment: newComment.usercomment,
            video_id: newComment.video_id,
          },
          ...prev,
        ]);
        setTextValue("");
      }
    } else {
      throw new Error("Error: Cannot add an empty comment.");
    }
  };

  return (
    <div className="py-3 px-5 border-t border-bg-gray-300  w-full center_all">
      <div className="flex w-full gap-2 items-center">
        <input
          value={textValue}
          placeholder="add a comment"
          className={` ${
            _theme?.value ? "bg-primaryDark" : ""
          } py-2 px-4 w-full rounded-md block`}
          onChange={(e) => setTextValue(e.target.value)}
          type="text"
        />
        <IconButton
          colorScheme="blackAlpha"
          onClick={fetchSendData}
          icon={<AiOutlineSend />}
          aria-label={"copy"}
        />
      </div>
    </div>
  );
};

export default CommentInput;
