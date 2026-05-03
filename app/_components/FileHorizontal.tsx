import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import React from "react";
import translateFormatToIcon from "../_assets/fileFormatIcons";

type Props = { fileName: string; size: number; format: string };

const FileHorizontal = ({ fileName, size, format }: Props) => {
  return (
    <div
      key={fileName}
      className="flex flex-row p-4 border-2 border-slate-200 rounded-xl gap-4 items-center hover:bg-slate-100 transition-all duration-300 cursor-default w-19/100">
      <div>{translateFormatToIcon(format)}</div>

      <div className="flex flex-col">
        <span className="text-lg">{fileName}</span>
        <span>{Math.floor((size / 1024 / 1024) * 10) / 10} MB</span>
      </div>
      <div className="flex items-center">
        <EllipsisVerticalIcon className="size-10 hover:bg-white rounded-full p-2 transition-all duration-300 cursor-pointer" />
      </div>
    </div>
  );
};

export default FileHorizontal;
