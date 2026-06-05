"use client";

import ListLayout from "./_components/ListLayout";
import FileHorizontal from "./_components/FileHorizontal";
import FileUpload from "./_components/FileUpload";
import { File } from "./helpers/types";
import { maxFilesHorizontal } from "./helpers/numericalConstraints";
import FileList from "./_components/FileList";

export default function Home() {
  const files: File[] = [
    {
      fileName: "Lorem ipsum",
      format: "pdf",
      size: 2100000000,
    },
    {
      fileName: "Lorem ipsum",
      format: "mp3",
      size: 210000000,
    },
    {
      fileName: "Lorem ipsum",
      format: "doc",
      size: 21000000,
    },
    {
      fileName: "Lorem ipsum",
      format: "ppt",
      size: 2100000,
    },
    {
      fileName: "Lorem ipsum",
      format: "docx",
      size: 210000,
    },
    {
      fileName: "Lorem ipsum",
      format: "pdf",
      size: 210000,
    },
    {
      fileName: "Lorem ipsum",
      format: "xlsx",
      size: 210000,
    },
    {
      fileName: "Lorem ipsum",
      format: "doc",
      size: 210000,
    },
    {
      fileName: "Lorem ipsum",
      format: "ppt",
      size: 210000,
    },
    {
      fileName: "Lorem ipsum",
      format: "docx",
      size: 210000,
    },
  ];

  return (
    <ListLayout>
      <div className="flex flex-col lg:gap-4 gap-2 flex-1 min-h-0">
        <h3 className="lg:text-3xl md:text-2xl text-xl">New files</h3>

        <div className="hidden xl:flex xl:flex-row justify-between max:lg gap-2">
          {files.map((file, i) => {
            return (
              i < maxFilesHorizontal && (
                <FileHorizontal
                  key={file.fileName}
                  fileName={file.fileName}
                  size={file.size}
                  format={file.format}
                />
              )
            );
          })}
        </div>

        <div className="flex flex-col xl:hidden justify-between max:lg gap-2">
          {files.map((file, i) => {
            return (
              i < maxFilesHorizontal - 2 && (
                <FileHorizontal
                  key={file.fileName}
                  fileName={file.fileName}
                  size={file.size}
                  format={file.format}
                />
              )
            );
          })}
        </div>

        <h3 className="lg:text-3xl md:text-2xl text-xl">Files</h3>
        <div className="flex flex-col lg:flex-row flex-1 min-h-0 gap-8">
          <FileUpload
            onFiles={(files) => {
              console.log("CHOSEN FILE:", files);
            }}
          />
          <FileList files={files} />
        </div>
      </div>
    </ListLayout>
  );
}
