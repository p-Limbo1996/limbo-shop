import { useState, type Dispatch, type SetStateAction } from "react";
import { productFields } from "../../../data/productFormFields";
import Modal from "../../../components/modals/Modal";
import type { IProduct } from "../../../types/productTypes";

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
              className="absolute -top-2 text-xs right-3 bg-white z-10 mb-1 font-medium text-gray-700"
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
              className="px-4 text-sm placeholder:text-xs text-center border-r-3 border-r-blue-200 shadow-inner bg-white border-gray-200 py-2 rounded-lg border-2 focus:border-2 focus:border-blue-200 focus:outline-0 transition backdrop-blur-sm"
            />
          </div>
        ))}
      </form>
    </Modal>
  );
};

export default AddNewProduct;
