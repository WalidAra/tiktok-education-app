"use client";
import { useTheme } from "@/context/Theme";
import { fcApi } from "@/libs/fcApi";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  vid: VideoProp | null;
};

function EditVidPopUp({ isOpen, onClose, onOpen, vid }: Props) {
  const _theme = useTheme();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const HandleUpdateVideoStates = async () => {
    const result = await fcApi.updateVideoProps({
      description,
      title,
      videoID: vid?.video_id?.toString(),
    });
    console.log(result);

    setTitle("");
    setDescription("");
    onClose();
  };

  return (
    <div className="absolute top-0 left-0">
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent
          backgroundColor={`${_theme?.value ? "#232323" : ""}`}
          color={`${_theme?.value ? "white" : ""}`}
        >
          <AlertDialogHeader>A other message</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder={`${vid?.title}`}
                  className="rounded py-2.5 px-4 bg-bgTwoDark w-full focus:border-bgSixDark duration-150 border border-solid border-transparent"
                />
              </div>
              <div className="flex flex-col gap-2">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  placeholder={`${vid?.description}`}
                  className="rounded py-2.5 px-4 bg-bgTwoDark w-full focus:border-bgSixDark duration-150 border border-solid border-transparent"
                ></textarea>
              </div>
            </div>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              backgroundColor="green.400"
              ml={3}
              onClick={HandleUpdateVideoStates}
            >
              Save
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default EditVidPopUp;
