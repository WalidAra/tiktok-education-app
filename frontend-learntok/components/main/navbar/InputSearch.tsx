"use client";
import { useTheme } from "@/context/Theme";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const InputSearch = () => {
  const _theme = useTheme();
  const router = useRouter();
  const [SearchValue, setSearchValue] = useState<string>("");
  const [currentValue, setCurrentValue] = useState<string>("");
  const [isBlue, setIsBlue] = useState<boolean>(false);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchValue(currentValue);
      setCurrentValue("");
      router.push(`/search/${currentValue}`);
    }
  };

  return (
    <div className="relative">
      <div
        className={`absolute top-1/2 left-3 -translate-y-1/2 text-xl duration-200 ${
          isBlue ? "text-main" : ""
        } `}
      >
        <IoMdSearch />
      </div>

      <input
        value={currentValue}
        onChange={(e) => {
          setCurrentValue(e.target.value);
        }}
        onKeyPress={handleKeyPress}
        onFocus={() => {
          setIsBlue(true);
        }}
        onBlur={() => {
          setIsBlue(false);
        }}
        type="text"
        className={`rounded-3xl py-2 px-3 pl-10 ${
          _theme?.value ? "bg-backgroundDark" : ""
        } xl:w-96 sm:w-64  duration-200`}
        placeholder="Type to Learn Something New"
      />
    </div>
  );
};

export default InputSearch;
