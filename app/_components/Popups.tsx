import React, { ChangeEventHandler } from "react";
import ScreenPopup from "./ScreenPopup";
import PopupButtonWrapper from "./PopupButtonWrapper";
import Button from "./Button";
import { File } from "../helpers/types";
import fileWeightFormatter from "../helpers/fileWeightFormatter";
import dateFormatter from "../helpers/dateFormatter";

type Props = {
  file: File | null;
  handleClosePopup: () => void;
  fileMassDeletionPopup: boolean;
  fileDeletionPopup: boolean;
  fileSharePopup: boolean;
  fileNameChangePopup: boolean;
  fileDetailsPopup: boolean;
  filesSelectedLength: number;
  handleMassDeleteFiles: () => void;
  handleDeleteFile: () => void;
  handleShareFile: () => void;
  handleFileNameQuery: ChangeEventHandler<HTMLInputElement>;
  newFileName: string;
  handleChangeNameFile: () => void;
};

const Popups = ({
  file,
  handleClosePopup,
  fileMassDeletionPopup,
  fileDeletionPopup,
  fileSharePopup,
  fileNameChangePopup,
  fileDetailsPopup,
  filesSelectedLength,
  handleMassDeleteFiles,
  handleDeleteFile,
  handleShareFile,
  handleFileNameQuery,
  newFileName,
  handleChangeNameFile,
}: Props) => {
  if (!file) return;

  return (
    <>
      {fileMassDeletionPopup && filesSelectedLength > 0 && (
        <ScreenPopup cancelPopup={handleClosePopup}>
          <h3 className="text-xl font-semibold">Delete file</h3>
          <p>
            Are you sure you want to delete selected files? They&apos;ll stay in
            the &quot;Trash&quot; for 30 days.
          </p>

          <PopupButtonWrapper>
            <Button onClick={handleClosePopup} />
            <Button
              onClick={handleMassDeleteFiles}
              btnType="destroy"
              text="Delete"
            />
          </PopupButtonWrapper>
        </ScreenPopup>
      )}

      {fileDeletionPopup && file && (
        <ScreenPopup cancelPopup={handleClosePopup}>
          <h3 className="text-xl font-semibold">Delete file</h3>
          <p>
            Are you sure you want to delete this file? It&apos;ll stay in the
            &quot;Trash&quot; for 30 days.
          </p>

          <PopupButtonWrapper>
            <Button onClick={handleClosePopup} />
            <Button
              onClick={handleDeleteFile}
              btnType="destroy"
              text="Delete"
            />
          </PopupButtonWrapper>
        </ScreenPopup>
      )}

      {fileSharePopup && file && (
        <ScreenPopup cancelPopup={handleClosePopup}>
          <h3 className="text-xl font-semibold">Share file</h3>
          <p>placeholder</p>

          <PopupButtonWrapper>
            <Button onClick={handleClosePopup} />
            <Button
              onClick={handleShareFile}
              btnType="acknowledge"
              text="Share"
            />
          </PopupButtonWrapper>
        </ScreenPopup>
      )}

      {fileNameChangePopup && file && (
        <ScreenPopup cancelPopup={handleClosePopup}>
          <h3 className="text-xl font-semibold">Change file name</h3>
          <input
            type="text"
            className="border-2 border-slate-200 rounded-xl py-2 px-2 md:w-80 w-40
           focus:outline-none focus:ring-0 transition-all duration-300 focus:border-orange-300 text-lg"
            value={newFileName}
            onChange={handleFileNameQuery}
            maxLength={50}
          />

          <PopupButtonWrapper>
            <Button onClick={handleClosePopup} />
            <Button
              onClick={handleChangeNameFile}
              btnType="confirm"
              text="Confirm"
            />
          </PopupButtonWrapper>
        </ScreenPopup>
      )}

      {fileDetailsPopup && file && (
        <ScreenPopup cancelPopup={handleClosePopup}>
          <h3 className="text-xl font-semibold">File details</h3>
          <div className="flex flex-row justify-between gap-16 w-full">
            <p className="">Name</p>
            <p>{file.fileName}</p>
          </div>
          <hr className="w-full" />

          <div className="flex flex-row justify-between gap-16 w-full">
            <p className="">Format</p>
            <p>.{file.format}</p>
          </div>
          <hr className="w-full" />

          <div className="flex flex-row justify-between gap-16 w-full">
            <p>Date</p>
            <p>{dateFormatter(file.date)}</p>
          </div>
          <hr className="w-full" />

          <div className="flex flex-row justify-between gap-16 w-full">
            <p>Size</p>
            <p>{fileWeightFormatter(file.size)}</p>
          </div>
          <hr className="w-full" />

          <div className="flex flex-row justify-between gap-16 w-full">
            <p>Shared</p>
            <p>{file.shared ? "Yes" : "No"}</p>
          </div>

          <PopupButtonWrapper>
            <Button onClick={handleClosePopup} text="Close" />
          </PopupButtonWrapper>
        </ScreenPopup>
      )}
    </>
  );
};

export default Popups;
