import { ChevronLeft, ChevronRight } from "lucide-react";
import CategoriesList, {
  techCategories,
} from "../../components/categoriesList/CategoriesList";
import TopProducts from "../../components/productItems/TopProducts";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full flex gap-12 flex-col flex-1  h-full">
      <div className="  grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 p-6 ">
        <Link to={"/store"} className="relative drop-shadow hover:drop-shadow-gray-400 delay-75 ">
          <img
            className=""
            src="https://hadlmawwdetqyspyjsaf.supabase.co/storage/v1/object/public/product-images/product-images/22.png"
            alt=""
          />

          <div className="absolute w-full -bottom-3 fancy-title3 -z-1 h-6 rounded bg-gray-300/50 blur-sm"></div>
        </Link>

        <Link to={"/store"} className="relative drop-shadow hover:drop-shadow-amber-300 delay-75 ">
          <img
            className=""
            src="https://hadlmawwdetqyspyjsaf.supabase.co/storage/v1/object/public/product-images/product-images/333.png"
            alt=""
          />

          <div className="absolute w-full -bottom-3 fancy-title -z-1 h-6 rounded bg-gray-400/50 blur-sm"></div>
        </Link>

        <Link to={"/store"} className="relative drop-shadow hover:drop-shadow-cyan-200 delay-75 ">
          <img
            className=""
            src="https://hadlmawwdetqyspyjsaf.supabase.co/storage/v1/object/public/product-images/product-images/5.png"
            alt=""
          />

          <div className="absolute w-full -bottom-3 fancy-title3 -z-1 h-6 rounded bg-gray-400/50 blur-sm"></div>
        </Link>

        <Link to={"/store"} className="relative drop-shadow hover:drop-shadow-orange-300 delay-75">
          <img
            className=""
            src="https://hadlmawwdetqyspyjsaf.supabase.co/storage/v1/object/public/product-images/product-images/6.png"
            alt=""
          />

          <div className="absolute w-full -bottom-3 fancy-title3 -z-1 h-6 rounded bg-gray-400/50 blur-sm"></div>
        </Link>
      </div>

      <div className="w-full fancy-title border-t border-gray-200 bg-indigo-50 h-fit py-20 pt-10">
        <CategoriesList />
      </div>
      <TopProducts />
    </div>
  );
};

export default Home;
