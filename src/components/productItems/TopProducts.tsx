import { ChevronLeft, ChevronRight, Loader } from "lucide-react";
import { useTheme } from "../../context/themeContext";
import ProductItem from "./ProductItem";
import { useProducts } from "../../services/products/useProducts";

const TopProducts = () => {
  const { data, loading, error } = useProducts();
  const { theme } = useTheme();

  if (error) {
    return <>error</>;
  }
  if (loading) {
    return (
      <div className="w-full flex gap-6 mt-2 lg:px-36 p-6 overflow-hidden">
        <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-6 w-full gap-4">
          {Array(6)
            .fill("")
            .map((_) => {
              return (
                <div className="h-84 animate-spin flex   items-center justify-center px-8 bg-white-300 rounded-xl -mt-6 ">
                  {" "}
                  <Loader className="text-indigo-300" />{" "}
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  const baseStyle = `${
    theme === "dark"
      ? "text-gray-300 border-gray-600 bg-gray-700"
      : "border-gray-200 bg-indigo-50 text-gray-500"
  } `;

  return (
    <div className="w-full h-full   relative">
      {/* <div className="w-full  absolute top-1/2 -z-1 h-42  bg-indigo-50 fancy-title2 rounded-xl"></div> */}

      <div className="    w-full  flex-col lg:flex-row flex lg:-mt-4   gap-6">
        <h2
          className={` flex  lg:flex-col gap-1 mt-1 font-semibold text-sm  items-center justify-center text-center ${baseStyle} پ
            text-md duration-300 rounded-xl fancy-title3    shadow  whitespace-nowrap p-4`}
        >
          <span className="font-bold">10</span>
          <span>محصول</span>
          <span> پرفروش</span>
        </h2>
        <div className="flex items-center gap-4">
          <button
            className={` ${baseStyle} lg:block   hidden cursor-pointer border rounded-full px-1 shadow backdrop-blur-3xl  h-14`}
          >
            <ChevronRight size={16} />
          </button>

          <div className="w-full mt-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full gap-4">
              {data?.map((item) => (
                <ProductItem {...item} />
              ))}
            </div>
          </div>
          <button
            className={` ${baseStyle} lg:block  hidden cursor-pointer border rounded-full px-1  shadow backdrop-blur-3xl  h-14`}
          >
            <ChevronLeft size={16} />
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default TopProducts;
