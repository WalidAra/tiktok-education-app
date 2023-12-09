import React from "react";
import Account from "./Account";
import ColorSync from "@/components/general/ColorSync";

const SuggestedAccount = () => {
  return (
    <ColorSync
      key={undefined}
      style={"w-full h-1/3  hidden xl:block"}
      onDark={""}
      onWhite={"border-b border-ccc"}
    >
      <p className="text-gray-500 font-semibold hidden xl:block">
        Suggested Accounts
      </p>

      <div className="w-full flex flex-col ">
        <Account />
        <Account />
        <Account />
      </div>
    </ColorSync>
  );
};

export default SuggestedAccount;
