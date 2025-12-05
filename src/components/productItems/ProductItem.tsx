import { CirclePlus } from "lucide-react";
import { Link } from "react-router-dom";
import type { IProduct } from "../../types/productTypes";

// interface Props {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
// }

const ProductItem = (item: IProduct) => {
  console.log("item", item);

  return (
    <Link
      to={`/productDetails/${item?.id}`}
      className="w-full hover:scale-105 hover:border-x-2    border-blue-200 bg-white border-t-0  rounded-xl "
    >
      <div className="  rounded-t-xl mt-12 bg-linear-to-b from-gray-50 via-gray-50 to-gray-100 rounded-xl">
        {/* header */}
        <div className=" relative w-full   gap-4 pt-6  items-center pb-24    rounded-xl    border-r-0  ">
          <div
            className=" h-40 absolute modalBox bg-blue-100 rounded-4xl  right-3 left-3  hover:scale-x-[-1]  transition-all duration-300 delay-100
          overflow-hidden    
            -top-14   "
          >
            <img
              src={item?.image_url}
              className="object-center py-2  object-contain  mix-blend-darken    border-blue-200  rounded-xl   h-full w-full  "
              alt=""
            />
          </div>
        </div>

        {/* body */}
        <div
          dir="auto"
          className="p-3 bg-gray-100    border-white border-2 border-t-4  rounded-xl"
        >
          <h3 className="text-center pb-2 font-semibold text-gray-600">
            {item?.name}
          </h3>
          <p className="line-clamp-1 pb-4 text-center text-xs leading-tight break-words rtl:text-right ltr:text-left">
            {item?.description}
          </p>
        </div>
      </div>

      {/* footer */}
      <div className="flex relative  items-center justify-between p-2 border mt-1  rounded-xl border-gray-100 bg-linear-to-r from-blue-200/70 via-gray-200/50 to-white  w-full">
        <p className="text-blue-400 font-bold">
          {item?.price?.toLocaleString()} <span className="">تومان</span>{" "}
        </p>
        <div className="absolute  border-y-0 hover:scale-105 duration-400 transition-all text-gray-400  hover:scale-x-[-1] hover:text-blue-400   rounded-full left-4  bg-white -top-1 -bottom-1 flex border-gray-200 items-center justify-center border  w-12">
          <CirclePlus className="    " size={24} />
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
