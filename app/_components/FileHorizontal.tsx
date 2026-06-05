import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import React from "react";
import translateFormatToIcon from "../helpers/fileFormatIcons";
import fileNameFormat from "../helpers/fileNameFormatter";
import fileWeightFormatter from "../helpers/fileWeightFormatter";

type Props = { fileName: string; size: number; format: string };

const FileHorizontal = ({ fileName, size, format }: Props) => {
  return (
    <div
      key={fileName}
      className="flex flex-row md:p-4 p-2 border-2 border-slate-200 rounded-xl gap-4 items-center hover:bg-slate-100 transition-all duration-300 cursor-default w-full xl:w-19/100 justify-between">
      <div className="flex flex-row gap-2 items-center">
        {translateFormatToIcon(format)}
        <div className="flex flex-col">
          <span className="text-lg">{fileNameFormat(fileName)}</span>
          <span className="text-sm">{fileWeightFormatter(size)}</span>
        </div>
      </div>

      <div className="flex items-center">
        <EllipsisVerticalIcon className="size-10 hover:bg-white rounded-full p-2 transition-all duration-300 cursor-pointer" />
      </div>
    </div>
  );
};

export default FileHorizontal;
