"use client";

import React, { MouseEvent, useEffect, useRef, useState } from "react";
import FileOptions from "./FileOptions";
import fileWeightFormatter from "../helpers/fileWeightFormatter";
import fileNameFormat from "../helpers/fileNameFormatter";
import translateFormatToIcon from "../helpers/fileFormatIcons";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { File, PopupTypes } from "../helpers/types";
import dateFormatter from "../helpers/dateFormatter";

type Props = {
  listType: "horizontal" | "vertical";
  file: File;
  openPopup: (popupType: PopupTypes, fileId: number) => void;
  fileSelected: (fileId: number) => void;
  selectedFiles: number[];
};

const FilesWrapper = ({
  listType,
  file,
  openPopup,
  fileSelected,
  selectedFiles,
}: Props) => {
  const [optionsShown, setOptionsShown] = useState<boolean>(false);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<boolean>(false);

  const optionsVisibility = () => {
    setOptionsShown(!optionsShown);
  };

  const handleClose = () => {
    setOptionsShown(false);
  };

  const handleSelectFile = () => {
    setSelected(!selected);
    fileSelected(file.id);
  };

  const handleMouseClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (e.type === "contextmenu") {
      setOptionsShown(true);
    }

    if (e.type === "click" && e.ctrlKey) {
      setSelected(!selected);
      fileSelected(file.id);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelected(selectedFiles?.includes(file.id));
  }, [selectedFiles]);

  if (listType === "vertical") {
    return (
      <div
        ref={triggerRef}
        className={`flex flex-row md:p-4 p-2 border-2 border-slate-200 rounded-xl gap-4 items-center hover:bg-slate-200 transition-all duration-300 cursor-default w-full justify-between ${selected && "bg-slate-200"}`}
        onClick={handleMouseClick}
        onContextMenu={handleMouseClick}>
        <div className="flex flex-row gap-4 items-center">
          <span
            className="border border-slate-500 hover:border-slate-400 min-w-4 max-w-4 min-h-4 max-h-4 rounded-sm bg-white flex items-center justify-center transition-all duration-200"
            onClick={handleSelectFile}>
            {selected && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            )}
          </span>
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
            openPopup={openPopup}
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
      className={`relative flex flex-row md:p-4 p-2 border-2 border-slate-200 rounded-xl gap-4 items-center hover:bg-slate-200 transition-all duration-300 cursor-default w-full justify-between ${selected && "bg-slate-200"}`}
      ref={triggerRef}
      onClick={handleMouseClick}
      onContextMenu={handleMouseClick}>
      <div className="flex flex-row gap-4 items-center">
        <span
          className="border border-slate-500 min-w-4 max-w-4 min-h-4 max-h-4 rounded-sm bg-white flex items-center justify-center"
          onClick={handleSelectFile}>
          {selected && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          )}
        </span>
        {translateFormatToIcon(file.format)}

        <span className="text-lg">{fileNameFormat(file.fileName)}</span>
        <span className="text-md text-slate-400">
          {dateFormatter(file.date)}
        </span>
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
          openPopup={openPopup}
          fileId={file.id}
          anchorRef={triggerRef}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default FilesWrapper;
