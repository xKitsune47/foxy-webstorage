"use client";

import React from "react";
import { File } from "../helpers/types";
import FilesWrapper from "./FilesWrapper";

type Props = { files?: File[]; placeholderText?: string; applyMinH?: boolean };

const FileList = ({
  files,
  placeholderText = "No files added yet...",
  applyMinH = true,
}: Props) => {
  return !files || files.length === 0 ? (
    <span>{placeholderText}</span>
  ) : (
    <div
      className={`flex flex-col gap-4 grow h-0 overflow-y-auto ${applyMinH && "min-h-full"}`}>
      {files.map((file) => {
        return <FilesWrapper listType="horizontal" file={file} key={file.id} />;
      })}
    </div>
  );
};

export default FileList;
