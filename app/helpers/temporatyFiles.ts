import { File } from "./types";

const tempFiles: File[] = [
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

export { tempFiles };
