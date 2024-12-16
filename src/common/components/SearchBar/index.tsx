import Image from "next/image";
import React from "react";

export default function SearchBar() {
  return (
    <div className="w-[30%] h-[3rem] py-[0.875rem] px-[1.25rem] flex justify-between border border-white rounded-[1.25rem]">
      <input
        type="text"
        placeholder="스트리머 게임 검색"
        className="w-[100%] bg-[transparent] text-[#DFE2EF] text-[1rem] font-medium outline-none"
      />
      <div className="flex gap-[0.75rem]">
        <Image src="/images/icon.svg" alt="아이콘" width={20} height={20} />
        <Image src="/images/icon.svg" alt="아이콘" width={20} height={20} />
      </div>
    </div>
  );
}
