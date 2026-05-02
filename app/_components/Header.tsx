import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import BoxRoundedWrapper from "./BoxRoundedWrapper";
import HeaderLink from "./HeaderLink";
import { HomeIcon } from "@heroicons/react/24/outline";
import { ShareIcon } from "@heroicons/react/24/outline";
import logo from "../_assets/kitsune2.svg";
import { FireIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

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

const Header = () => {
  return (
    <BoxRoundedWrapper additionalStyle="w-1/4">
      <Link href="/" className="flex items-center justify-center text-2xl">
        <Image src={logo} alt="Kitsune logo" className="h-16 w-auto" priority />{" "}
        Foxy webstorage
      </Link>

      {subpages.map((el) => {
        return (
          <HeaderLink
            to={el.link}
            text={el.text}
            key={el.link}
            icon={el.icon}
          />
        );
      })}

      {/* SPACE USED WILL DISPLAY AMOUNT USED OUT OF AMOUNT TOTAL */}
      <div className="w-full flex flex-col mt-auto">
        <label htmlFor="disk-space" className="font-semibold">
          Space used
        </label>
        <progress id="disk-space" value="20">
          20%
        </progress>
      </div>
    </BoxRoundedWrapper>
  );
};

export default Header;
