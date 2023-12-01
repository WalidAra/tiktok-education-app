/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */

import IconButton from "../asidebar/IconButton";
import { VscChromeClose } from "react-icons/vsc";
import AsideList from "../asidebar/AsideList";
import AsideLi from "../asidebar/AsideLi";
import { AiOutlineUser, AiFillApi, AiOutlineUserDelete } from "react-icons/ai";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import { MdDarkMode, MdLanguage } from "react-icons/md";
import ToggleSWitcher from "../asidebar/ToggleSwitcher";
import UserShortCutDef from "../asidebar/UserShortCutDef";
import ColorSync from "../general/ColorSync";
import YourAccountLink from "../asidebar/YourAccountLink";
import SignOutOption from "../asidebar/SignOut";

const AsideBar = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: (p: (prev: boolean) => boolean) => void;
}) => {
  const id = localStorage.getItem("userID");

  return (
    <ColorSync
      key={undefined}
      onDark="bg-almostBlack"
      onWhite="bg-bgWhiteTwo"
      style={` ${
        active ? "" : "translate-x-full"
      }  duration-300 translate-x-0 w-[290px] h-screen absolute top-0 right-0 z-50 px-2 py-3`}
    >
      <div className="w-full  justify-between flex items-center py-4 px-3">
        <UserShortCutDef />

        <IconButton
          method={() => {
            setActive((prev) => !prev);
          }}
        >
          <VscChromeClose />
        </IconButton>
      </div>

      <AsideList>
        <Link href={`/user/${id}`}>
          <AsideLi icon={<AiOutlineUser />} text="your profile" children />
        </Link>
      </AsideList>

      <AsideList>
        <YourAccountLink />
        <AsideLi
          children
          icon={<AiOutlineUserDelete />}
          text="profile visibility"
        />
        <AsideLi children icon={<MdLanguage />} text="language" />
        <AsideLi icon={<MdDarkMode />} text="Dark Theme">
          <ToggleSWitcher />
        </AsideLi>
      </AsideList>

      <AsideList>
        <AsideLi
          icon={<AiFillApi />}
          text="API (only for developers)"
          children
        />

        <AsideLi icon={<BiSupport />} text="LearnTok support" children />
      </AsideList>

      <div className="w-full">
        <SignOutOption />
      </div>
    </ColorSync>
  );
};

export default AsideBar;
