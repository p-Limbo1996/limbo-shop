import { useState } from "react";
import { toast } from "react-toastify";
import ProductList from "./ProductList";
import SearchBox from "../../../components/searchBox/searchBox";
import {
  addProduct,
  deleteProduct,
} from "../../../services/products/productEndpoints";
import { useProducts } from "../../../services/products/useProducts";
import type { IProduct } from "../../../types/productTypes";
import AddNewProduct from "./AddNewProduct";
import { useTheme } from "../../../context/themeContext";

const ManageProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, loading, error, refetch } = useProducts();

  const handleAddProduct = async (product: IProduct) => {
    try {
      await addProduct(product);
      toast.success("محصول با موفقیت اضافه شد");
      setIsOpen(false);
      refetch(); // ← آپدیت لیست
    } catch (err: any) {
      toast.error(err.message || "خطای ناشناخته");
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      await deleteProduct(id);
      toast.success("محصول حذف شد");
      refetch(); // ← آپدیت لیست بعد حذف
    } catch (err) {
      toast.error("حذف محصول با خطا مواجه شد");
      console.error(err);
    }
  };
  const {theme} = useTheme() 
  const handleSearch = () => {
    toast.success("سرچ با موفقیت انجام شد");
  };
  return (
    <div className="lg:col-span-3 col-span-4    space-y-4  ">
      <div className={`
      ${theme==="light"
          ?"border-gray-100":"border-gray-700 bg-gray-800 "}
      
      flex justify-between border p-4
         rounded-xl shadow  px-4`}>
        <button
          onClick={() => setIsOpen(true)}
          className="  cursor-pointer hover:scale-105 hover:bg-indigo-600 rounded-xl  lg:text-md text-sm px-4 py-2   bg-indigo-500 text-white"
        >
          افزودن کالا
        </button>

        <SearchBox title="جستوجو کالا" onClick={handleSearch} />
      </div>

      <ProductList
        data={data}
        loading={loading}
        error={!!error}
        handleDelete={handleDeleteProduct}
      />

      <AddNewProduct
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default ManageProducts;
