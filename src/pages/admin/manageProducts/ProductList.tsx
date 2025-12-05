import { SquarePen, Trash } from "lucide-react";
import Loading from "../../../components/loading/Loading";
import type { IProduct } from "../../../types/productTypes";
import Error from "../../../components/errors/error";

type TProductList = {
  data: IProduct[];
  loading: boolean;
  error: boolean;
  handleDelete: (id: string) => void;
};

const ProductList = ({ data, loading, error, handleDelete }: TProductList) => {
 
 
    if (error) return <Error error="" />;
  if (loading) return <Loading />;

  return (
    <div className="space-y-4 bgre">
      {data.map((item, idx) => (
        <div className="pr-11" key={idx}>
          <div className="relative w-full flex gap-4 pr-12 items-center p-4 border-blue-100 rounded-xl border border-r-0">
            <div className="w-22 h-22 absolute rounded-full border-blue-300 -right-11 border-l"></div>
            <div className="w-20 h-20 hover:scale-x-[-1] transition-all duration-300 delay-100 overflow-hidden absolute rounded-full bg-blue-100 border-blue-300 hover:border-blue-400 drop-shadow-blue-500 -right-11 border-r-8 border">
              <img
                src={item.image_url}
                className="object-center object-cover img-fluid bg-gray-600 bg-blend-luminosity h-20"
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
                    onClick={() => handleDelete(item.id as string)}
                  >
                    <Trash />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
