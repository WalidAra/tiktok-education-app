/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import DelActionOfVid from "./ConfirmAction";
import EditVidPopUp from "./EditVidPopUp";
import { FaTrash } from "react-icons/fa";
import { IconButton as Btn } from "@chakra-ui/react";
import { ChevronDownIcon, EditIcon } from "@chakra-ui/icons";
import ColorSync from "@/components/general/ColorSync";
import { Button, IconButton, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fcApi } from "@/libs/fcApi";

type Props = {
  id: string;
};

const VidsContainer = ({ id }: Props) => {
  const [selectedVidToDel, setSelectedVidToDel] = useState<VideoProp | null>(
    null
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();
  const [iconState, setIconState] = useState<boolean>(false);
  const [userVids, setUserVids] = useState<VideoProp[]>([]);
  const fetchVids = async () => {
    const data: VideoProp[] = await fcApi.fetchUserVids(id);
    setUserVids(data);

    if (data.length === 0) {
      setIconState(true);
    }
  };

  useEffect(() => {
    fetchVids();
  }, [id]);
  return (
    <>
      <DelActionOfVid
        vid={selectedVidToDel}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      />
      <EditVidPopUp
        isOpen={isEdit}
        onOpen={onOpenEdit}
        onClose={onCloseEdit}
        vid={selectedVidToDel}
      />

      <div className="w-full flex flex-col gap-2">
        <div
          className={`w-full  duration-300 flex flex-wrap xl:justify-normal p-5 sm:justify-evenly gap-5 justify-center ${
            iconState ? "h-auto" : "h-[470px] overflow-hidden"
          }`}
        >
          {userVids &&
            userVids.map((v) => (
              <div key={v.video_id} className="flex">
                <div className="w-60 h-[430px] center_all bg-black rounded-xl overflow-hidden">
                  <video controls className="w-full h-auto" src={v.url}></video>
                </div>

                <div className="p-3 flex gap-3 flex-col">
                  <Btn
                    isRound={true}
                    variant="solid"
                    colorScheme="blackAlpha"
                    color={"gray.400"}
                    aria-label="Done"
                    fontSize="20px"
                    icon={<EditIcon />}
                    onClick={() => {
                      setSelectedVidToDel(v);
                      onOpenEdit();
                    }}
                  />
                  <Btn
                    onClick={() => {
                      setSelectedVidToDel(v);
                      onOpen();
                    }}
                    isRound={true}
                    variant="solid"
                    colorScheme="blackAlpha"
                    color={"red.500"}
                    aria-label="Done"
                    fontSize="20px"
                    icon={<FaTrash />}
                  />
                </div>
              </div>
            ))}
        </div>

        <div className="center_all p-4">
          <Btn
            onClick={() => {
              setIconState((prev) => !prev);
            }}
            isRound={true}
            variant="solid"
            colorScheme="blackAlpha"
            color={"gray.400"}
            aria-label="Done"
            fontSize="20px"
            icon={<ChevronDownIcon />}
            className={`${iconState ? "rotate-180" : ""} duration-300`}
          />
        </div>
      </div>
    </>
  );
};

export default VidsContainer;
