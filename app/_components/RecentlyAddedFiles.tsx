import React from "react";
import { File } from "../helpers/types";
import { maxFilesHorizontal } from "../helpers/numericalConstraints";
import FilesWrapper from "./FilesWrapper";

type Props = { files: File[] };

const RecentlyAddedFiles = ({ files }: Props) => {
  return (
    <>
      <h3 className="lg:text-3xl md:text-2xl text-xl">New files</h3>
      <div className="hidden xl:flex xl:flex-row justify-between max:lg gap-2">
        {files.map((file, i) => {
          return (
            i < maxFilesHorizontal && (
              <FilesWrapper key={file.id} file={file} listType="vertical" />
            )
          );
        })}
      </div>
      <div className="flex flex-col xl:hidden justify-between max:lg gap-2">
        {files.map((file, i) => {
          return (
            i < maxFilesHorizontal - 2 && (
              <FilesWrapper key={file.id} file={file} listType="vertical" />
            )
          );
        })}
      </div>
    </>
  );
};

export default RecentlyAddedFiles;
