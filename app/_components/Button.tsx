import React from "react";
import { ButtonTypes } from "../helpers/types";

type Props = {
  btnType?: ButtonTypes;
  onClick: () => void;
  text?: string;
};

const baseStyles: string =
  "w-full py-1 px-2 border-2 rounded-lg cursor-pointer transition-all font-semibold";

const Button = ({ btnType, onClick, text = "Cancel" }: Props) => {
  if (btnType === "destroy") {
    return (
      <span
        onClick={onClick}
        className={`${baseStyles} border-red-600 bg-red-400 hover:bg-red-300 hover:border-red-400`}>
        {text}
      </span>
    );
  }

  if (btnType === "confirm") {
    return (
      <span
        onClick={onClick}
        className={`${baseStyles} border-green-600 bg-green-400 hover:bg-green-300 hover:border-green-400 text-white`}>
        {text}
      </span>
    );
  }

  if (btnType === "acknowledge") {
    return (
      <span
        onClick={onClick}
        className={`${baseStyles} border-yellow-600 bg-yellow-400 hover:bg-yellow-300 hover:border-yellow-400`}>
        {text}
      </span>
    );
  }

  return (
    <span
      onClick={onClick}
      className={`${baseStyles} border-slate-200 hover:border-slate-300`}>
      {text}
    </span>
  );
};

export default Button;
