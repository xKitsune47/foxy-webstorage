import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import React, { useCallback, useRef, useState } from "react";

type Props = {
  onFiles?: (files: File[]) => void;
  multiple?: boolean;
};

export default function FileUpload({ onFiles, multiple = true }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = useCallback(
    (fileList: FileList | File[]) => {
      const arr = Array.from(fileList as File[]) as File[];
      onFiles?.(arr);
    },
    [onFiles],
  );

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer?.files && e.dataTransfer.files.length) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const onClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="w-full lg:w-1/4 min-h-0 h-full">
      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragEnter={onDragOver}
        onDragLeave={onDragLeave}
        onClick={onClick}
        role="button"
        tabIndex={0}
        className={`h-full border-2 p-8 border-dashed rounded-2xl bg-slate-50 cursor-pointer flex flex-col items-center justify-center text-center transition-all duration-150 hover:border-orange-300 ${
          isDragging ? "border-orange-300 bg-slate-50" : "border-slate-300"
        }`}>
        <input
          ref={inputRef}
          type="file"
          multiple={multiple}
          onChange={(e) => {
            if (e.target.files) handleFiles(e.target.files);
          }}
          className="hidden"
        />

        <ArrowUpTrayIcon className="size-6" />

        <div className="lg:block hidden">
          <div className="text-slate-700 font-semibold">
            Drag and drop files
          </div>
          <div className="text-sm text-slate-500">
            or click to choose from local disk
          </div>
        </div>
        <div className="lg:hidden block">
          <div className="text-slate-700 font-semibold">
            Click to choose from local disk
          </div>
        </div>
      </div>
    </div>
  );
}
