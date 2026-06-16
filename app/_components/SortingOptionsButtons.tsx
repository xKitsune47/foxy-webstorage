import React from "react";
import { SortingOptions, SortingTypes } from "../helpers/types";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

type Props = {
  onClick: (sortingType: SortingTypes) => void;
  sortingStates: SortingOptions;
};

const SortingOptionsButtons = ({ onClick, sortingStates }: Props) => {
  return (
    <>
      <span
        className={`cursor-pointer hover:text-slate-600 transition-all duration-200 flex flex-row items-center gap-1 ${
          sortingStates.byName.isActive ? "text-slate-800" : "text-slate-400"
        }`}
        onClick={() => onClick("abc")}>
        ABC{" "}
        {sortingStates.byName.direction === "asc" ? (
          <ArrowUpIcon className="size-5" />
        ) : (
          <ArrowDownIcon className="size-5" />
        )}
      </span>

      <span
        className={`cursor-pointer hover:text-slate-600 transition-all duration-200 flex flex-row items-center gap-1 ${
          sortingStates.byDate.isActive ? "text-slate-800" : "text-slate-400"
        }`}
        onClick={() => onClick("date")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
          />
        </svg>
        {sortingStates.byDate.direction === "asc" ? (
          <ArrowUpIcon className="size-5" />
        ) : (
          <ArrowDownIcon className="size-5" />
        )}
      </span>

      <span
        className={`cursor-pointer hover:text-slate-600 transition-all duration-200 flex flex-row items-center gap-1 ${
          sortingStates.bySize.isActive ? "text-slate-800" : "text-slate-400"
        }`}
        onClick={() => onClick("size")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
          />
        </svg>
        {sortingStates.bySize.direction === "asc" ? (
          <ArrowUpIcon className="size-5" />
        ) : (
          <ArrowDownIcon className="size-5" />
        )}
      </span>
    </>
  );
};

const SingularButton = () => {};

export default SortingOptionsButtons;
