import React from "react";
import { twMerge } from "tailwind-merge";

interface ModalProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  modalContentClassName?: string;
  closeClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  onClick,
  children,
  className,
  modalContentClassName,
  closeClassName,
  ...props
}) => {
  const handleClosingModal = (
    e?: React.SyntheticEvent<HTMLDialogElement, Event>
  ) => {
    onClose?.(e);
  };

  const handleClickingOutsideContent = (
    e: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ) => {
    if (e.currentTarget === e.target) {
      handleClosingModal();
    }

    onClick?.(e);
  };

  const handleClickOnSpan = () => handleClosingModal();

  return (
    <dialog
      {...props}
      onClose={handleClosingModal}
      className={twMerge(
        "w-screen min-h-screen bg-[#00000080] absolute top-0",
        className
      )}
      onClick={handleClickingOutsideContent}
      data-testid="modal"
    >
      <div
        className={twMerge(
          "size-[80%] bg-gray-300 rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-1 pt-10 overflow-auto",
          modalContentClassName
        )}
        data-testid="modal-content"
      >
        <span
          className={twMerge(
            "mb-1 absolute top-2 right-2 bg-white border-1 size-7 rounded-full flex items-center justify-center cursor-pointer font-extrabold transition-all duration-200 hover:bg-black hover:text-white hover:border-white",
            closeClassName
          )}
          onClick={handleClickOnSpan}
          data-testid="modal-close-button"
        >
          X
        </span>
        {children}
      </div>
    </dialog>
  );
};
export default Modal;
