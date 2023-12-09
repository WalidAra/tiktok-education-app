import ColorSync from "../general/ColorSync";
import Discover from "./for you/Discover";
import Footer from "./for you/Footer";
import SuggestedAccount from "./for you/SuggestedAccount";

const ForYou = () => {
  return (
    <ColorSync
      key={undefined}
      style={
        "w-full overflow-y-auto flex flex-col justify-between h-forYou xl:h-forYou_xl xl:rounded  p-2 gap-3"
      }
      onDark={"bg-secondaryDark"}
      onWhite={""}
    >
      <Discover />
      <SuggestedAccount />
      <Footer />
    </ColorSync>
  );
}

export default ForYou