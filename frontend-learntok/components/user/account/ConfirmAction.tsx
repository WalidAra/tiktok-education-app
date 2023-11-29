"use client"
import { useTheme } from "@/context/Theme";
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
import React, { useRef } from "react";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  vid:VideoProp|null;
};

function DelActionOfVid({isOpen , onClose ,onOpen ,vid}:Props) {
  const _theme = useTheme();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const handleDiscard = () => {
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
          <AlertDialogHeader>
            You are about to delete video <span className="underline" >{vid?.title}</span>
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            This will delete your video from catalog Are you sure ?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3} onClick={handleDiscard}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default DelActionOfVid;
