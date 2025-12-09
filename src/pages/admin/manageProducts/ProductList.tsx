import { MessageCircleWarning, SquarePen, Trash } from "lucide-react";
import Loading from "../../../components/loading/Loading";
import type { IProduct } from "../../../types/productTypes";
import { useTheme } from "../../../context/themeContext";
import Modal from "../../../components/modals/Modal";
import { useState } from "react";
import ProductModal from "./ProductModal";
import SearchBox from "../../../components/searchBox/searchBox";
import { toast } from "react-toastify";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "../../../services/products/productEndpoints";
import { Link } from "react-router-dom";

type TProductList = {
  data: IProduct[];
  loading: boolean;
  error: boolean;
  refetch:()=>void
};

const ProductList = ({ data, loading, error,refetch }: TProductList) => {
  const { theme } = useTheme();
  const [addModal, setAddModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<IProduct | null>(null);


  


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

  const handleAddProduct = async (product: IProduct) => {
    try {
      await addProduct(product);
      toast.success("محصول با موفقیت اضافه شد");
      setAddModal(false);
      refetch(); // ← آپدیت لیست
    } catch (err: any) {
      toast.error(err.message || "خطای ناشناخته");
    }
  };
const handleEditProduct = async (id: string, product: IProduct) => {
  try {
    await updateProduct(id, product);
    toast.success("محصول با موفقیت ویرایش شد");
    setEditModal(false); 
    refetch();
  } catch (err: any) {
    toast.error(err.message || "خطای ناشناخته");
  }
};


  const handleSearch = () => {
    toast.success("سرچ با موفقیت انجام شد");
  };
  const openEditModal = (item: IProduct) => {
    setSelectItem(item);
    setEditModal(true);
  };

  if (error) {
    return <>error</>;
  }
  if (loading) return <Loading />;

  return (
    <div className="space-y-4 bgre">
      <div
        className={`
      ${theme === "light" ? "border-gray-100" : "border-gray-700 bg-gray-800 "}
      
      flex justify-between border p-4
         rounded-xl shadow  px-4`}
      >
        <button
          onClick={() => setAddModal(true)}
          className="  cursor-pointer hover:scale-105 hover:bg-indigo-600 rounded-xl  lg:text-md text-sm px-4 py-2   bg-indigo-500 text-white"
        >
          افزودن کالا
        </button>

        <SearchBox title="جستوجو کالا" onClick={handleSearch} />
      </div>

      {data.map((item, idx) => (
        <div className="pr-11 " key={idx}>
          <Link  to={`/productDetails/${item.id}`}  key={idx}>
          <div
            className={` ${
              theme === "light"
                ? "border-indigo-100"
                : "border-gray-700 text-white bg-gray-800"
            } relative w-full flex gap-4 pr-12
           items-center p-4  rounded-xl border border-r-0 hover:border-indigo-300/90 hover:bg-indigo-50 duration-300`}
          >
            <div
              className={`
              
              ${
                theme === "light"
                  ? "border-indigo-300"
                  : "border-gray-500  bg-gray-900"
              }
              
              
              
              
              w-22 h-22 absolute rounded-full  -right-11 border-l`}
            ></div>
            <div
              className={`w-20 h-20 hover:scale-x-[-1] transition-all
             duration-300 delay-100 overflow-hidden absolute rounded-full
             


    ${
      theme === "light"
        ? "  bg-indigo-100 border-indigo-300  hover:border-indigo-400"
        : "  bg-gray-900 border-gray-600  hover:border-gray-700"
    }

                -right-11 border-r-8 border`}
            >
              {item?.image_url && (
                <img
                  src={item?.image_url}
                  className="object-center object-cover img-fluid bg-gray-600
              bg-blend-luminosity h-20"
                  alt={`product-${idx}`}
                />
              )}
            </div>
            <div className="flex justify-between w-full">
              <div className="lg:flex flex-col gap-4 w-1/3 hidden items-center">
                <p className="text-xs">نام محصول</p>
                <p>{item.name}</p>
              </div>

              <div className="lg:flex flex-col gap-4 w-1/3 hidden items-center">
                <p className="text-xs">جزئیات</p>
                <p className="line-clamp-1">{item.description}</p>
              </div>

              <div className="flex flex-col gap-4 items-end">
                <p className="text-xs">قیمت محصول</p>
                <p>{item.price ? item.price.toLocaleString() : "-"}</p>
              </div>

              <div className="flex flex-col gap-4 items-center">
                <p className="text-xs">عملیات</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => openEditModal(item)}
                    className="w-8 rounded-lg p-1 cursor-pointer hover:scale-105 h-8 text-orange-400 hover:text-orange-500 border inline-flex items-center justify-center"
                  >
                    <SquarePen />
                  </button>

                  <button
                    className="w-8 rounded-lg p-1 cursor-pointer hover:scale-105 h-8 text-red-400 hover:text-red-500 border inline-flex items-center justify-center"
                    onClick={() => {
                      setSelectItem(item);
                      setDeleteModal(true);
                    }}
                  >
                    <Trash />
                  </button>
                </div>
              </div>
            </div>
          </div>
          </Link>
        </div>
      ))}

      {addModal && (
        <ProductModal
          type="add"
          isOpen={addModal}
          setIsOpen={setAddModal}
          handleSubmit={handleAddProduct}
        />
      )}

      {editModal && (
        <ProductModal
          type="edit"
          product={selectItem}
          isOpen={editModal}
          setIsOpen={setEditModal}
         handleSubmit={(product) => handleEditProduct(selectItem?.id as string, product)}
        />
      )}

      {deleteModal && (
        <Modal
          isOpen={deleteModal}
          onClose={() => {
            setSelectItem(null);
            setDeleteModal(false);
          }}
          actionButton={{
            label: "حذف",
            onClick: () => {
              if (selectItem) handleDeleteProduct(selectItem.id as string);
              setSelectItem(null);
              setDeleteModal(false);
            },
          }}
          title="حذف محصول"
        >
          <div className="flex flex-col gap-5  items-center">
            <div className="flex items-center gap-6 ">
              <MessageCircleWarning
                size={62}
                className="mb-10 text-indigo-400"
              />
              <p className="text-indigo-400 font-bold text-xl">
                آیا مطمعن هستید که میخواهید این محصول را حذف کنید ؟
              </p>
            </div>
            <div
              className={` ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }  flex gap-6 border border-indigo-300/50 items-center p-2 rounded-xl`}
            >
              <img
                src={selectItem?.image_url}
                className="w-36 h-36 rounded-xl"
                alt=""
              />
              <div className="grid lg:grid-cols-3 grid-cols-2 ">
                <div className="flex flex-col gap-2 item-center text-center">
                  <p className="w-full pb-4  text-indigo-300 text-center border-b">
                    نام
                  </p>{" "}
                  <span className="pt-2">{selectItem?.name}</span>
                </div>
                <div className="flex flex-col gap-2 item-center text-center">
                  <p className="w-full pb-4  text-indigo-300 text-center border-b">
                    قیمت
                  </p>{" "}
                  <span className="pt-2">{selectItem?.price}</span>
                </div>
                <div className="lg:flex flex-col gap-2 item-center text-center hidden">
                  <p className="w-full pb-4  text-indigo-300 text-center border-b ">
                    توضیحات
                  </p>{" "}
                  <span className="pt-2 line-clamp-2">
                    {selectItem?.description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProductList;
