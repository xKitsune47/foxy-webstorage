"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { ChangeEventHandler, SubmitEventHandler } from "react";

type Props = {
  handleSearch: SubmitEventHandler<HTMLFormElement>;
  handleFieldChange: ChangeEventHandler<HTMLInputElement>;
  query: string;
};

const subpages: { link: string; text: string }[] = [
  { link: "/", text: "My files" },
  { link: "/shared", text: "Shared" },
  { link: "/newest", text: "Newest" },
  { link: "/trash", text: "Trash" },
];

const Header = ({ handleSearch, handleFieldChange, query }: Props) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row justify-between items-center">
      <h2 className="text-xl md:text-4xl font-semibold">
        {subpages.map((page) => page.link === pathname && page.text)}
      </h2>
      <form
        onSubmit={handleSearch}
        className="flex flex-row items-center relative">
        <button
          type="submit"
          className="absolute left-2 text-slate-400 hover:text-orange-400 transition-all duration-300">
          <MagnifyingGlassIcon className="size-6" />
        </button>
        <input
          type="text"
          className="border-2 border-slate-200 rounded-xl py-2 pr-2 pl-10 md:w-80 w-40
           focus:outline-none focus:ring-0 transition-all duration-300 focus:border-orange-300 text-lg"
          value={query}
          onChange={handleFieldChange}
        />
      </form>
    </div>
  );
};

export default Header;
