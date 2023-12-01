"use client";
import { IconButton as Btn } from "@chakra-ui/react";
import ColorSync from "@/components/general/ColorSync";
import { useTheme } from "@/context/Theme";
import UploadPBtn from "@/components/upload/UploadPBtn";
import Link from "next/link";
import { FaCloudUploadAlt, FaTrash } from "react-icons/fa";
import educationTopics from "@/utils/Topics";
import { useEffect, useState } from "react";
import { UploadButton } from "@/src/utils/uploadthing";
import { RootState } from "@/redux/store/store"; 
import { useSelector } from "react-redux";
import { fcApi } from "@/libs/fcApi";
import { useRouter } from "next/navigation";

const UploadPage = () => {
  const _user = useSelector((state: RootState) => state.user).userInfo;
  console.log(_user);
  const router = useRouter();

  const _theme = useTheme();
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("");
  const [videoInfos, setVideoInfos] = useState<VidDetails>({
    category_id: 0,
    poster_id: "",
    description: "",
    url: "",
    likes_count: 0,
    title: "",
  });

  async function UploadToServer() {
    console.log(videoInfos);

    const result = await fcApi.UploadNewVideo(videoInfos);
    if (result) {
      router.push("/");
    }
  }

  useEffect(() => {
    setVideoInfos((prev) => ({ ...prev, poster_id: _user._id }));
  }, [_user._id]);

  return (
    <div
      className={`w-full mt-10 sm:m-0 p-3 sm:p-10 center_all xl:h-videoContainer_xl sm:h-videoContainer_sm ${
        _theme?.value ? "bg-bgTwoDark" : ""
      }`}
    >
      <div className="grid mt-10 sm:m-0 grid-rows-auto1fr gap-5 h-full w-full">
        <div className="flex flex-col gap-2 ">
          <ColorSync
            key={undefined}
            onDark="text-white"
            onWhite=""
            style="capitalize font-medium text-xl"
          >
            <h1>upload video </h1>
          </ColorSync>
          <ColorSync key={undefined} onDark="" onWhite="" style="text-sm">
            <p>Post a video to your account</p>
          </ColorSync>
        </div>

        <div className=" w-full gap-14 flex-wrap sm:flex-nowrap flex">
          {isSelected ? (
            <div className="w-full  flex justify-center items-center sm:w-auto sm:inline-block">
              <div className="grid grid-rows-_1frAuto w-[260px] h-[430px]">
                <div
                  className={` rounded-lg overflow-hidden center_all ${
                    _theme?.value ? "bg-black" : ""
                  }`}
                >
                  <video controls className="h-full w-auto">
                    <source src={videoInfos.url} />
                  </video>
                </div>

                <div className=" flex justify-between items-center py-1 px-3 w-full">
                  <ColorSync
                    key={undefined}
                    onDark=""
                    onWhite=""
                    style="font-medium text-sm"
                  >
                    <p> {fileName} </p>
                  </ColorSync>

                  <Btn
                    isRound={true}
                    variant="solid"
                    colorScheme="blackAlpha"
                    color={"red.500"}
                    aria-label="Done"
                    fontSize="20px"
                    icon={<FaTrash />}
                    onClick={() => setIsSelected(false)}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-center items-center sm:w-auto sm:inline-block ">
              <div className=" border-dashed rounded-xl border-4 border-gray-200 flex  flex-col justify-center items-center  outline-none  w-[260px] h-[430px] p-3 cursor-pointer ">
                <label className="cursor-pointer ">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col justify-center items-center">
                      <p className="font-bold text-xl">
                        <FaCloudUploadAlt className="text-gray-300 text-6xl" />
                      </p>
                      <p className="text-xl font-semibold">
                        Select video to upload
                      </p>
                    </div>

                    <p className="text-gray-400 text-center mt-10 text-sm leading-10">
                      MP4 or WebM or ogg <br />
                      720x1280 resolution or higher <br />
                      Up to 10 minutes <br />
                      Less than 2 GB
                    </p>
                    <div className="w-full">
                      <UploadButton
                        endpoint="mediaPost"
                        onClientUploadComplete={(res) => {
                          setVideoInfos((prev) => ({
                            ...prev,
                            url: res[0].fileUrl,
                          }));
                          setFileName(res[0].fileName);
                          setIsSelected(true);
                        }}
                        onUploadError={(error: Error) => {
                          // Do something with the error.
                          alert(`ERROR! ${error.message}`);
                        }}
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>
          )}

          <div className="flex flex-col w-full gap-4 p-2 ">
            <div>
              <ColorSync
                key={undefined}
                onDark=""
                onWhite=""
                style="flex flex-col gap-2 "
              >
                <label
                  className="capitalize  font-medium text-base  text-white"
                  htmlFor=""
                >
                  Title
                </label>

                <input
                  onChange={(e) =>
                    setVideoInfos((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  className={`py-3 px-5 rounded-lg w-full   ${
                    _theme?.value ? " bg-primaryDark" : ""
                  }`}
                  placeholder="Enter the title"
                  type="text"
                />
              </ColorSync>
            </div>

            <div>
              <ColorSync
                key={undefined}
                onDark=""
                onWhite=""
                style="flex flex-col gap-2"
              >
                <label
                  className="capitalize font-medium text-base  text-white"
                  htmlFor=""
                >
                  description
                </label>

                <input
                  onChange={(e) =>
                    setVideoInfos((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  className={`py-3 px-5 rounded-lg w-full   ${
                    _theme?.value ? "bg-primaryDark" : ""
                  }`}
                  placeholder="Enter the description"
                  type="text"
                />
              </ColorSync>
            </div>

            <div>
              <ColorSync
                key={undefined}
                onDark=""
                onWhite=""
                style="flex flex-col gap-2"
              >
                <label
                  className="capitalize font-medium text-base text-white"
                  htmlFor=""
                >
                  category
                </label>
                <select
                  onChange={(e) => {
                    setVideoInfos((prev) => ({
                      ...prev,
                      category_id: Number(e.target.value),
                    }));
                  }}
                  className={`p-2 rounded-md${
                    _theme?.value ? " bg-primaryDark" : ""
                  } outline-none text-md w-60`}
                >
                  {educationTopics.map((topic) => (
                    <option
                      value={topic.id}
                      className={`outline-none capitalize text-md p-2 ${
                        _theme?.value ? "bg-almostBlack" : ""
                      }`}
                      key={topic.id}
                    >
                      {topic.topic}
                    </option>
                  ))}
                </select>
              </ColorSync>
            </div>

            <div className="flex items-center sm:gap-5 w-full justify-around sm:justify-start ">
              <Link href={`/`}>
                <UploadPBtn
                  method={() => {}}
                  style={`bg-white text-black font-medium ${
                    _theme?.value ? "" : ""
                  }`}
                  text="Discard"
                />
              </Link>

              <UploadPBtn
                method={() => {
                  UploadToServer();
                }}
                style={`bg-main text-white text-black font-medium  ${
                  _theme?.value ? "" : ""
                }`}
                text="Post"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
