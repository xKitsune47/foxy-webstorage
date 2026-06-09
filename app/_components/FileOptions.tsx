"use client";

import React, {
  CSSProperties,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { PopupTypes } from "../helpers/types";

type Props = {
  fileId: number;
  anchorRef: RefObject<HTMLElement | null>;
  onClose: () => void;
  openPopup: (popupType: PopupTypes, fileId: number) => void;
};

const popupWidth = 272;
const popupGap = 8;

const FileOptions = ({ fileId, anchorRef, onClose, openPopup }: Props) => {
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [positionStyle, setPositionStyle] = useState<CSSProperties | null>(
    null,
  );

  const handleOpen = () => {
    alert("not implemented!");
  };

  const handleDownload = () => {
    alert("not implemented!");
  };

  const handleEditName = () => {
    openPopup("name", fileId);
  };

  const handleDetails = () => {
    openPopup("details", fileId);
  };

  const handleShare = () => {
    openPopup("share", fileId);
  };

  const handleRemove = () => {
    openPopup("delete", fileId);
  };

  useEffect(() => {
    const updatePosition = () => {
      const anchorElement = anchorRef.current;

      if (!anchorElement) {
        return;
      }

      const rect = anchorElement.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      const openBelow = spaceBelow >= 220 || spaceBelow >= spaceAbove;

      setPositionStyle({
        position: "fixed",
        top: openBelow ? rect.bottom + popupGap : undefined,
        bottom: openBelow
          ? undefined
          : window.innerHeight - rect.top + popupGap,
        right: Math.max(8, window.innerWidth - rect.right),
        width: popupWidth,
        maxHeight: Math.max(
          160,
          (openBelow ? spaceBelow : spaceAbove) - popupGap * 2,
        ),
        overflowY: "auto",
        zIndex: 50,
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [anchorRef]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        popupRef.current &&
        !popupRef.current.contains(target) &&
        anchorRef.current &&
        !anchorRef.current.contains(target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [anchorRef, onClose]);

  const options: { text: string; callback: () => void; icon: ReactNode }[] = [
    {
      text: "Open file",
      callback: handleOpen,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
        />
      ),
    },
    {
      text: "Edit name",
      callback: handleEditName,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
        />
      ),
    },
    {
      text: "Download file",
      callback: handleDownload,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      ),
    },
    {
      text: "Share file",
      callback: handleShare,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
        />
      ),
    },
    {
      text: "File details",
      callback: handleDetails,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      ),
    },
    {
      text: "Move file to trash",
      callback: handleRemove,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
        />
      ),
    },
  ];

  if (!positionStyle) {
    return null;
  }

  return createPortal(
    <div
      ref={popupRef}
      className="flex flex-col bg-slate-50 border border-slate-200 p-2 gap-2 rounded-lg shadow-lg"
      style={positionStyle}>
      {options.map((option) => {
        return (
          <div
            className="flex flex-row hover:bg-orange-100 p-2 rounded-lg items-center gap-2 cursor-pointer transition-all duration-200"
            key={option.text}
            onClick={option.callback}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6">
              {option.icon}
            </svg>

            {option.text}
          </div>
        );
      })}
    </div>,
    document.body,
  );
};

export default FileOptions;
