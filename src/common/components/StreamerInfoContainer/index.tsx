import React from "react";
import CircleImage from "../CircleImage";

interface IStreamerInfoContainerProps {
  title?: string;
  name: string;
  category: string;
}

export default function StreamerInfoContainer({
  title,
  name,
  category,
}: IStreamerInfoContainerProps) {
  return (
    <div className="flex gap-[0.5rem] cursor-pointer">
      <CircleImage src="/images/sample.jpg" size={title ? "l" : "m"} />
      <div className="flex flex-col gap-[0.125rem]">
        <p className="font-bold text-[.875rem] text-white">{title}</p>
        <p className="font-semibold text-[.75rem] text-[#DFE2EF]">{name}</p>
        <p className="font-medium text-[.625rem] text-[#787878]">{category}</p>
      </div>
    </div>
  );
}
