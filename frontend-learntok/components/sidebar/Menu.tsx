import ActiveSiteProvider from "@/context/ActiveVids";
import HomeLink from "./menu/HomeLink";
import FollowingLink from "./menu/FollowingLink";
import ColorSync from "../general/ColorSync";

const Menu = () => {
  return (
    <ColorSync
      key={undefined}
      style={"flex flex-col w-full p-2"}
      onDark={"bg-secondaryDark xl:rounded"}
      onWhite={"border-b border-ccc"}
    >
      <ActiveSiteProvider>
        <HomeLink />
        <FollowingLink />
      </ActiveSiteProvider>
    </ColorSync>
  );
};

export default Menu;
