"use client";

import { useTheme } from "@/context/Theme";
import { useSearch } from "@/context/WhichSearch";

const NavSearch = () => {
  const search = useSearch();
  const _theme = useTheme();

  return (
    <div className=" p-1.5  ">
      <div
        className={`inline-flex relative items-center gap-3 overflow-hidden rounded-3xl  ${_theme?.value ? "bg-black":""}`}
      >
        <div
          className={`absolute h-full left-0 top-0 w-24 duration-150 rounded-3xl ${
            _theme?.value ? "bg-almostBlack" : ""
          } ${search?.value ? "translate-x-[113%]" : ""}`}
        ></div>
        <button
          onClick={() => search?.setValue(false)}
          className="py-2 w-24 rounded duration-150 hover:opacity-50 z-10 "
        >
          Videos
        </button>
        <button
          onClick={() => search?.setValue(true)}
          className="py-2 w-24 rounded duration-150 hover:opacity-50 z-10 "
        >
          Accounts
        </button>
      </div>
    </div>
  );
};

export default NavSearch;
