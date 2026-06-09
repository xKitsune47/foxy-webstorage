import React, { ReactNode } from "react";

type Props = { children: ReactNode };

const PopupButtonWrapper = ({ children }: Props) => {
  return <div className="flex flex-row gap-4">{children}</div>;
};

export default PopupButtonWrapper;
