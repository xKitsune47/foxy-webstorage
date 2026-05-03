import React from "react";

type Props = {
  additionalStyle?: string;
  children: React.ReactNode;
};

const BoxRoundedWrapper = ({ additionalStyle, children }: Props) => {
  return (
    <div
      className={`flex flex-col gap-4 py-6 px-4 m-2 border-2 rounded-lg border-slate-200 bg-slate-50 ${additionalStyle}`}>
      {children}
    </div>
  );
};

export default BoxRoundedWrapper;
