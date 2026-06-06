import React, { useRef, useState } from "react";
import FileOptions from "./FileOptions";
import fileWeightFormatter from "../helpers/fileWeightFormatter";
import fileNameFormat from "../helpers/fileNameFormatter";
import translateFormatToIcon from "../helpers/fileFormatIcons";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { File } from "../helpers/types";

type Props = { listType: "horizontal" | "vertical"; file: File };

const FilesWrapper = ({ listType, file }: Props) => {
  const [optionsShown, setOptionsShown] = useState<boolean>(false);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const optionsVisibility = () => {
    setOptionsShown(!optionsShown);
  };

  const handleClose = () => {
    setOptionsShown(false);
  };

  if (listType === "vertical") {
    return (
      <div
        ref={triggerRef}
        key={file.fileName}
        className="flex flex-row md:p-4 p-2 border-2 border-slate-200 rounded-xl gap-4 items-center hover:bg-slate-100 transition-all duration-300 cursor-default w-full justify-between">
        <div className="flex flex-row gap-2 items-center">
          {translateFormatToIcon(file.format)}
          <div className="flex flex-col">
            <span className="text-lg">{fileNameFormat(file.fileName)}</span>
            <span className="text-sm">{fileWeightFormatter(file.size)}</span>
          </div>
        </div>

        <div className="flex items-center relative">
          <EllipsisVerticalIcon
            className="size-10 hover:bg-white rounded-full p-2 transition-all duration-300 cursor-pointer"
            onClick={optionsVisibility}
          />
        </div>

        {optionsShown && (
          <FileOptions
            fileId={file.id}
            anchorRef={triggerRef}
            onClose={handleClose}
          />
        )}
      </div>
    );
  }

  return (
    <div
      key={file.fileName}
      className="relative flex flex-row md:p-4 p-2 border-2 border-slate-200 rounded-xl gap-4 items-center hover:bg-slate-100 transition-all duration-300 cursor-default w-full justify-between"
      ref={triggerRef}>
      <div className="flex flex-row gap-4 items-center">
        {translateFormatToIcon(file.format)}

        <span className="text-lg">{fileNameFormat(file.fileName)}</span>
      </div>

      <div className="flex items-center gap-4">
        <span>{fileWeightFormatter(file.size)}</span>

        <EllipsisVerticalIcon
          className="size-10 hover:bg-white rounded-full p-2 transition-all duration-300 cursor-pointer"
          onClick={optionsVisibility}
        />
      </div>

      {optionsShown && (
        <FileOptions
          fileId={file.id}
          anchorRef={triggerRef}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default FilesWrapper;
