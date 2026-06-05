"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BoxRoundedWrapper from "./BoxRoundedWrapper";
import HeaderLink from "./HeaderLink";
import { HomeIcon } from "@heroicons/react/24/outline";
import { ShareIcon } from "@heroicons/react/24/outline";
import logo from "../_assets/kitsune2.svg";
import { FireIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

interface Disk {
  spaceUsed: number;
  totalSpace: number;
}

const subpages: { link: string; text: string; icon: ReactNode }[] = [
  { link: "/", text: "My files", icon: <HomeIcon className="size-6" /> },
  { link: "/shared", text: "Shared", icon: <ShareIcon className="size-6" /> },
  {
    link: "/newest",
    text: "Newest",
    icon: <FireIcon className="size-6" />,
  },
  { link: "/trash", text: "Trash", icon: <TrashIcon className="size-6" /> },
];

const Navbar = () => {
  const [expanded, setExpanded] = useState<boolean>(true);
  const [diskSpace, setDiskSpace] = useState<Disk>({
    spaceUsed: 0,
    totalSpace: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      setDiskSpace({ spaceUsed: 70.5, totalSpace: 100 });
    };

    fetchData();
  }, []);

  return (
    <BoxRoundedWrapper
      additionalStyle={`${expanded ? "lg:w-1/4 max-w-full" : "w-fit"} transition-all duration-300`}>
      <Link
        href="/"
        className="flex items-center text-2xl max-lg:w-full justify-center">
        <Image src={logo} alt="Kitsune logo" className="h-16 w-auto" priority />{" "}
        <span className="hidden 2xl:block">
          {expanded && "Foxy webstorage"}
        </span>
      </Link>

      {subpages.map((el) => {
        return (
          <HeaderLink
            to={el.link}
            text={expanded ? el.text : ""}
            key={el.link}
            icon={el.icon}
            additionalStyle={expanded ? "" : "justify-center"}
          />
        );
      })}

      <div className="flex-row justify-between items-center mt-auto gap-8 hidden lg:flex">
        {expanded && (
          <div className="w-full flex flex-col">
            <label htmlFor="disk-space" className="font-semibold">
              % used: {diskSpace?.spaceUsed}/{diskSpace?.totalSpace}
            </label>
            <progress
              className="w-full rounded-full"
              id="disk-space"
              value={(diskSpace?.spaceUsed / diskSpace?.totalSpace) * 100}
              max={100}>
              {(diskSpace?.totalSpace - diskSpace?.spaceUsed) /
                diskSpace?.totalSpace}
            </progress>
          </div>
        )}

        <span
          className={`p-2 border-2 rounded-xl flex flex-row gap-4 text-lg font-semibold hover:bg-orange-100 hover:border-orange-200 transition-all duration-300 items-center bg-white border-slate-200 cursor-pointer ${expanded && "w-1/3"} w-full justify-center lg:block hidden`}
          onClick={() => {
            setExpanded(!expanded);
          }}>
          <ChevronLeftIcon className={`size-6 ${!expanded && "rotate-180"}`} />
        </span>
      </div>
    </BoxRoundedWrapper>
  );
};

export default Navbar;
