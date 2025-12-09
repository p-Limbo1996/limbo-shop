import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products/productEndpoints";
import type { IProduct } from "../../types/productTypes";
import { useTheme } from "../../context/themeContext";
import {
  DiamondPlus,
  Heart,
  SquarePen,
  Star,
  StarHalf,
  ThumbsDown,
  ThumbsUp,
  Trash,
} from "lucide-react";
import { User, Tag, Shield, Truck } from "lucide-react";

import Loading from "../../components/loading/Loading";
import ProductInfo from "./ProductInfoTabs";

const ProductDetails = () => {
  const { id: ProductId } = useParams();
  const [item, setItem] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  console.log(ProductId);

  useEffect(() => {
    let isMounted = true;

    const getProduct = async () => {
      setLoading(true);
      try {
        const Product = await getProductById(ProductId as string);
        if (Product && isMounted) {
          setItem(Product);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (ProductId) getProduct();

    return () => {
      isMounted = false;
    };
  }, [ProductId]);

  console.log(item);
  const { theme } = useTheme();

  if (loading) return <Loading />;

  return (
<>
    <div className="flex flex-col lg:flex-row">
      <div
        className={`lg:w-6/12 xl:w-4/12  lg:min-h-[40vh] h-[40vh] lg:max-h-[80vh] min-h-[50vh] flex flex-col  relative
                lg:rounded-r-xl rounded-t-xl lg:rounded-l-none lg:border-r-6 border-t-6 xl:border-t border
                            ${
                              theme === "light"
                                ? "border-gray-200 bg-white border-r-indigo-200"
                                : "border-gray-700  bg-indigo-50 opacity-75 border-r-gray-600"
                            }

                border-gray-200  p-2 px-6 `}
      >
        {item?.image_url && (
          <img
            src={item?.image_url}
            className="object-center object-contain img-fluid  mix-blend-darken
              w-full h-full"
            alt={`product`}
          />
        )}

        <div
          className={`
          
           

           flex items-center  justify-start  top-1 absolute right-1 rounded-xl p-1 w-40 `}
        >
          <div className="flex lg:flex-col gap-2 items-start">
            {/* دکمه ویرایش */}
            <button
              className={`group flex  cursor-pointer items-center justify-start pr-2.5 w-12 h-10  rounded-lg p-1 border
      ${
        theme === "light"
          ? "bg-orange-50 text-orange-400 hover:text-orange-500 hover:bg-orange-100"
          : "bg-gray-800 text-indigo-200 hover:bg-gray-700 hover:text-indigo-100"
      } 
      transition-all duration-300 ease-in-out hover:w-22`}
            >
              <SquarePen className="" />
              <span className="text-xs text-left opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-full group-hover:pr-2  transition-all duration-300 whitespace-nowrap">
                ویرایش
              </span>
            </button>

            {/* دکمه حذف */}
            <button
              className={`group flex cursor-pointer items-center justify-start pr-2.5 w-12 h-10   rounded-lg p-1 border
      ${
        theme === "light"
          ? "bg-red-50 text-red-400 hover:bg-red-100 hover:text-red-500"
          : "bg-red-500 text-white hover:bg-red-600"
      } 
      transition-all duration-300 ease-in-out hover:w-22`}
            >
              <Trash />
              <span className="text-xs text-left opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-full group-hover:pr-2 transition-all duration-300 ml-1 whitespace-nowrap">
                حذف
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={` relative lg:rounded-l-xl   lg:rounded-none rounded-b-xl border xl:border-t lg:border-r-0 border-t-0  
      ${theme === "light" ? "border-gray-200" : "border-gray-700"}
       lg:w-6/12 xl:w-8/12 flex flex-col-reverse xl:flex-row-reverse  `}
      >
        <div
          className={`"   xl:w-1/3 justify-center itece flex-col flex gap-4 
          p-3 rounded-lg border-r
          ${
            theme === "light"
              ? "bg-gray-100 border-gray-200"
              : "bg-gray-800  border-gray-700"
          }
          `}
        >
          <div className="flex flex-col gap-3 p-4  rounded-xl text-gray-500 ">
            {/* نام فروشنده */}
            <div className="flex items-center gap-2 ">
              <User size={18} />
              <span className="text-sm font-medium">نام فروشنده</span>
            </div>

            {/* قیمت */}
            <div className="flex items-center gap-2 ">
              <Tag size={18} />
              <span className="text-sm font-medium line-through text-gray-400">
                {item?.price ? item?.price.toLocaleString() : "-"}
              </span>

              <span className="text-sm font-semibold text-indigo-500">
                {" "}
                {item?.price
                  ? item?.price.toLocaleString() + " تـــومان "
                  : "-"}
              </span>
            </div>

            {/* گارانتی */}
            <div className="flex items-center gap-2 ">
              <Shield size={18} />
              <span className="text-sm font-medium">12 ماه گارانتی</span>
            </div>

            {/* امتیاز */}
            <div className="flex items-center gap-2 ">
              <Star size={18} />
              <span className="text-sm font-medium">150 امتیاز</span>
            </div>

            {/* ارسال */}
            <div className="flex items-center gap-2 ">
              <Truck size={18} />
              <span className="text-sm font-medium">روش و هزینه ارسال</span>
            </div>
          </div>

          <button className="flex justify-center mt-auto font-semibold bg-indigo-200 items-center  h-10 px-4  gap-2  p-1  rounded-lg shadow-inner border border-gray-200  hover:border-gray-400/60 cursor-pointer hover:scale-105 duration-300 transition-all ">
            <DiamondPlus className="text-gray-600" />{" "}
            <span className="text-sm text-gray-600"> افزودن به سبد خرید</span>{" "}
          </button>
        </div>

        {/* like dislike  */}
        <div className="absolute flex gap-4 items-center h-12 left-4 xl:left-87 top-3">
          <p
            className={`flex items-center  gap-2  p-1 px-2 rounded-lg shadow-inner border
             ${theme === "light" ? "border-gray-200" : "border-gray-700 "}
             hover:border-gray-400/60 cursor-pointer hover:scale-105 duration-300 transition-all `}
          >
            <Heart className="mb-1 text-red-500 " />
            <span className="text-xs text-gray-400">234</span>{" "}
          </p>
          <p
            className={`flex items-center  gap-2  p-1 px-2 rounded-lg shadow-inner border
             ${theme === "light" ? "border-gray-200" : "border-gray-700 "}
             hover:border-gray-400/60 cursor-pointer hover:scale-105 duration-300 transition-all `}
          >
            <ThumbsUp className="mb-2 text-green-700" />{" "}
            <span className="text-xs text-gray-400">4345</span>{" "}
          </p>
          <p
            className={`flex items-center  gap-2  p-1 px-2 rounded-lg shadow-inner border
             ${theme === "light" ? "border-gray-200" : "border-gray-700 "}
             hover:border-gray-400/60 cursor-pointer hover:scale-105 duration-300 transition-all `}
          >
            <ThumbsDown className="mt-2 text-gray-400" />{" "}
            <span className="text-xs text-gray-400">1</span>{" "}
          </p>
        </div>

        <div
          className={`flex flex-col xl:w-2/3 p-6 gap-6 pt-20
        
         ${theme === "light" ? "text-gray-600 " : "text-white"}`}
        >
          <div className="lg:flex  gap-1   items-center rounded-lg">
            <p className="text-md   "> نام محصول :</p>
            <p className="text-sm"> {item?.name}</p>
          </div>
          <div className="lg:flex  gap-1   items-center rounded-lg">
            <p className="text-md   "> امتیاز :</p>
            <p className="text-sm">
              {" "}
              <span className="flex gap-1 text-yellow-500 fill-amber-400">
                <StarHalf />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
            </p>
          </div>
          <div className="lg:flex flex-col  gap-1   items-start rounded-lg">
            <p className="text-md   "> جزئیات :</p>
            <p className="text-sm"> {item?.description}</p>
          </div>
          <div className="lg:flex  gap-1   items-center rounded-lg">
            <p className="text-md   "> قیمت محصول :</p>
            <p className="text-sm text-indigo-400">
              {" "}
              {item?.price ? item?.price.toLocaleString() + " تـــومان " : "-"}
            </p>
          </div>
        </div>


      </div>
    </div>
<ProductInfo/>
</>
  );
};

export default ProductDetails;
