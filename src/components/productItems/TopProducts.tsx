import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../../context/themeContext";
import ProductItem from "./ProductItem";
import { useProducts } from "../../services/products/useProducts";
import Loading from "../loading/Loading";

const TopProducts = () => {
  const { data, loading, error } = useProducts();
  const { theme } = useTheme();

  if (error) {
    return <>error</>;
  }
  if (loading) return <Loading />;

  const baseStyle = `${
    theme === "dark"
      ? "text-gray-300 border-gray-600 bg-gray-700"
      : "border-gray-200 bg-indigo-50 text-gray-500"
  } `;

  return (
    <div className="w-full   relative">
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
