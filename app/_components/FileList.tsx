"use client";

import React from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { File } from "../helpers/types";
import translateFormatToIcon from "../helpers/fileFormatIcons";
import fileWeightFormatter from "../helpers/fileWeightFormatter";
import fileNameFormat from "../helpers/fileNameFormatter";

type Props = { files: File[] };

const FileList = ({ files }: Props) => {
  return (
    <div className="flex flex-col gap-4 grow h-0 min-h-full overflow-y-auto">
      {files.map((file) => {
        return (
          <div
            key={file.fileName}
            className="flex flex-row p-4 border-2 border-slate-200 rounded-xl gap-4 items-center hover:bg-slate-100 transition-all duration-300 cursor-default w-full justify-between">
            <div className="flex flex-row gap-4 items-center">
              {translateFormatToIcon(file.format)}

              <span className="text-lg">{fileNameFormat(file.fileName)}</span>
            </div>

            <div className="flex items-center gap-4">
              <span>{fileWeightFormatter(file.size)}</span>

              <EllipsisVerticalIcon className="size-10 hover:bg-white rounded-full p-2 transition-all duration-300 cursor-pointer" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FileList;
