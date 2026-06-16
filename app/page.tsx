"use client";

import ListLayout from "./_components/ListLayout";
import FileUpload from "./_components/FileUpload";
import {
  File,
  PopupTypes,
  SortingOptions,
  SortingTypes,
} from "./helpers/types";
import FileList from "./_components/FileList";
import FilesWrapper from "./_components/FilesWrapper";
import { ChangeEventHandler, SubmitEventHandler, useState } from "react";
import RecentlyAddedFiles from "./_components/RecentlyAddedFiles";
import regexTester from "./helpers/regexTester";
import removePrecedingWhitespaces from "./helpers/removePrecedingWhitespaces";
import { TrashIcon } from "@heroicons/react/24/outline";
import Popups from "./_components/Popups";
import { tempFiles } from "./helpers/temporatyFiles";
import SortingOptionsButtons from "./_components/SortingOptionsButtons";

export default function Home() {
  const [files, setFiles] = useState<File[]>(tempFiles);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searched, setSearched] = useState<boolean>(false);
  const [filesFound, setFilesFound] = useState<File[]>([]);
  const [fileDeletionPopup, setFileDeletionPopup] = useState<boolean>(false);
  const [fileMassDeletionPopup, setFileMassDeletionPopup] =
    useState<boolean>(false);
  const [fileSharePopup, setFileSharePopup] = useState<boolean>(false);
  const [fileNameChangePopup, setFileNameChangePopup] =
    useState<boolean>(false);
  const [fileDetailsPopup, setFileDetailsPopup] = useState<boolean>(false);
  const [fileID, setFileID] = useState<number | null>(null);
  const [filesSelected, setFilesSelected] = useState<number[]>([]);
  const [singularFile, setSingularFile] = useState<File | null>(null);
  const [newFileName, setNewFileName] = useState<string>("");
  const [sorting, setSorting] = useState<SortingOptions>({
    byName: {
      isActive: false,
      direction: "asc",
    },
    byDate: {
      isActive: false,
      direction: "asc",
    },
    bySize: {
      isActive: false,
      direction: "asc",
    },
  });

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
    setFileMassDeletionPopup(false);
    setFileDeletionPopup(false);
    setFileSharePopup(false);
    setFileDetailsPopup(false);
    setFileNameChangePopup(false);
    setFileID(null);
  };

  const handleDeleteFile = () => {
    setFiles(files.filter((file) => file.id !== fileID));
    handleClosePopup();
  };

  const handleMassDeleteFiles = () => {
    setFiles(files.filter((file) => !filesSelected.includes(file.id)));
    setFilesSelected([]);
    handleClosePopup();
  };

  const handleShareFile = () => {
    handleClosePopup();
  };

  const handleChangeNameFile = () => {
    const obj = files.find((file) => file.id === fileID);
    if (obj) {
      obj.fileName = removePrecedingWhitespaces(newFileName);
      obj.date = Date.now();
    }

    handleClosePopup();
  };

  const handleFileNameQuery: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (regexTester(e.target.value) || e.target.value.length === 0) {
      setNewFileName(e.target.value);
    }
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

  const handleSorting = (sortingType: SortingTypes) => {
    const comparators: Record<
      SortingTypes,
      (a: File, b: File, dir: "asc" | "desc") => number
    > = {
      abc: (a, b, dir) =>
        (dir === "asc" ? 1 : -1) *
        a.fileName.toLowerCase().localeCompare(b.fileName.toLowerCase()),
      date: (a, b, dir) =>
        (dir === "asc" ? 1 : -1) *
        (new Date(a.date).getTime() - new Date(b.date).getTime()),
      size: (a, b, dir) => (dir === "asc" ? 1 : -1) * (a.size - b.size),
    };

    const keyMap: Record<SortingTypes, "byName" | "byDate" | "bySize"> = {
      abc: "byName",
      date: "byDate",
      size: "bySize",
    };

    const key = keyMap[sortingType];
    const wasActive = sorting[key].isActive;
    const currentDir = sorting[key].direction;
    const newDir = wasActive && currentDir === "asc" ? "desc" : "asc";

    const resetSorting: SortingOptions = {
      byName: { isActive: false, direction: "asc" },
      byDate: { isActive: false, direction: "asc" },
      bySize: { isActive: false, direction: "asc" },
    };

    setSorting({
      ...resetSorting,
      [key]: { isActive: true, direction: newDir },
    });
    setFiles([...files].sort((a, b) => comparators[sortingType](a, b, newDir)));
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

          <div className="flex flex-row items-center w-full justify-between">
            <div className="flex flex-row gap-4">
              <h3 className="lg:text-3xl md:text-2xl text-xl">Files</h3>
              {filesSelected.length > 0 && (
                <span
                  className="flex flex-row items-center hover:text-red-700 transition-all duration-200 cursor-pointer"
                  onClick={() => setFileMassDeletionPopup(true)}>
                  <TrashIcon className="size-8" />
                </span>
              )}
            </div>
            <div className="flex flex-row gap-3">
              <SortingOptionsButtons
                sortingStates={sorting}
                onClick={handleSorting}
              />
            </div>
          </div>

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

      <Popups
        file={singularFile}
        handleClosePopup={handleClosePopup}
        fileMassDeletionPopup={fileMassDeletionPopup}
        fileDeletionPopup={fileDeletionPopup}
        fileSharePopup={fileSharePopup}
        fileNameChangePopup={fileNameChangePopup}
        fileDetailsPopup={fileDetailsPopup}
        filesSelectedLength={0}
        handleMassDeleteFiles={handleMassDeleteFiles}
        handleDeleteFile={handleDeleteFile}
        handleShareFile={handleShareFile}
        handleFileNameQuery={handleFileNameQuery}
        newFileName={newFileName}
        handleChangeNameFile={handleChangeNameFile}
      />
    </ListLayout>
  );
}
