import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Bounce, ToastContainer } from "react-toastify";

interface ILayout {
  children: React.ReactNode;
}
const Layout = ({ children }: ILayout) => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
          toastClassName="bg-indigo-200!  "

        theme="light"
        transition={Bounce}
      />
      <Navbar />
      <div className=" rounded-xl  min-h-[calc(100vh-76px)] py-6 flex flex-col  ">
        {children}
      </div>
    </>
  );
};

export default Layout;
