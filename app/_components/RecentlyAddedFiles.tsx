import React from "react";
import { File, PopupTypes } from "../helpers/types";
import { maxFilesHorizontal } from "../helpers/numericalConstraints";
import FilesWrapper from "./FilesWrapper";

type Props = {
  files: File[];
  openPopup: (popupType: PopupTypes, fileId: number) => void;
  fileSelected: (fileId: number) => void;
  selectedFiles: number[];
};

const RecentlyAddedFiles = ({
  files,
  openPopup,
  fileSelected,
  selectedFiles,
}: Props) => {
  return (
    <>
      <h3 className="lg:text-3xl md:text-2xl text-xl">New files</h3>
      <div className="hidden xl:flex xl:flex-row justify-between max:lg gap-2">
        {files.map((file, i) => {
          return (
            i < maxFilesHorizontal && (
              <FilesWrapper
                key={file.id}
                file={file}
                listType="vertical"
                openPopup={openPopup}
                fileSelected={fileSelected}
                selectedFiles={selectedFiles}
              />
            )
          );
        })}
      </div>
      <div className="flex flex-col xl:hidden justify-between max:lg gap-2">
        {files.map((file, i) => {
          return (
            i < maxFilesHorizontal - 3 && (
              <FilesWrapper
                key={file.id}
                file={file}
                listType="vertical"
                openPopup={openPopup}
                fileSelected={fileSelected}
                selectedFiles={selectedFiles}
              />
            )
          );
        })}
      </div>
    </>
  );
};

export default RecentlyAddedFiles;
