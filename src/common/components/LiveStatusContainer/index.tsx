import Image from "next/image";
import React from "react";

interface ILiveStatusContainerProps {
  viewerCount: number;
}

export default function LiveStatusContainer({
  viewerCount,
}: ILiveStatusContainerProps) {
  return (
    <div className="absolute top-[0.5rem] left-[0.5rem] flex gap-2">
      <div className="p-[0.25rem] aline-center bg-error rounded-[0.5rem] font-semibold">
        LIVE
      </div>
      <div className="flex gap-[0.25rem] p-[0.25rem] bg-[#111111] rounded-[0.5rem] font-[1rem] font-semibold">
        <Image src="/images/icon.svg" alt="icon" width={20} height={20} />
        {viewerCount}
      </div>
    </div>
  );
}
