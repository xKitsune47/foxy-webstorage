import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import ListLayout from "./_components/ListLayout";
import { DocumentIcon } from "@heroicons/react/24/outline";
import FileHorizontal from "./_components/FileHorizontal";

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
        <h3 className="text-3xl">Newest</h3>

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
      </div>
    </ListLayout>
  );
}
