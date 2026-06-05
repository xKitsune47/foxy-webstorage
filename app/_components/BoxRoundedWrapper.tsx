import React from "react";

type Props = {
  additionalStyle?: string;
  children: React.ReactNode;
  dynamic?: boolean;
};

const BoxRoundedWrapper = ({
  additionalStyle,
  children,
  dynamic = true,
}: Props) => {
  if (!dynamic) {
    return (
      <div
        className={`flex flex-col gap-4 py-6 px-4 m-2 border-2 rounded-lg border-slate-200 bg-slate-50 ${additionalStyle}`}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={`flex lg:flex-col flex-row gap-4 lg:py-6 py-2 px-4 m-2 border-2 rounded-lg border-slate-200 bg-slate-50 ${additionalStyle}`}>
      {children}
    </div>
  );
};

export default BoxRoundedWrapper;
