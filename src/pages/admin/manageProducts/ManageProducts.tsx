import ProductList from "./ProductList";
import { useProducts } from "../../../services/products/useProducts";
// import { useTheme } from "../../../context/themeContext";

const ManageProducts = () => {
  const { data, loading, error,refetch } = useProducts();

  return (
    <div className="lg:col-span-3 col-span-4    space-y-4  ">
      <ProductList data={data} loading={loading} error={!!error} refetch={refetch} />
    </div>
  );
};

export default ManageProducts;
