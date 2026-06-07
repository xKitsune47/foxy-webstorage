"use client";

import ListLayout from "./_components/ListLayout";
import FileUpload from "./_components/FileUpload";
import { File, PopupTypes } from "./helpers/types";
import FileList from "./_components/FileList";
import FilesWrapper from "./_components/FilesWrapper";
import { ChangeEventHandler, SubmitEventHandler, useState } from "react";
import RecentlyAddedFiles from "./_components/RecentlyAddedFiles";
import ScreenPopup from "./_components/ScreenPopup";

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
  const [filesFound, setFilesFound] = useState<File[]>([]);
  const [fileDeletionPopup, setFileDeletionPopup] = useState<boolean>(false);
  const [fileSharePopup, setFileSharePopup] = useState<boolean>(false);
  const [fileNameChangePopup, setFileNameChangePopup] =
    useState<boolean>(false);
  const [fileDetailsPopup, setFileDetailsPopup] = useState<boolean>(false);
  const [fileID, setFileID] = useState<number | null>(null);
  const [filesSelected, setFilesSelected] = useState<number[]>([]);

  const handleOpenPopup = (popupType: PopupTypes, fileId: number) => {
    setFileID(fileId);

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
    console.log(searchQuery);
  };

  const handleFieldChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e?.target.value);

    setSearched(false);
    console.log(e.target.value);
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

      {fileDeletionPopup && (
        <ScreenPopup
          cancelPopup={handleClosePopup}
          confirmAction={handleDeleteFile}>
          <h3 className="text-xl">deletion</h3>
          <p>placeholder</p>
        </ScreenPopup>
      )}
      {fileSharePopup && (
        <ScreenPopup
          cancelPopup={handleClosePopup}
          confirmAction={handleShareFile}>
          <h3 className="text-xl">share</h3>
          <p>placeholder</p>
        </ScreenPopup>
      )}
      {fileNameChangePopup && (
        <ScreenPopup
          cancelPopup={handleClosePopup}
          confirmAction={handleChangeNameFile}>
          <h3 className="text-xl">name change</h3>
          <p>placeholder</p>
        </ScreenPopup>
      )}
      {fileDetailsPopup && (
        <ScreenPopup
          cancelPopup={handleClosePopup}
          confirmAction={handleDetailsFile}>
          <h3 className="text-xl">File details</h3>
          <div className="flex flex-row justify-between gap-4 w-full">
            <p className="">Name</p>
            <p>placeholder</p>
          </div>
          <hr className="w-full" />

          <div className="flex flex-row justify-between gap-4 w-full">
            <p>Date created</p>
            <p>placeholder</p>
          </div>
          <hr className="w-full" />

          <div className="flex flex-row justify-between gap-4 w-full">
            <p>Weight</p>
            <p>placeholder</p>
          </div>
          <hr className="w-full" />

          <div className="flex flex-row justify-between gap-4 w-full">
            <p>Shared</p>
            <p>placeholder</p>
          </div>
        </ScreenPopup>
      )}
    </ListLayout>
  );
}
