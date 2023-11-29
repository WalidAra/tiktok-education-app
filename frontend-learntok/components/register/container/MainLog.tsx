import React from "react";
import RegCard from "./main/RegCard";
import { AiOutlineUser } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {
  setCurrentIndex: (value: number) => void;
  setHeight: (value: string) => void;
};

const MainLog = ({ setCurrentIndex, setHeight }: Props) => {
  const { data: session } = useSession();
   const handleSignIn = async () => {
     const result = await signIn("google");
     console.log("Sign-in result:", result); // Log the result of the sign-in attempt
   };
  return (
    <div className={`w-full flex flex-col gap-3 px-4 py-8 flex-shrink-0`}>
      <RegCard
        method={() => {
          setCurrentIndex(2);
          setHeight("h-[340px]");
        }}
        style=""
        icon={<AiOutlineUser />}
        text="Continue With Email & Password"
      />
      <RegCard
        method={handleSignIn}
        style=""
        icon={<FcGoogle />}
        text="Continue With Google "
      />
      <RegCard
        method={() => {}}
        style="text-blue-500"
        icon={<BsFacebook />}
        text="Continue With Facebook"
      />
    </div>
  );
};

export default MainLog;
