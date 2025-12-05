import supabase from "../../api/supabaseClient";
// import type { ProductForm } from "../../pages/admin/manageProducts/AddNewProduct";
import type { IProduct } from "../../types/productTypes";

export const getAllProducts = async (): Promise<IProduct[]> => {
  const { data, error } = await supabase.from("products").select("*");
  if (error) throw error;
  return data ?? [];
};

export const addProduct = async (product: IProduct) => {

  console.log(product);
  
  const { data, error } = await supabase
    .from("products")
    .insert([product])
    .select();

  if (error) throw error;
  return data;
};


export const updateProduct = async (id: string, product: Partial<IProduct>) => {
  const { data, error } = await supabase
    .from("products")
    .update(product)
    .eq("id", id);
  if (error) throw error;
  return data;
};

export const deleteProduct = async (id: string) => {
  const { data, error } = await supabase.from("products").delete().eq("id", id);
  if (error) throw error;
  return data;
};
