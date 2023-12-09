import ColorSync from "../general/ColorSync";
import NavBar from "../main/NavBar";

const Main = ({ children }: ChildrenProps) => {
  return (
    <main className="xl:py-3 sm:pl-1.5 xl:pr-3 h-screen  block">
      <NavBar />

      <ColorSync
        key={undefined}
        style={
          "w-full h-screen overflow-auto sm:h-main xl:h-main_xl scroll-snap-type"
        }
        onDark={"bg-secondaryDark"}
        onWhite={""}
      >
        {children}
      </ColorSync>
    </main>
  );
};

export default Main;
