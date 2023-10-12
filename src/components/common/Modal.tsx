import React, { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const Modal: FC<
  PropsWithChildren<{ hide: () => void; isShowing: boolean }>
> = ({ isShowing, hide, children }) => {
  return (
    isShowing &&
    createPortal(
      <div
        onClick={hide}
        className="z-50  flex items-center justify-center h-screen w-full bg-black/50 fixed top-0 left-0"
      >
        <div
          className="w-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>,
      document.body
    )
  );
};

export default Modal;
