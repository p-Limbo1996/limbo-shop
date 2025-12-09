import { House, Package, ShoppingCart, UserStarIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import Container from "../container/Container";
import { useTheme } from "../../context/themeContext";
import wave from "../../assets/image/wave.svg";

const Footer = () => {
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "صفحه اصلی", path: "/", icon: <House size={18} /> },
    { name: "فروشگاه", path: "/store", icon: <Package size={18} /> },
    { name: "درباره ما", path: "/about", icon: <ShoppingCart size={18} /> },
    { name: "ادمین", path: "/admin", icon: <UserStarIcon size={18} /> },
  ];

  return (
    <Container>
      <img src={wave} alt=" " className="w-full -mb-8" />

      <nav
        className={`
        ${
          theme === "light"
            ? "border-gray-300 bg-gray-200 text-gray-700 "
            : "border-gray-700 text-white   bg-gray-800 "
        }
border-b-4 border-b-indigo-300/6
        h-72 p-6   grid grid-cols-4  justify-between fancy-title30  items-center  pt-16  rounded-xl 
        `}
      >
        <div className="space-y-4 flex items-center flex-col">
          <p>دسترسی سریع</p>
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
                  <span className="md:block hidden">{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>


      </nav>
    </Container>
  );
};

export default Footer;
