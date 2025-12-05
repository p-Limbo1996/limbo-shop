import ProductItem from "../../components/productItems/ProductItem";
import { useProducts } from "../../services/products/useProducts";
import Loading from "../../components/loading/Loading";
import { useTheme } from "../../context/themeContext";

const Store = () => {
  const { data, loading, error } = useProducts();

  if (error) {
    return <>error</>;
  }
  if (loading) return <Loading />;

  const { theme } = useTheme();

  return (
    <div className={` flex flex-col gap-4`}>
      <h1 className={`${theme === "light" ? "text-gray-600" : "text-white"} duration-500`}>
        محصولات
      </h1>

      <div className="grid space-y-4 xl:gap-6 gap-3 w-full grid-cols-2 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 ">
        {data?.map((item) => (
          <ProductItem {...item} />
        ))}
      </div>
    </div>
  );
};

export default Store;
