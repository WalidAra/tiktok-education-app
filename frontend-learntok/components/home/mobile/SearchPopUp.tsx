"use client";
import { SearchIcon } from "@chakra-ui/icons";
import { IconButton, Input } from "@chakra-ui/react";
import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { IoMdSend } from "react-icons/io";
import { useRouter } from "next/navigation";
import { CloseButton } from "@chakra-ui/react";

const SearchPopUp = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      {isOpen && (
        <div
          data-aos="fade-up"
          className="absolute z-40 top-0 left-0 w-screen h-screen backdrop-blur-sm p-5"
        >
          <div className="bg-white rounded-lg p-3 flex flex-col gap-3">
            <div className="flex justify-end">
              <CloseButton onClick={() => setIsOpen(false)} />
            </div>
            <div className="w-full z-50 flex items-center gap-1 ">
              <Input
                type="text"
                className="py-2 px-4 rounded-md border border-solid border-ccc"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="You looking for"
              />
              <button
                onClick={() => {
                  if (searchValue !== "") {
                    setIsOpen(false);
                    router.push(`/search/${searchValue}`);
                  }
                }}
                className="p-2 rounded-md bg-black text-white text-xl"
              >
                <IoMdSend />
              </button>
            </div>
          </div>
        </div>
      )}

      <IconButton
        onClick={() => setIsOpen((prev) => !prev)}
        colorScheme="blackAlpha"
        isRound={true}
        aria-label="Search database"
        icon={<SearchIcon />}
      />
    </div>
  );
};

export default SearchPopUp;
