import { ChevronLeft, ChevronRight } from "lucide-react";
import { top10 } from "../../data/products/category";
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

  const baseStyle = `${theme === "dark" ? "text-gray-300" : " text-gray-700"} `;

  return (
    <div className="w-full   relative">
      {/* <div className="w-full  absolute top-1/2 -z-1 h-42  bg-indigo-50 fancy-title2 rounded-xl"></div> */}

      <div className="    w-full  flex    gap-6">
        <h2
          className={`font-semibold text-sm flex items-center justify-center text-center ${baseStyle} text-md duration-300 rounded-xl fancy-title2 border  border-gray-200 bg-gray-50  whitespace-nowrap p-4`}
        >10
        <br />
           محصول  <br /> پر فروش
        </h2>
        <div className="flex items-center gap-4">
          <button className="lg:block   hidden cursor-pointer border rounded-full px-1 border-gray-200 shadow backdrop-blur-3xl bg-gray-50 h-14">
            <ChevronRight size={16} />
          </button>

          <div className="w-full ">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full gap-4">
                {data?.map((item) => (
                  <ProductItem {...item} />
                ))}
              
            </div>
          </div>
          <button className="lg:block  hidden cursor-pointer border rounded-full px-1 border-gray-200 shadow backdrop-blur-3xl bg-gray-50 h-14">
            <ChevronLeft size={16} />
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default TopProducts;
