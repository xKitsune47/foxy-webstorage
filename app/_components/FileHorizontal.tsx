"use client";

import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import translateFormatToIcon from "../helpers/fileFormatIcons";
import fileNameFormat from "../helpers/fileNameFormatter";
import fileWeightFormatter from "../helpers/fileWeightFormatter";
import FileOptions from "./FileOptions";

type Props = { fileName: string; size: number; format: string };

const FileHorizontal = ({ fileName, size, format }: Props) => {
  const [optionsShown, setOptionsShown] = useState<boolean>(false);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const optionsVisibility = () => {
    setOptionsShown(!optionsShown);
  };

  const handleClose = () => {
    setOptionsShown(false);
  };

  return (
    <div
      ref={triggerRef}
      key={fileName}
      className="relative flex flex-row md:p-4 p-2 border-2 border-slate-200 rounded-xl gap-4 items-center hover:bg-slate-100 transition-all duration-300 cursor-default w-full xl:w-19/100 justify-between">
      <div className="flex flex-row gap-2 items-center">
        {translateFormatToIcon(format)}
        <div className="flex flex-col">
          <span className="text-lg">{fileNameFormat(fileName)}</span>
          <span className="text-sm">{fileWeightFormatter(size)}</span>
        </div>
      </div>

      <div className="flex items-center relative">
        <EllipsisVerticalIcon
          className="size-10 hover:bg-white rounded-full p-2 transition-all duration-300 cursor-pointer"
          onClick={optionsVisibility}
        />
      </div>

      {optionsShown && (
        <FileOptions anchorRef={triggerRef} onClose={handleClose} />
      )}
    </div>
  );
};

export default FileHorizontal;
