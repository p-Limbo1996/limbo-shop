import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { productFields } from "../../../data/products/productFormFields";
import Modal from "../../../components/modals/Modal";
import type { IProduct, TModalType } from "../../../types/productTypes";
import { useTheme } from "../../../context/themeContext";
import UploadFile from "../../../components/uploadFile/UploadFile";

type TProductModal = {
  type: TModalType;
  product?: IProduct | null;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleSubmit?: (product: IProduct) => Promise<void>; // فقط یک تابع
};

const ProductModal = ({
  type,
  product,
  isOpen,
  setIsOpen,
  handleSubmit,
}: TProductModal) => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<IProduct>({
    name: "",
    category_id: null,
    description: "",
    price: null,
    image_url: "",
  });




  useEffect(() => {
    if (type === "edit" && product) {
      setFormData({
        name: product.name ?? "", // درستش
        category_id: product.category_id ?? null,
        description: product.description ?? "",
        price: product.price ?? null,
        image_url: product.image_url ?? "",
      });
    } else if (type === "add") {
      setFormData({
        name: "",
        category_id: null,
        description: "",
        price: null,
        image_url: "",
      });
    }
  }, [product, type]);

  const handleCloseModal = () => {
    setIsOpen(false);
    setFormData({
      name: "",
      category_id: null,
      description: "",
      price: null,
      image_url: "",
    });
  };

  // const handleSubmit1 = async () => {
  // // step1
  //   //بیاییم اینجا عکس رو اپلود کنیم اگر درست انجام دش بیاییم بریم فرم رو بفرسیم 

  // // step2  
  // handleSubmit?.(formData)
    
  // };








  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal
    type={type}
      isOpen={isOpen}
      onClose={handleCloseModal}
      actionButton={{
        label: `${type === "add" ? "افزودن" : "ذخیره"}`,
        onClick: () => handleSubmit?.(formData),
      }}
      title={`${type === "add" ? "افزودن محصول" : "ویرایش محصول"}`}
    >
      <form className="w-full flex flex-col gap-5" action="">
    
        {productFields.map((i) => (
          <div className="flex relative flex-col  h-full" key={i.name}>
            <label
              className={`
                
                ${
                  theme === "light"
                    ? "bg-white text-gray-700"
                    : "bg-gray-900 px-2 rounded-lg  text-gray-400"
                }
                
                
                absolute -top-2 text-xs right-3  z-10 mb-1 font-medium `}
              htmlFor={i.name}
            >
              {i.label}
            </label>
            <input
              id={i.name}
              type={i.type}
              name={i.name}
              placeholder={i.placeholder}
              onChange={handleInputChange}
              value={formData[i.name as keyof typeof formData] ?? ""}
              className={`
                ${
                  theme === "light"
                    ? " bg-white border-gray-200 border-r-indigo-200 focus:border-indigo-200"
                    : "bg-gray-900 focus:border-gray-600 border-gray-800 text-white  border-r-gray-600"
                }
                  
                
                px-4 text-sm placeholder:text-xs text-center border-r-3
                shadow-inner  py-2
                rounded-lg border-2 focus:border-2  focus:outline-0
                 transition backdrop-blur-sm`}
            />
          </div>
        ))}

    <UploadFile
          onUploadComplete={(url) =>
            setFormData((prev) => ({ ...prev, image_url: url }))
          }
        />

      </form>
    </Modal>
  );
};

export default ProductModal;
