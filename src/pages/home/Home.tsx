import ImageLoader from "../../components/button/ImageLoader";
import CategoriesList from "../../components/categoriesList/CategoriesList";
import TopProducts from "../../components/productItems/TopProducts";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/themeContext";

const Home = () => {
  const {theme}=useTheme()


const baseStyle= `${theme==="dark"?"bg-gray-800 border-gray-700 text-gray-400":" bg-indigo-50 border-indigo-100"} duration-300`

  return (
    <div className="w-full flex gap-12 flex-col flex-1  h-full">
      <Link to={"/store"} className="relative    ">
        {/* <img
            className=""
            src="https://hadlmawwdetqyspyjsaf.supabase.co/storage/v1/object/public/product-images/product-images/333.png"
            alt=""
          /> */}

        <ImageLoader
          className=" "
          src="https://hadlmawwdetqyspyjsaf.supabase.co/storage/v1/object/public/product-images/product-images/11.png"
        />
        <div className="absolute w-full -bottom-3 fancy-title -z-1 h-6 rounded bg-gray-200/60 blur-sm"></div>
      </Link>

      <TopProducts />
      <div className={` ${baseStyle} w-full fancy-title border-t   h-fit py-20 pt-10 `}>
        <CategoriesList />
      </div>
   
         <div className="  grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 p-6 ">
        <Link
          to={"/store"}
          className="relative drop-shadow hover:drop-shadow-gray-400 delay-75 "
        >
          {/* <img
            className=""
            src="https://hadlmawwdetqyspyjsaf.supabase.co/storage/v1/object/public/product-images/product-images/22.png"
            alt=""
          /> */}

          <ImageLoader
            className=" "
            src="https://hadlmawwdetqyspyjsaf.supabase.co/storage/v1/object/public/product-images/product-images/22.png"
          />

          <div className="absolute w-full -bottom-3 fancy-title3 -z-1 h-6 rounded bg-gray-300/50 blur-sm"></div>
        </Link>

        <Link
          to={"/store"}
          className="relative drop-shadow hover:drop-shadow-amber-300 delay-75 "
        >
          {/* <img
            className=""
            src="https://hadlmawwdetqyspyjsaf.supabase.co/storage/v1/object/public/product-images/product-images/333.png"
            alt=""
          /> */}

          <ImageLoader
            className=" "
            src="https://hadlmawwdetqyspyjsaf.supabase.co/storage/v1/object/public/product-images/product-images/333.png"
          />
          <div className="absolute w-full -bottom-3 fancy-title -z-1 h-6 rounded bg-gray-400/50 blur-sm"></div>
        </Link>

        <Link
          to={"/store"}
          className="relative drop-shadow hover:drop-shadow-cyan-200 delay-75 "
        >
          {/* <img
            className=""
            src="https://hadlmawwdetqyspyjsaf.supabase.co/storage/v1/object/public/product-images/product-images/5.png"
            alt=""
          /> */}
          <ImageLoader
            className=" "
            src="https://hadlmawwdetqyspyjsaf.supabase.co/storage/v1/object/public/product-images/product-images/5.png"
          />
          <div className="absolute w-full -bottom-3 fancy-title3 -z-1 h-6 rounded bg-gray-400/50 blur-sm"></div>
        </Link>

        <Link
          to={"/store"}
          className="relative drop-shadow hover:drop-shadow-orange-300 delay-75"
        >
          {/* <img
            className=""
            src="https://hadlmawwdetqyspyjsaf.supabase.co/storage/v1/object/public/product-images/product-images/6.png"
            alt=""
          /> */}
          <ImageLoader
            className=" "
            src="https://hadlmawwdetqyspyjsaf.supabase.co/storage/v1/object/public/product-images/product-images/6.png"
          />
          <div className="absolute w-full -bottom-3 fancy-title3 -z-1 h-6 rounded bg-gray-400/50 blur-sm"></div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
