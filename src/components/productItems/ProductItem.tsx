import { CirclePlus } from "lucide-react";
import { Link } from "react-router-dom";
import type { IProduct } from "../../types/productTypes";
import { useTheme } from "../../context/themeContext";

// interface Props {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
// }

const ProductItem = (item: IProduct) => {
  console.log("item", item);
  const { theme } = useTheme();

  return (
    <Link
      to={`/productDetails/${item?.id}`}
      className={`${theme === "light" ? "border-indigo-200" : "border-gray-600"}
  w-full hover:scale-105 hover:border-x-2     duration-500   border-t-0  rounded-xl transition-all `}
    >
      <div
        className={` rounded-t-xl transition-all duration-500 mt-12 bg-linear-to-b
        ${
          theme === "light"
            ? "from-gray-50 via-gray-50 to-gray-100 "
            : "from-gray-900 via-gray-800 to-gray-800"
        }
         rounded-xl  `}
      >
        {/* header */}
        <div className=" relative w-full   gap-4 pt-6  items-center pb-24    rounded-xl    border-r-0  ">
          <div
            className={`
              ${theme === "light" ? "bg-indigo-100 " : "bg-gray-300  "}
              
              h-40 absolute modalBox   rounded-4xl  right-3 left-3    transition-all duration-300 delay-100
          overflow-hidden    
            -top-14   `}
          >
            <img
              src={item?.image_url}
              className={`object-center  py-2  object-contain duration-500 transition-all
                    border-indigo-200  rounded-xl   h-full w-full 
                    ${
                      theme === "light"
                        ? "mix-blend-darken"
                        : "mix-blend-multiply  "
                    }
                    `}
              alt=""
            />
          </div>
        </div>

        {/* body */}
        <div
          dir="auto"
          className={`duration-300
            
              ${
                theme === "light"
                  ? "bg-gray-100 border-white"
                  : "bg-gray-700 text-gray-100 border-gray-900 "
              }
p-3 border-2 border-t-4 h-30  rounded-xl`}
        >
          <h3 className="text-center pb-2 text-indigo-500 line-clamp-1 truncate text-sm ">
            {item?.name}
          </h3>
          <p className="line-clamp-2 leading-5 pb-6 text-center text-xs   rtl:text-right ltr:text-left">
            {item?.description}
          </p>
        </div>
      </div>

      {/* footer */}
      <div
        className={`flex relative  items-center justify-between p-2 border mt-1  rounded-xl


              ${
                theme === "light"
                  ? " from-indigo-200/70 via-gray-200/50 to-white border-gray-100"
                  : " from-gray-900/70 via-gray-700/70 to-gray-700  border-gray-700"
              }
        bg-linear-to-r  w-full`}
      >
        <p className="text-indigo-400 font-bold lg:text-sm text-xs">
          {item?.price?.toLocaleString()} <span className="">تومان</span>{" "}
        </p>
        <div
          className={`absolute  border-y-0 hover:scale-105 duration-400 transition-all
         
         
         ${
           theme === "light"
             ? "text-gray-400 bg-white  border-gray-200"
             : "text-gray-300 bg-gray-900  border-gray-700"
         }
         
         hover:scale-x-[-1] hover:text-indigo-400   rounded-full left-4
            -top-1 -bottom-1 flex  items-center justify-center
            border  w-12`}
        >
          <CirclePlus className="    " size={24} />
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
