"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

type Props = {
  to: string;
  text: string;
  additionalStyle?: string;
  icon: ReactNode;
};

const HeaderLink = ({ to, text, additionalStyle, icon }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      href={to}
      className={`w-full p-2 border-2 rounded-xl flex flex-row gap-4 text-lg font-semibold hover:bg-orange-100 hover:border-orange-200 transition-all duration-300 items-center ${additionalStyle} ${pathname === to ? "bg-orange-100 border-orange-200" : "bg-white border-slate-200"}`}
      style={pathname === to ? { pointerEvents: "none" } : {}}
      replace>
      {icon} {text}
    </Link>
  );
};

export default HeaderLink;
