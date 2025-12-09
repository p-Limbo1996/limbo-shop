import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { lazy, Suspense } from "react";
import { Loader } from "lucide-react";
import { useTheme } from "./context/themeContext";
import  bg  from "./assets/image/bg.png";

const Store = lazy(() => import("./pages/store/Store"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const ProductDetails = lazy(
  () => import("./pages/productDetails/ProductDetails")
);
const Admin = lazy(() => import("./pages/admin/Admin"));

const App = () => {
  const { theme } = useTheme();

  console.log(theme);

  return (
    <div className={` transition-all duration-500  ${theme === "light" ? "" : "bg-gray-900 "}`}>
     
     
      {/* <img src={bg} alt="" className="absolute inset-0 w-full object-top right-0 z-[-1]  opacity-40" /> */}
      <div
        className={`container    mx-auto px-4  rounded-xl flex flex-col pt-6  z-10 `}
      >
        <Layout>
          <Suspense
            fallback={
              
              
              <div className=" w-full flex flex-1 items-center justify-center  z-50">
                <Loader size={40} className="animate-spin text-indigo-600" />
              </div>
            }
          >
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
    </div>
  );
};

export default App;
