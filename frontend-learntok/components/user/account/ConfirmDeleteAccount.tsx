"use client";
import {
  updateGuestInfo,
  updateUserInfo,
} from "@/redux/features/user/userSlice";
import { RootState } from "@/redux/store/store";
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
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const ConfirmDeleteAccount = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const _theme = useTheme();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const _user = useSelector((state: RootState) => state.user);

  const DeleteUser = async () => {
    const result = await fcApi.DeleteUser(_user.userInfo._id);
    if (result) {
      localStorage.clear();
      const userInfo = {
        _id: "",
        email: "",
        favCategories: [],
        followers: [],
        following: [],
        password: "",
        fullName: "",
        joined: "",
        pfpUrl: "",
        userNmae: "",
      };
      dispatch(updateUserInfo(userInfo));
      dispatch(updateGuestInfo({ isUser: false }));
      onClose();
      location.reload();
    }
  };

  useEffect(() => {}, [_user.userInfo._id]);

  return (
    <>
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
            position={"relative"}
            backgroundColor={`${_theme?.value ? "#232323" : ""}`}
            color={`${_theme?.value ? "white" : ""}`}
          >
            <div className="absolute top-0 -translate-y-1/2 text-3xl shadow-2xl text-red-600 center_all right-0  w-full ">
              <FaTrashAlt />
            </div>
            <AlertDialogHeader>
              Delete your account permanently
            </AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              You are about to delete your account. Are you sure you want to
              proceed? This action cannot be undone , think wisely .
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Link href={"/"}>
                <Button onClick={DeleteUser} colorScheme="red" ml={3}>
                  Delete account
                </Button>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="flex sm:justify-start justify-center">
        <Button onClick={() => onOpen()} colorScheme="red">
          Delete Account
        </Button>
      </div>
    </>
  );
};

export default ConfirmDeleteAccount;
