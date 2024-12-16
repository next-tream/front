import { InputHTMLAttributes } from "react";

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

export default function TextInput({ title, ...rest }: ITextInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <p className="font-semibold text-[0.875rem] text-black">{title}</p>
        {/* <p className="font-medium text-[.75rem] text-error">error</p> */}
      </div>
      <input
        type={rest.type}
        placeholder={rest.placeholder}
        className="w-[100%] h-[3rem] px-[1.25rem] bg-[transparent] border border-[#D0D1D3] rounded-[0.5rem] outline-none font-medium text-[0.875rem] text-black focus:border-main"
      />
    </div>
  );
}
