import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { lazy, Suspense } from "react";
import { Loader } from "lucide-react";








const Store = lazy(()=>import("./pages/store/Store"))
const Cart = lazy(()=>import("./pages/cart/Cart"))
const ProductDetails = lazy(()=>import("./pages/productDetails/ProductDetails"))
const Admin = lazy(()=>import("./pages/admin/Admin"))



const App = () => {



  return (
    <div className="container    mx-auto px-4  rounded-xl flex flex-col  py-4  ">
      <Layout>
        <Suspense   fallback={<div className=" w-full flex flex-1 items-center justify-center  z-50">
          <Loader size={40} className="animate-spin text-blue-600"/></div>}>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="store" element={<Store />} />
            <Route path="cart" element={<Cart />} />
            <Route path="admin" element={<Admin />} />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};

export default App;
