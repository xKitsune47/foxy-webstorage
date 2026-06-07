"use client";

import React from "react";
import { File, PopupTypes } from "../helpers/types";
import FilesWrapper from "./FilesWrapper";

type Props = {
  files?: File[];
  placeholderText?: string;
  applyMinH?: boolean;
  openPopup: (popupType: PopupTypes, fileId: number) => void;
  fileSelected: (fileId: number) => void;
  selectedFiles: number[];
};

const FileList = ({
  files,
  placeholderText = "No files added yet...",
  applyMinH = true,
  openPopup,
  fileSelected,
  selectedFiles,
}: Props) => {
  return !files || files.length === 0 ? (
    <span>{placeholderText}</span>
  ) : (
    <div
      className={`flex flex-col gap-4 grow h-0 overflow-y-auto ${applyMinH && "min-h-full"}`}>
      {files.map((file) => {
        return (
          <FilesWrapper
            listType="horizontal"
            file={file}
            key={file.id}
            openPopup={openPopup}
            fileSelected={fileSelected}
            selectedFiles={selectedFiles}
          />
        );
      })}
    </div>
  );
};

export default FileList;
