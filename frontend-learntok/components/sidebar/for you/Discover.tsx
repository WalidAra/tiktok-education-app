"use client";

import MyIconButton from "@/components/general/MyIconButton";
import { useTheme } from "@/context/Theme";
import educationTopics from "@/utils/Topics";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Discover = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const _theme = useTheme();
  const topicStyle =
    "xl:border-2 xl:border-gray-300 px-3 py-1 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer ";

  return (
    <div
      className={`${
        isOpen ? "" : "overflow-hidden h-1/3"
      } flex flex-col duration-75 gap-2 w-full relative`}
    >
      <div
        className={`w-full absolute center_all h-16 bg-gradient-to-t to-transparent bottom-0 left-0 ${
          _theme?.value ? "from-secondaryDark" : "from-secondaryWhite"
        }`}
      >
        <div className="absolute bottom-2" onClick={() => setIsOpen((prev) => !prev)}>
          <MyIconButton style="text-xl">
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </MyIconButton>
        </div>
      </div>

      <p className="text-gray-500 font-semibold hidden xl:block">
        Popular Topics
      </p>

      <div className="w-full flex xl:flex-wrap gap-1.5 sm:flex-col xl:flex-row">
        {educationTopics.map((topic) => (
          <div key={`${topic.id}-${topic.topic}`} className={`${topicStyle}`}>
            <span className="font-bold  ">{topic.icon}</span>
            <span className={`font-medium text-md hidden xl:block capitalize`}>
              {topic.topic}
            </span>
          </div>
        ))}

        <div className="w-full h-10" >

        </div>
      </div>
    </div>
  );
};

export default Discover;
