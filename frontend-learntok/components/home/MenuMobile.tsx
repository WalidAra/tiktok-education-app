import SearchPopUp from "./mobile/SearchPopUp";
import VidSwitcher from "./mobile/VidSwitcher";

const MenuMobile = () => {
  return (
    <div className="w-full p-3 absolute top-0 left-0 sm:hidden flex justify-between items-center z-20 bg-gradient-to-t from-transparent to-black">
      <div className="inline-block"></div>
      <div className="inline-block">
        <VidSwitcher />
      </div>
      <div className="inline-block">

          <SearchPopUp />
      </div>
    </div>
  );
};

export default MenuMobile;
