import { BaggageClaim, PackageSearch, UsersRound } from "lucide-react";
import { useState } from "react";
import ManageProducts from "./manageProducts/ManageProducts";
import { useTheme } from "../../context/themeContext";

const Admin = () => {
  const [activeTab, setActiveTab] = useState<string>("products");
  console.log(activeTab);
  const { theme } = useTheme();

  const adminMenu = [
    {
      id: 1,
      displayName: "محصولات",
      name: "products",
      icon: <PackageSearch className="text-gray-500" />,
    },
    {
      id: 2,
      displayName: "کاربران",
      name: "users",
      icon: <UsersRound className="text-gray-500" />,
    },
    {
      id: 3,
      displayName: "سفارشات",
      name: "orders",
      icon: <BaggageClaim className="text-gray-500" />,
    },
  ];

  return (
    <div className="flex-1  ">
      {/* <h2>سبد خرید</h2> */}

      <div className="grid grid-cols-4 gap-4 mt-4 ">
        <aside
          className={`
            ${
              theme === "light"
                ? "border-gray-100"
                : "border-gray-700 bg-gray-800"
            }
        lg:col-span-1 col-span-4 flex flex-1 shadow border
           rounded-xl flex-col gap-4 p-4`}
        >
          <div
            className={`
             ${theme === "light" ? "border-gray-300" : "border-gray-700 "}
          flex lg:flex-col gap-2 w-full items-center pb-6 border-b
           `}
          >
            {/* <img src={null} className="w-16 h-16 bg-indigo-300 rounded-full" alt="" /> */}
            <p>نام ادمین</p>
          </div>
          <div className="flex lg:flex-col flex-1 gap-3 items-stretch">
            {adminMenu.map((menuItem) => {
              const isActive = activeTab === menuItem.name;
              const baseClasses =
                "flex w-full cursor-pointer h-14 duration-300 translate-all rounded-xl lg:gap-4 text-sm gap-1 items-center justify-center";
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

        {activeTab === "products" && <ManageProducts />}

        {activeTab === "users" && <div className="bg-red-200 w-full "></div>}
      </div>
    </div>
  );
};

export default Admin;
