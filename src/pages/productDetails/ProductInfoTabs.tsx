import { useState } from "react";
import { useTheme } from "../../context/themeContext";
import { productDetailsTabs } from "../../data/products/productDetailsTabs";

const ProductInfo = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  console.log(activeTab);
  const { theme } = useTheme();

  return (
    <div className="flex-1 w-full  ">
      {/* <h2>سبد خرید</h2> */}

      <div className="grid grid-cols-6  rounded-xl mt-4 ">
        <aside
          className={`bg-gray-50
            ${
              theme === "light"
                ? "border-gray-200 "
                : "border-gray-700 bg-gray-800"
            }
        lg:col-span-1 col-span-6 flex flex-1 shadow border lg:border-l-0  border-b-0   lg:rounded-l-none lg:rounded-r-xl rounded-b-none
           rounded-xl flex-col gap-4 p-4`}
        >
    
          <div className="flex lg:flex-col flex-1 gap-3 items-stretch">
            {productDetailsTabs.map((menuItem) => {
              const isActive = activeTab === menuItem.name;
              const baseClasses =
                "flex flex-col lg:flex-row text-xs  lg:text-sm w-full cursor-pointer lg:h-14 h-20 gap-2 duration-300 translate-all rounded-xl lg:gap-4 text-sm gap-1 items-center lg:justify-start justify-center px-4";
              const activeClasses = isActive
                ? "border-r-6 border border-indigo-300"
                : "border border-gray-300";
              const themeClasses =
                theme === "light"
                  ? isActive
                    ? "bg-indigo-100 text-gray-700 border-gray-300 hover:bg-indigo-200"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                  : isActive
                  ? "bg-gray-800 text-white border-indigo-300 hover:bg-gray-700"
                  : "bg-gray-900 text-gray-200 hover:bg-gray-950";

              return (
                <button
                  key={menuItem.name}
                  onClick={() => setActiveTab(menuItem.name)}
                  className={`${baseClasses} ${activeClasses} ${themeClasses}`}
                >
                  {menuItem.icon}
                  {menuItem.displayName}
                </button>
              );
            })}
          </div>
        </aside>
<div className="w-full flex 

lg:border-r-0 lg:border-t border-t-0    lg:rounded-l-xl lg:rounded-r-none  rounded-b-xl 

 border border-gray-200 shadow lg:col-span-5  col-span-6">

        {productDetailsTabs.map((tab) =>
          activeTab === tab.name ? (
            <div key={tab.id} className="w-full   flex-1">
              {tab.render()}
            </div>
          ) : null
        )}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
