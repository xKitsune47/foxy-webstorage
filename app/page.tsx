"use client";

import ListLayout from "./_components/ListLayout";
import FileUpload from "./_components/FileUpload";
import { File } from "./helpers/types";
import FileList from "./_components/FileList";
import FilesWrapper from "./_components/FilesWrapper";
import { ChangeEventHandler, SubmitEventHandler, useState } from "react";
import RecentlyAddedFiles from "./_components/RecentlyAddedFiles";

const files: File[] = [
  {
    id: 1,
    fileName: "Lorem ipsum",
    format: "pdf",
    size: 2100000000,
  },
  {
    id: 2,
    fileName: "Lorem ipsum",
    format: "mp3",
    size: 210000000,
  },
  {
    id: 3,
    fileName: "Lorem ipsum",
    format: "doc",
    size: 21000000,
  },
  {
    id: 4,
    fileName: "Lorem ipsum",
    format: "ppt",
    size: 2100000,
  },
  {
    id: 5,
    fileName: "Lorem ipsum",
    format: "docx",
    size: 210000,
  },
  {
    id: 6,
    fileName: "Lorem ipsum",
    format: "pdf",
    size: 210000,
  },
  {
    id: 7,
    fileName: "Lorem ipsum",
    format: "xlsx",
    size: 210000,
  },
  {
    id: 8,
    fileName: "Lorem ipsum",
    format: "doc",
    size: 210000,
  },
  {
    id: 9,
    fileName: "Lorem ipsum",
    format: "ppt",
    size: 210000,
  },
  {
    id: 10,
    fileName: "Lorem ipsum",
    format: "docx",
    size: 210000,
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searched, setSearched] = useState<boolean>(false);
  const [filesFound, setFilesFound] = useState<File[]>();

  const handleFileSearch: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (searched) return;
    if (searchQuery.length === 0) return;

    setSearched(true);
    setFilesFound(
      files.filter((file) =>
        file.fileName.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    );
    console.log(searchQuery);
  };

  const handleFieldChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e?.target.value);

    setSearched(false);
    console.log(e.target.value);
  };

  return (
    <ListLayout
      headerFieldChange={handleFieldChange}
      searchQuery={searchQuery}
      headerFileSearch={handleFileSearch}>
      {searchQuery && searched ? (
        <div className="flex flex-col gap-2 grow h-0 overflow-y-auto">
          {filesFound && filesFound.length > 0 ? (
            filesFound.map((file) => {
              return (
                <FilesWrapper key={file.id} file={file} listType="horizontal" />
              );
            })
          ) : (
            <div>No files found :(</div>
          )}
        </div>
      ) : (
        <div className="flex flex-col lg:gap-4 gap-2 flex-1 min-h-0">
          <RecentlyAddedFiles files={files} />

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
      )}
    </ListLayout>
  );
}
