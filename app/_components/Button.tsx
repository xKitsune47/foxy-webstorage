import React from "react";
import { ButtonTypes } from "../helpers/types";

type Props = {
  btnType?: ButtonTypes;
  onClick: () => void;
  text?: string;
};

const Button = ({ btnType, onClick, text = "Cancel" }: Props) => {
  if (btnType === "destroy") {
    return <span onClick={onClick}>{text}</span>;
  }

  if (btnType === "confirm") {
    return <span onClick={onClick}>{text}</span>;
  }

  if (btnType === "acknowledge") {
    return <span onClick={onClick}>{text}</span>;
  }

  return (
    <span
      onClick={onClick}
      className="w-full py-1 px-2 border-2 border-slate-200 rounded-lg cursor-pointer hover:scale-102 transition-all">
      {text}
    </span>
  );
};

export default Button;
