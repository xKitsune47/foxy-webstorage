"use client";

import ListLayout from "./_components/ListLayout";
import FileUpload from "./_components/FileUpload";
import { File, PopupTypes } from "./helpers/types";
import FileList from "./_components/FileList";
import FilesWrapper from "./_components/FilesWrapper";
import { ChangeEventHandler, SubmitEventHandler, useState } from "react";
import RecentlyAddedFiles from "./_components/RecentlyAddedFiles";
import ScreenPopup from "./_components/ScreenPopup";
import dateFormatter from "./helpers/dateFormatter";
import fileWeightFormatter from "./helpers/fileWeightFormatter";

const files: File[] = [
  {
    id: 1,
    fileName: "Lorem ipsum",
    format: "pdf",
    size: 2100000000,
    date:
      Date.now() +
      (Math.random() > 0.5
        ? -Math.floor(Math.random() * 1000000000)
        : Math.floor(Math.random() * 1000000000)),
    shared: Math.random() > 0.5 ? true : false,
  },
  {
    id: 2,
    fileName: "Lorem ipsum",
    format: "mp3",
    size: 210000000,
    date:
      Date.now() +
      (Math.random() > 0.5
        ? -Math.floor(Math.random() * 1000000000)
        : Math.floor(Math.random() * 1000000000)),
    shared: Math.random() > 0.5 ? true : false,
  },
  {
    id: 3,
    fileName: "Lorem ipsum",
    format: "doc",
    size: 21000000,
    date:
      Date.now() +
      (Math.random() > 0.5
        ? -Math.floor(Math.random() * 1000000000)
        : Math.floor(Math.random() * 1000000000)),
    shared: Math.random() > 0.5 ? true : false,
  },
  {
    id: 4,
    fileName: "Lorem ipsum",
    format: "ppt",
    size: 2100000,
    date:
      Date.now() +
      (Math.random() > 0.5
        ? -Math.floor(Math.random() * 1000000000)
        : Math.floor(Math.random() * 1000000000)),
    shared: Math.random() > 0.5 ? true : false,
  },
  {
    id: 5,
    fileName: "Lorem ipsum",
    format: "docx",
    size: 210000,
    date:
      Date.now() +
      (Math.random() > 0.5
        ? -Math.floor(Math.random() * 1000000000)
        : Math.floor(Math.random() * 1000000000)),
    shared: Math.random() > 0.5 ? true : false,
  },
  {
    id: 6,
    fileName: "Lorem ipsum",
    format: "pdf",
    size: 210000,
    date:
      Date.now() +
      (Math.random() > 0.5
        ? -Math.floor(Math.random() * 1000000000)
        : Math.floor(Math.random() * 1000000000)),
    shared: Math.random() > 0.5 ? true : false,
  },
  {
    id: 7,
    fileName: "Lorem ipsum",
    format: "xlsx",
    size: 210000,
    date:
      Date.now() +
      (Math.random() > 0.5
        ? -Math.floor(Math.random() * 1000000000)
        : Math.floor(Math.random() * 1000000000)),
    shared: Math.random() > 0.5 ? true : false,
  },
  {
    id: 8,
    fileName: "Lorem ipsum",
    format: "doc",
    size: 210000,
    date:
      Date.now() +
      (Math.random() > 0.5
        ? -Math.floor(Math.random() * 1000000000)
        : Math.floor(Math.random() * 1000000000)),
    shared: Math.random() > 0.5 ? true : false,
  },
  {
    id: 9,
    fileName: "Lorem ipsum",
    format: "ppt",
    size: 210000,
    date:
      Date.now() +
      (Math.random() > 0.5
        ? -Math.floor(Math.random() * 1000000000)
        : Math.floor(Math.random() * 1000000000)),
    shared: Math.random() > 0.5 ? true : false,
  },
  {
    id: 10,
    fileName: "Lorem ipsum",
    format: "docx",
    size: 210000,
    date:
      Date.now() +
      (Math.random() > 0.5
        ? -Math.floor(Math.random() * 1000000000)
        : Math.floor(Math.random() * 1000000000)),
    shared: Math.random() > 0.5 ? true : false,
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searched, setSearched] = useState<boolean>(false);
  const [filesFound, setFilesFound] = useState<File[]>([]);
  const [fileDeletionPopup, setFileDeletionPopup] = useState<boolean>(false);
  const [fileSharePopup, setFileSharePopup] = useState<boolean>(false);
  const [fileNameChangePopup, setFileNameChangePopup] =
    useState<boolean>(false);
  const [fileDetailsPopup, setFileDetailsPopup] = useState<boolean>(false);
  const [fileID, setFileID] = useState<number | null>(null);
  const [filesSelected, setFilesSelected] = useState<number[]>([]);
  const [singularFile, setSingularFile] = useState<File | null>(null);

  const handleOpenPopup = (popupType: PopupTypes, fileId: number) => {
    const temporaryFile = files.find((file) => file.id === fileId);
    setFileID(fileId);

    if (!temporaryFile) {
      setFileID(null);
      return;
    }

    setSingularFile(temporaryFile);

    if (popupType === "delete") {
      setFileDeletionPopup(true);
    }

    if (popupType === "share") {
      setFileSharePopup(true);
    }

    if (popupType === "details") {
      setFileDetailsPopup(true);
    }

    if (popupType === "name") {
      setFileNameChangePopup(true);
    }
  };

  const handleClosePopup = () => {
    setFileDeletionPopup(false);
    setFileSharePopup(false);
    setFileDetailsPopup(false);
    setFileNameChangePopup(false);
    setFileID(null);
  };

  const handleDeleteFile = () => {
    console.log(fileID);
  };
  const handleShareFile = () => {
    console.log(fileID);
  };
  const handleDetailsFile = () => {
    console.log(fileID);
  };
  const handleChangeNameFile = () => {
    console.log(fileID);
  };

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
  };

  const handleFieldChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e?.target.value);

    setSearched(false);
  };

  const handleSelectFile = (fileId: number) => {
    if (filesSelected.includes(fileId)) {
      console.log(filesSelected.filter((file) => file !== fileId));
      setFilesSelected(filesSelected.filter((file) => file !== fileId));
    } else {
      console.log([...filesSelected, fileId]);

      setFilesSelected([...filesSelected, fileId]);
    }
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
                <FilesWrapper
                  key={file.id}
                  file={file}
                  listType="horizontal"
                  openPopup={handleOpenPopup}
                  fileSelected={handleSelectFile}
                  selectedFiles={filesSelected}
                />
              );
            })
          ) : (
            <div>No files found :(</div>
          )}
        </div>
      ) : (
        <div className="flex flex-col lg:gap-4 gap-2 flex-1 min-h-0">
          <RecentlyAddedFiles
            files={files}
            openPopup={handleOpenPopup}
            fileSelected={handleSelectFile}
            selectedFiles={filesSelected}
          />

          <h3 className="lg:text-3xl md:text-2xl text-xl">Files</h3>
          <div className="flex flex-col lg:flex-row flex-1 min-h-0 gap-8">
            <FileUpload
              onFiles={(files) => {
                console.log("CHOSEN FILE:", files);
              }}
            />
            <FileList
              files={files}
              openPopup={handleOpenPopup}
              fileSelected={handleSelectFile}
              selectedFiles={filesSelected}
            />
          </div>
        </div>
      )}

      {fileDeletionPopup && singularFile && (
        <ScreenPopup
          cancelPopup={handleClosePopup}
          confirmAction={handleDeleteFile}>
          <h3 className="text-xl font-semibold">deletion</h3>
          <p>placeholder</p>
        </ScreenPopup>
      )}
      {fileSharePopup && singularFile && (
        <ScreenPopup
          cancelPopup={handleClosePopup}
          confirmAction={handleShareFile}>
          <h3 className="text-xl font-semibold">share</h3>
          <p>placeholder</p>
        </ScreenPopup>
      )}
      {fileNameChangePopup && singularFile && (
        <ScreenPopup
          cancelPopup={handleClosePopup}
          confirmAction={handleChangeNameFile}>
          <h3 className="text-xl font-semibold">name change</h3>
          <p>placeholder</p>
        </ScreenPopup>
      )}
      {fileDetailsPopup && singularFile && (
        <ScreenPopup
          cancelPopup={handleClosePopup}
          confirmAction={handleDetailsFile}>
          <h3 className="text-xl font-semibold">File details</h3>
          <div className="flex flex-row justify-between gap-16 w-full">
            <p className="">Name</p>
            <p>{singularFile.fileName}</p>
          </div>
          <hr className="w-full" />

          <div className="flex flex-row justify-between gap-16 w-full">
            <p className="">Format</p>
            <p>.{singularFile.format}</p>
          </div>
          <hr className="w-full" />

          <div className="flex flex-row justify-between gap-16 w-full">
            <p>Date</p>
            <p>{dateFormatter(new Date(singularFile.date))}</p>
          </div>
          <hr className="w-full" />

          <div className="flex flex-row justify-between gap-16 w-full">
            <p>Size</p>
            <p>{fileWeightFormatter(singularFile.size)}</p>
          </div>
          <hr className="w-full" />

          <div className="flex flex-row justify-between gap-16 w-full">
            <p>Shared</p>
            <p>{singularFile.shared ? "Yes" : "No"}</p>
          </div>
        </ScreenPopup>
      )}
    </ListLayout>
  );
}
