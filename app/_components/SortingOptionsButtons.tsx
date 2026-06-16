import React, { MouseEventHandler, ReactNode } from "react";
import { SortingOptions, SortingTypes } from "../helpers/types";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CalendarDaysIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

type Props = {
  onClick: (sortingType: SortingTypes) => void;
  sortingStates: SortingOptions;
};

const SortingOptionsButtons = ({ onClick, sortingStates }: Props) => {
  return (
    <>
      <SingularButton
        onSort={() => onClick("abc")}
        sortingType={sortingStates.byName}>
        ABC
      </SingularButton>
      <SingularButton
        onSort={() => onClick("date")}
        sortingType={sortingStates.byDate}>
        <CalendarDaysIcon className="size-5" />
      </SingularButton>
      <SingularButton
        onSort={() => onClick("size")}
        sortingType={sortingStates.bySize}>
        <ScaleIcon className="size-5" />
      </SingularButton>
    </>
  );
};

type PropsSingular = {
  children: ReactNode;
  onSort: MouseEventHandler<HTMLSpanElement>;
  sortingType: { isActive: boolean; direction: "asc" | "desc" };
};

const SingularButton = ({ children, onSort, sortingType }: PropsSingular) => {
  return (
    <span
      className={`cursor-pointer hover:text-slate-600 transition-all duration-200 flex flex-row items-center gap-1 ${
        sortingType.isActive ? "text-slate-800" : "text-slate-400"
      }`}
      onClick={onSort}>
      {children}
      {sortingType.direction === "asc" ? (
        <ArrowUpIcon className="size-5" />
      ) : (
        <ArrowDownIcon className="size-5" />
      )}
    </span>
  );
};

export default SortingOptionsButtons;
