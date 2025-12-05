import ProductItem from "../../components/productItems/ProductItem";
import { useProducts } from "../../services/products/useProducts";
import Loading from "../../components/loading/Loading";

const Store = () => {
  const { data, loading, error } = useProducts();

  if (error) {
    return <>error</>;
  }
  if (loading) return <Loading />;

  return (
    <div className="flex flex-col gap-4">
      <h1>محصولات</h1>

      <div className="grid space-y-4 xl:gap-6 gap-3 w-full grid-cols-2 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 ">
        {data?.map((item) => (
          <ProductItem {...item} />
        ))}
      </div>
    </div>
  );
};

export default Store;
