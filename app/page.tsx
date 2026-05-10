"use client";

import ListLayout from "./_components/ListLayout";
import FileHorizontal from "./_components/FileHorizontal";
import FileUpload from "./_components/FileUpload";

export default function Home() {
  const tempFiles: {
    name: string;
    format: string;
    size: number;
  }[] = [
    {
      name: "Lorem ipsum",
      format: "pdf",
      size: 210000,
    },
    {
      name: "Lorem ipsum",
      format: "xlsx",
      size: 210000,
    },
    {
      name: "Lorem ipsum",
      format: "doc",
      size: 210000,
    },
    {
      name: "Lorem ipsum",
      format: "ppt",
      size: 210000,
    },
    {
      name: "Lorem ipsum",
      format: "docx",
      size: 210000,
    },
  ];

  return (
    <ListLayout>
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl">New files</h3>

        <div className="flex flex-row justify-between">
          {tempFiles.map((file) => {
            return (
              <FileHorizontal
                key={file.name}
                fileName={file.name}
                size={file.size}
                format={file.format}
              />
            );
          })}
        </div>

        <h3 className="text-3xl">Files</h3>
        <div className="flex flex-row min-h-full">
          <div className="w-1/2">
            <FileUpload
              onFiles={(files) => {
                console.log("Wybrane pliki:", files);
              }}
            />
          </div>
        </div>
      </div>
    </ListLayout>
  );
}
