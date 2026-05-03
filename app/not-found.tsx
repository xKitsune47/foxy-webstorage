"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import BoxRoundedWrapper from "./_components/BoxRoundedWrapper";
import HeaderLink from "./_components/HeaderLink";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const NotFound = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <BoxRoundedWrapper additionalStyle="w-full flex flex-col items-center justify-center relative text-lg font-semibold">
      <span
        className="absolute top-4 left-4 text-slate-400 hover:text-slate-500 transition-all duration-300 cursor-pointer"
        onClick={() => router.back()}>
        &larr; Go back to previous page
      </span>
      <span>Requested path:</span>
      <span className="text-orange-600">{pathname}</span>
      <span>does not exist</span>

      <div className="w-fit">
        <HeaderLink
          to="/"
          text="Go back to home"
          icon={<ArrowLeftIcon className="size-6" />}
          additionalStyle="p-3"
        />
      </div>
    </BoxRoundedWrapper>
  );
};

export default NotFound;
