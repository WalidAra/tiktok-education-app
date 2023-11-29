/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import ColorSync from "@/components/general/ColorSync";

const Account = () => {
  return (
    <Link href={"/user/34"}>
      <ColorSync
        key=""
        onDark="hover:bg-almostBlack "
        onWhite=""
        style="w-full flex items-center gap-3 py-1 px-2 duration-200 hover:rounded-xl cursor-pointer"
      >
        <img
          src="https://i.pinimg.com/564x/c4/db/be/c4dbbec1cf029a645f74b3cb1a727aa6.jpg"
          alt=""
          className="w-9 h-9 rounded-full"
        />

        <div>
          <ColorSync key="" onDark="text-white" onWhite="" style="">
            <p className="text-sm font-semibold">Exotic Ara</p>
          </ColorSync>
          <ColorSync key="" onDark="text-gray-400" onWhite="" style="">
            <p className="text-sm ">Walid Ara</p>
          </ColorSync>
        </div>
      </ColorSync>
    </Link>
  );
};

export default Account;
