"use client";
import ColorSync from "@/components/general/ColorSync";
import React from "react";

const CopyLink = () => {
  const handleCopyLink = async () => {
    try {
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);
      alert("Link copied to clipboard!");
    } catch (error) {
      console.error("Error copying link to clipboard:", error);
    }
  };

  return (
    <div className="w-full grid grid-cols-auto1fr gap-2">
      <ColorSync
        key={undefined}
        style={"rounded px-4 whitespace-nowrap  p-1 relative overflow-hidden"}
        onDark={"bg-almostBlack"}
        onWhite={""}
      >
        <ColorSync
          key={undefined}
          style={"absolute top-0 h-full right-0 p-2"}
          onDark={"bg-almostBlack"}
          onWhite={""}
        >
          <></>
        </ColorSync>
        <p  >http://localhost:3000/4c593a38-5052-4c4d-9843-80494ce13458</p>
      </ColorSync>

      <button
        className="py-0.5 px-2 rounded bg-main text-white font-medium"
        style={{ whiteSpace: "nowrap" }}
        onClick={handleCopyLink}
      >
        Copy Link
      </button>
    </div>
  );
};

export default CopyLink;
