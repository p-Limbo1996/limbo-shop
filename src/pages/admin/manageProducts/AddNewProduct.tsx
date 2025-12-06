import {  useState, type Dispatch, type SetStateAction } from "react";
import { productFields } from "../../../data/productFormFields";
import Modal from "../../../components/modals/Modal";
import type { IProduct } from "../../../types/productTypes";
import { useTheme } from "../../../context/themeContext";

type TAddNewProduct = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleAddProduct: (product: IProduct) => Promise<void>;
};

const AddNewProduct = ({
  isOpen,
  setIsOpen,
  handleAddProduct,
}: TAddNewProduct) => {
  const [formData, setFormData] = useState<IProduct>({
    name: "",
    category_id: null,
    description: "",
    price: null,
    image_url: "",
  });

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

  const handleSubmit = async () => {
    await handleAddProduct(formData);
    handleCloseModal();
  };
  const { theme } = useTheme();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCloseModal}
      actionButton={{
        label: "افزودن",
        onClick: handleSubmit,
      }}
      title="افزودن محصول"
    >
      <form className="w-full" action="">
        {productFields.map((i) => (
          <div className="flex relative flex-col mb-5 h-full" key={i.name}>
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
      </form>
    </Modal>
  );
};

export default AddNewProduct;
