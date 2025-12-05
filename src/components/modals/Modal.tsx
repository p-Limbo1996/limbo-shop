import type { ReactNode } from "react";
import { createPortal } from "react-dom";

type TModalActionButton = {
  label: string;
  onClick: () => void;
};

type TModal = {
  title: string;
  isOpen: boolean;
  children: ReactNode;
  actionButton: TModalActionButton;
  onClose: () => void;
};

const Modal = ({
  isOpen,
  onClose,
  title = "افزودن",
  children,
  actionButton,
}: TModal) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50">
      <div
        className="  flex relative min-w-96  max-w-11/12 max-h-[80vh] min-h-[500px]        items-stretch justify-start  md:max-w-9/12 xl:max-w-7/12 2xl:max-w-6/12
        "
      >
        <div className="modalBox-title absolute bg-blue-200! -top-11 left-1/2 -translate-x-1/2 w-72! flex items-center justify-center text-center h-11 ">
          {title}
        </div>
        <div
          className=" relative modalBox flex-1 p-6 px-8 sm:p-12 pt-10  flex flex-col   bg-white   rounded-[40px]  
        
      
          transform transition-transform duration-300"
        >
          {/* content */}
          <div className="h-[86%] flex items-start p-2 justify-center overflow-y-auto">
            {children || "محتوایی برای نمایش وجود ندارد"}
          </div>
          {/* footer */}
          <div className=" mt-auto lg:-mb-8 flex justify-center gap-2 items-center border-t border-gray-200 pt-4">
            <button
              className="bg-red-200 hover:cursor-pointer hover:scale-105 h-9 px-6 text-sm rounded-xl"
              onClick={onClose}
            >
              انصراف
            </button>

            {/* در Modal */}
            {actionButton && (
              <button
                className="bg-blue-200 hover:cursor-pointer hover:scale-105 h-9 px-6 text-sm rounded-xl"
                onClick={() => {
                  // actionButton.onClick باید فرم رو دریافت کنه
                  actionButton.onClick?.();
                }}
              >
                {actionButton.label}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
