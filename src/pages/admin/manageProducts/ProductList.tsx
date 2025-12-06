import { MessageCircleWarning, SquarePen, Trash } from "lucide-react";
import Loading from "../../../components/loading/Loading";
import type { IProduct } from "../../../types/productTypes";
import { useTheme } from "../../../context/themeContext";
import Modal from "../../../components/modals/Modal";
import { useState, type Dispatch, type SetStateAction } from "react";
import AddNewProduct from "./AddNewProduct";

type TProductList = {
  data: IProduct[];
  loading: boolean;
  error: boolean;
  handleDelete: (id: string) => void;
};

const ProductList = ({ data, loading, error, handleDelete }: TProductList) => {
  const { theme } = useTheme();
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<IProduct | null>(null);
  const deleteModalisOpen = !!selectItem;

  // const handleCloseModal = () => {
  //   setIsOpen(false);
  // };

  if (error) {
    return <>error</>;
  }
  if (loading) return <Loading />;

  return (
    <div className="space-y-4 bgre">
      {data.map((item, idx) => (
        <div className="pr-11" key={idx}>
          <div
            className={` ${
              theme === "light"
                ? "border-indigo-100"
                : "border-gray-700 text-white bg-gray-800"
            } relative w-full flex gap-4 pr-12
           items-center p-4  rounded-xl border border-r-0`}
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
              <img
                src={item.image_url}
                className="object-center object-cover img-fluid bg-gray-600
                 bg-blend-luminosity h-20"
                alt={`product-${idx}`}
              />
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
                  <button className="w-8 rounded-lg p-1 cursor-pointer hover:scale-105 h-8 text-orange-400 hover:text-orange-500 border inline-flex items-center justify-center">
                    <SquarePen />
                  </button>

                  <button
                    className="w-8 rounded-lg p-1 cursor-pointer hover:scale-105 h-8 text-red-400 hover:text-red-500 border inline-flex items-center justify-center"
                    onClick={() => setSelectItem(item)}
                  >
                    <Trash />
                  </button>
                </div>
              </div>
            </div>

           

            <Modal
              isOpen={deleteModalisOpen}
              onClose={() => setSelectItem(null)}
              actionButton={{
                label: "حذف",
                onClick: () => {
                  if (selectItem) handleDelete(selectItem.id as string);
                  setSelectItem(null);
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
                  {}
                </div>
              </div>
            </Modal>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
