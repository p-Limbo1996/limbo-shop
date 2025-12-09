import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "../../context/themeContext";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";
import { useCloseOnEscape } from "../../hooks/useCloseOnEscape ";
import { OctagonX } from "lucide-react";
import type { TModalType } from "../../types/productTypes";

type TModalActionButton<T = void> = {
  label: string;
  onClick: (arg?: T) => void;
};

interface ModalConfig {
  buttonColor: string;
  icon: React.ReactNode;
  titlePrefix: string;
}


type TModal = {
  title: string;
  isOpen: boolean;
  type: TModalType;
  children: ReactNode;
  actionButton: TModalActionButton;
  onClose: () => void;
};

const getModalConfig = (type: TModalType): ModalConfig => {
  switch (type) {
   case "delete":
      return {
        buttonColor: "bg-red-300 hover:bg-red-400",
        icon: <span><OctagonX size={20} className="text-gray-700"/></span>, // یا هر آیکون React دلخواه
        titlePrefix: "حذف محصول",
      };
    case "add":
      return {
        buttonColor: "bg-emerald-300 hover:bg-green-400",
        icon: <span>➕</span>,
        titlePrefix: "افزودن محصول",
      };
    case "edit":
      return {
        buttonColor: "bg-orange-300 hover:bg-yellow-400",
        icon: <span>✏️</span>,
        titlePrefix: "ویرایش محصول",
      };
    default:
      return {
        buttonColor: "bg-indigo-200",
        icon: null,
        titlePrefix: "",
      };
      
  }
};








const Modal = ({
  isOpen,
  onClose,
  title = "افزودن",
  type,
  children,
  actionButton,
}: TModal) => {
  // DisableBodyScroll
  useDisableBodyScroll(isOpen);
  useCloseOnEscape(isOpen, onClose);

  if (!isOpen) return null;

  const { theme } = useTheme();
const config = getModalConfig(type);
  return createPortal(
    <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50">
    
    
    
    
      <div
        className={`
          
      
          flex relative min-w-11/12 sm:min-w-8/12 md:min-w-5/12 xl:min-w-4/12     max-w-11/12 max-h-[80vh] min-h-[600px] items-stretch justify-start  md:max-w-9/12 xl:max-w-7/12 2xl:max-w-6/12
        `}
      >
        <div
          className={`modalBox-title absolute
    ${theme === "light" ? "bg-indigo-200!" : "bg-gray-700! text-white"}


          -top-11 left-1/2 -translate-x-1/2 w-72!
          flex items-center justify-center text-center h-11 text-gray-700 gap-2 `}
        >
          {/* {config.icon} */}
          {title || config.titlePrefix}
        </div>
        <div
          className={`
                ${theme === "light" ? " bg-white " : "bg-gray-800  "}
            
            relative modalBox flex-1 p-6 px-8 sm:p-10 pt-10
            flex flex-col     rounded-[40px]  
        
      
          transform transition-transform duration-300`}
        >
          {/* content */}
          <div className="h-[86%] flex items-start p-4 justify-center overflow-y-auto">
            {children || "محتوایی برای نمایش وجود ندارد"}
          </div>
          {/* footer */}
          <div className=" mt-auto lg:-mb-5 flex justify-center gap-2 items-center border-t border-gray-200 pt-4">
            <button
              className=" bg-indigo-200 hover:cursor-pointer hover:scale-105 h-9 px-6 text-sm rounded-xl"
              onClick={onClose}
            >
              انصراف
            </button>

            {/* در Modal */}
            {actionButton && (
              <button
                className={`
                  ${config.buttonColor}
                  
                  hover:cursor-pointer hover:scale-105 h-9 px-6 text-sm rounded-xl`}
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
