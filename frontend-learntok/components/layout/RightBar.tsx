import BlackLayer from "../general/BlackLayer";
import AsideBar from "../home/AsideBar";

const RightBar = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: (p: (prev: boolean) => boolean) => void;
}) => {
  return (
    <>
      {active ? (
        <>
          <BlackLayer
            layerStyle=""
            method={() => {
              setActive((prev) => !prev);
            }}
            style={`${active ? "" : "hidden"}`}
            width={300}
          >
            {""}
          </BlackLayer>
        </>
      ) : (
        <></>
      )}

      <AsideBar active={active} setActive={setActive} />
    </>
  );
};

export default RightBar;
