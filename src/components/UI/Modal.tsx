import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  open: boolean | number;
  className?: string;
};

export default function Modal({ children, open, className = "" }: Props) {
  const dialog = useRef<HTMLDialogElement>();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      dialog.current.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
