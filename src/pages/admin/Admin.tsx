import { BaggageClaim, PackageSearch, UsersRound } from "lucide-react";
import { useState } from "react";
import ManageProducts from "./manageProducts/ManageProducts";

const Admin = () => {
  const [activeTab, setActiveTab] = useState<string>("products");
  console.log(activeTab);

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
        <aside className="lg:col-span-1 col-span-4 flex flex-1 shadow border border-gray-100  rounded-xl flex-col gap-4 p-4">
          <div className="flex lg:flex-col gap-2 w-full items-center pb-6 border-b border-gray-300">
            <img src="" className="w-16 h-16 bg-blue-300 rounded-full" alt="" />
            <p>نام ادمین</p>
          </div>
          <div className="flex lg:flex-col flex-1  gap-3 items-stretch">
            {adminMenu.map((menuItem) => (
              <button
                onClick={() => setActiveTab(menuItem.name)}
                className={`${
                  activeTab === menuItem.name
                    ? "border-r-6 border border-blue-300"
                    : "border border-gray-300"
                }
                  flex w-full cursor-pointer h-14 hover:bg-blue-100 duration-300 translate-all     rounded-xl  gap-4 items-center justify-center `}
              >
                {menuItem.icon}
                {menuItem.displayName}
              </button>
            ))}
          </div>
        </aside>

        {activeTab === "products" && <ManageProducts />}

        {activeTab === "users" && <div className="bg-red-200 w-full "></div>}
      </div>
    </div>
  );
};

export default Admin;
