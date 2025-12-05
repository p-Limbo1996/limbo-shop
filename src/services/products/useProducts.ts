import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { IProduct } from "../../types/productTypes";
import { getAllProducts } from "./productEndpoints";

export const useProducts = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [reloadFlag, setReloadFlag] = useState<boolean>(false); // ← کنترل ری‌فچ

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const products = await getAllProducts();
      setData(products);
    } catch (err) {
      console.error(err);
      setError("خطایی در دریافت اطلاعات رخ داده است");
      toast.error("خطایی در دریافت اطلاعات رخ داده است");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [reloadFlag]); // ← هر بار reloadFlag تغییر کنه، لیست fetch می‌شه

  // تابع کمکی برای ری‌فچ دستی
  const refetch = () => setReloadFlag((prev) => !prev);

  return { data, loading, error, refetch };
};


