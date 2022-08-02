import React from "react";
import { Icons } from "../../generated/icons/types";

export interface PopupProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen?: boolean;
  backdropCloses?: boolean;
}

const Popup = ({
  children,
  onClose = () => null,
  isOpen,
  backdropCloses = true,
}: PopupProps) => {
  if (isOpen) {
    return (
      <div className="w-screen h-screen fixed left-0 top-0">
        <div className="rounded min-w-[25em] max-w-[100em] px-5 pt-3 pb-4  z-20 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white">
          <button
            className="absolute top-0 right-0 m-3"
            onClick={() => {
              onClose();
            }}
          >
            <i className={Icons.CANCEL} />
          </button>
          {children}
        </div>
        <div
          className="backdrop z-10 fixed w-screen h-screen opacity-50 bg-black"
          onClick={() => {
            if (backdropCloses) {
              onClose();
            }
          }}
        />
      </div>
    );
  }
  return null;
};

export default Popup;
