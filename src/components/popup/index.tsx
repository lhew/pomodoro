import React from "react";
import { Icons } from "../../generated/icons/types";
import BackDrop from "../ui/backdrop";
import Card from "../ui/card";

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
        <Card
          className={[
            "z-20 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white",
          ]}
        >
          <button
            className="absolute top-0 right-0 m-3"
            onClick={() => {
              onClose();
            }}
          >
            <i className={Icons.CANCEL} />
          </button>
          {children}
        </Card>
        <BackDrop
          className={["z-10"]}
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
