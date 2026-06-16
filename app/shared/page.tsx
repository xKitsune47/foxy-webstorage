"use client";

import { ChangeEventHandler, SubmitEventHandler, useState } from "react";
import FileList from "../_components/FileList";
import ListLayout from "../_components/ListLayout";
import { File, PopupTypes } from "../helpers/types";
import Popups from "../_components/Popups";
import removePrecedingWhitespaces from "../helpers/removePrecedingWhitespaces";
import regexTester from "../helpers/regexTester";
import { tempFiles } from "../helpers/temporatyFiles";

export default function Home() {
  const [files, setFiles] = useState<File[]>(tempFiles);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searched, setSearched] = useState<boolean>(false);
  const [filesFound, setFilesFound] = useState<File[]>();
  const [fileID, setFileID] = useState<number | null>(null);
  const [singularFile, setSingularFile] = useState<File | null>(null);
  const [fileDeletionPopup, setFileDeletionPopup] = useState<boolean>(false);
  const [fileMassDeletionPopup, setFileMassDeletionPopup] =
    useState<boolean>(false);
  const [fileSharePopup, setFileSharePopup] = useState<boolean>(false);
  const [fileNameChangePopup, setFileNameChangePopup] =
    useState<boolean>(false);
  const [fileDetailsPopup, setFileDetailsPopup] = useState<boolean>(false);
  const [filesSelected, setFilesSelected] = useState<number[]>([]);
  const [newFileName, setNewFileName] = useState<string>("");

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
        <FileList
          files={filesFound}
          openPopup={handleOpenPopup}
          fileSelected={handleSelectFile}
          selectedFiles={filesSelected}
          applyMinH={false}
        />
      ) : (
        <FileList
          files={files}
          openPopup={handleOpenPopup}
          fileSelected={handleSelectFile}
          selectedFiles={filesSelected}
          applyMinH={false}
        />
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
