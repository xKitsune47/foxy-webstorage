import React, { ReactNode } from "react";
import BoxRoundedWrapper from "./BoxRoundedWrapper";
import Button from "./Button";

type Props = {
  children: ReactNode;
  cancelPopup: () => void;
  confirmAction: () => void;
};

const ScreenPopup = ({ children, cancelPopup, confirmAction }: Props) => {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full opacity-20 bg-black flex items-center justify-center z-998"
        onClick={cancelPopup}></div>
      <BoxRoundedWrapper additionalStyle="items-center justify-center absolute z-999 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8">
        {children}
        <div className="flex flex-row gap-4">
          <Button onClick={cancelPopup} />
          <Button onClick={confirmAction} btnType="confirm" />
        </div>
      </BoxRoundedWrapper>
    </>
  );
};

export default ScreenPopup;
