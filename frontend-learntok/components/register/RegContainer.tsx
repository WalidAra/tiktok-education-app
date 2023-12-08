import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import MainLog from "./container/MainLog";
import { CloseButton } from "@chakra-ui/react";
import LogoNav from "../main/navbar/LogoNav";
import IconButton from "../general/IconButton";
import { IoIosArrowBack } from "react-icons/io";
import Login from "./container/Login";
import SignUp from "./container/SignUp";
import ColorSync from "../general/ColorSync";

type Props = {
  isShow: boolean;
  setIsShow: (p: (value: boolean) => boolean) => void;
};

const RegContainer = ({ isShow, setIsShow }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [prevIndex, setPrevIndex] = useState<number>(1);
  const [Height, setHeight] = useState<string>("h-[230px]");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div data-aos="fade-up">
        <ColorSync
          key={undefined}
          onDark="bg-secondaryDark"
          onWhite="bg-secondaryWhite"
          style="w-[95vw] sm:w-[400px] relative overflow-hidden rounded-lg "
        >
          <ColorSync
            key=""
            onDark="border-gray-400"
            onWhite=""
            style="flex w-full items-center justify-between p-5 border-b "
          >
            <div>
              {currentIndex !== 1 && (
                <IconButton
                  method={() => {
                    setCurrentIndex(prevIndex);
                    if (prevIndex === 1) {
                      setHeight("h-[230px]");
                    }
                  }}
                >
                  <IoIosArrowBack />
                </IconButton>
              )}
            </div>

            <p className="flex items-center gap-2">
              <LogoNav />
            </p>
            <CloseButton size="lg" onClick={() => setIsShow((prev) => !prev)} />
          </ColorSync>

          <div
            className={`w-full flex duration-200 ease-in transition-transform transform -translate-x-full  ${Height}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <SignUp />
            <MainLog setHeight={setHeight} setCurrentIndex={setCurrentIndex} />
            <Login />
          </div>

          <ColorSync key={undefined} onDark="bg-black" onWhite="" style="">
            <div className={`px-4 py-3 text-xs text-center `}>
              <p>
                By continuing, you agree to LearnTok
                <ColorSync
                  key={undefined}
                  onDark="text-white"
                  onWhite=""
                  style="inline-block"
                >
                  <span>&nbsp; Terms of Service</span>
                </ColorSync>
                &nbsp; and confirm that you have read LearnTok
                <ColorSync
                  key={undefined}
                  onDark="text-white"
                  onWhite=""
                  style="inline-block"
                >
                  <span> &nbsp; Privacy Policy</span>
                </ColorSync>
              </p>
            </div>
          </ColorSync>

          <div className="text-center text-sm px-4 py-3">
            {currentIndex === 0 ? (
              <p>
                Already have a account ?
                <span
                  onClick={() => {
                    setCurrentIndex(2);
                    setHeight("h-[340px]");
                  }}
                  className="text-main cursor-pointer hover:underline "
                >
                  &nbsp; Log in
                </span>
              </p>
            ) : (
              <p>
                Dont have a account ?
                <span
                  onClick={() => {
                    setCurrentIndex(0);
                    setHeight("h-[450px]");
                  }}
                  className="text-main cursor-pointer hover:underline "
                >
                  &nbsp; Sign up
                </span>
              </p>
            )}
          </div>
        </ColorSync>
      </div>
    </>
  );
};

export default RegContainer;
