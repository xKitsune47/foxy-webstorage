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
import {
  ArrowDownTrayIcon,
  ArrowsPointingOutIcon,
  InformationCircleIcon,
  PencilIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

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
      icon: <ArrowsPointingOutIcon className="size-6" />,
    },
    {
      text: "Edit name",
      callback: handleEditName,
      icon: <PencilIcon className="size-6" />,
    },
    {
      text: "Download file",
      callback: handleDownload,
      icon: <ArrowDownTrayIcon className="size-6" />,
    },
    {
      text: "Share file",
      callback: handleShare,
      icon: <ShareIcon className="size-6" />,
    },
    {
      text: "File details",
      callback: handleDetails,
      icon: <InformationCircleIcon className="size-6" />,
    },
    {
      text: "Move file to trash",
      callback: handleRemove,
      icon: <TrashIcon className="size-6" />,
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
            {option.icon}
            {option.text}
          </div>
        );
      })}
    </div>,
    document.body,
  );
};

export default FileOptions;
