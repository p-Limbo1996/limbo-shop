import {
  CircleUserRound,
  House,
  LogIn,
  Package,
  ShoppingCart,
  UserStarIcon,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../container/Container";

const Navbar = () => {
  const navLinks = [
    { name: "صفحه اصلی", path: "/", icon: <House size={18} /> },
    { name: "فروشگاه", path: "/store", icon: <Package size={18} /> },
    { name: "درباره ما", path: "/about", icon: <ShoppingCart size={18} /> },
    { name: "ادمین", path: "/admin", icon: <UserStarIcon  size={18} /> },
  ];

  const [loginState, setLoginState] = useState<boolean>(false);

  return (
    <Container>
      <nav className="h-13 px-6 flex  justify-between  items-center   rounded-xl border border-gray-300 bg-gray-200 shadow">
        <ul className="flex  items-center h-full gap-6">
          {navLinks.map((link) => (
            <li key={link.name} className="  flex items-center gap-1">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-blue-700 font-bold" : ""
                  } flex items-center space-x-1`
                }
              >
                <span   >{link.icon}</span>
                <span className="md:block hidden">{link.name}</span>

              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <div className="relative">
            <span className="absolute -top-1 -left-2 animate-pulse bg-blue-500 w-2 h-2 rounded-full "></span>
            <Link to="cart">
              <ShoppingCart className="scale-x-[-1]" />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="hover:text-blue-600 "
              onClick={() => setLoginState((prev) => !prev)}
            >
              {loginState ? (
                <CircleUserRound />
              ) : (
                <LogIn className="rotate-180" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
