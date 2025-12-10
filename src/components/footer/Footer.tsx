import { House, Package, ShoppingCart, UserStarIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import Container from "../container/Container";
import { useTheme } from "../../context/themeContext";
import wave from "../../assets/image/wave.svg";

const Footer = () => {
  const { theme } = useTheme();

  const navLinks = [
    { name: "صفحه اصلی", path: "/", icon: <House size={18} /> },
    { name: "فروشگاه", path: "/store", icon: <Package size={18} /> },
    { name: "درباره ما", path: "/about", icon: <ShoppingCart size={18} /> },
    { name: "ادمین", path: "/admin", icon: <UserStarIcon size={18} /> },
  ];

  return (
    <Container>
      <img
        src={wave}
        alt=" "
        className="w-full grid grid-cols-1 lg:grid-cols-2  lg:-mb-8 -mb-4 mt-20"
      />

      <div
        className={`
        ${
          theme === "light"
            ? "border-gray-300 bg-gray-200 text-gray-700 "
            : "border-gray-700 text-white   bg-gray-800 "
        }
        border-b-4 border-b-indigo-300/6 h-full p-6   grid grid-cols-2 lg:grid-cols-4 gap-8  justify-between fancy-title30  items-center  pt-16  rounded-xl 
        `}
      >
        <div className="space-y-4 flex items-start flex-col h-full">
          <p className="text-xs">دسترسی سریع</p>
          <ul className="flex flex-col  items-start h-full gap-2">
            {navLinks.map((link) => (
              <li key={link.name} className="  flex items-center gap-1">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-indigo-500 font-bold" : ""
                    } flex items-center space-x-1`
                  }
                >
                  <span>{link.icon}</span>
                  <span className="md:block ">{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 flex items-start flex-col h-full">
          <p className="text-xs">دسترسی سریع</p>
          <ul className="flex flex-col  items-start h-full gap-2">
            {navLinks.map((link) => (
              <li key={link.name} className="  flex items-center gap-1">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-indigo-500 font-bold" : ""
                    } flex items-center space-x-1`
                  }
                >
                  <span>{link.icon}</span>
                  <span className="md:block ">{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 flex items-start flex-col h-full">
          <p className="text-xs">دسترسی سریع</p>
          <ul className="flex flex-col  items-start h-full gap-2">
            {navLinks.map((link) => (
              <li key={link.name} className="  flex items-center gap-1">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-indigo-500 font-bold" : ""
                    } flex items-center space-x-1`
                  }
                >
                  <span>{link.icon}</span>
                  <span className="md:block ">{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 flex items-start justify-start flex-col  h-full">
          <p className="text-sm text-center mx-auto text-indigo-600 font-semibold ">
            درباره من{" "}
          </p>

          <p className="text-xs">
            سلام، من پوریا قاسمی هستم، برنامه‌نویس فرانت‌اند و طراح UI/UX. بیشتر
            تجربه من در زمینه برنامه‌نویسی فرانت‌اند است و با استفاده از فیگما،
            پروژه‌های شخصی خودم را طراحی کرده‌ام، مثل این پروژه. با React کار
            می‌کنم و در حال حاضر در حال یادگیری Next.js هستم تا مهارت‌هایم را
            گسترش دهم.{" "}
          </p>
        </div>
      </div>

      
    </Container>
  );
};

export default Footer;
