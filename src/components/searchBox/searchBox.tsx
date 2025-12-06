import { Search } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../context/themeContext";

type TSearchBox = {
  title: string;
  onClick: () => void;
};

const SearchBox = ({ title = "جستوجو", onClick }: TSearchBox) => {
  const [formData, setFormData] = useState<string>();
  const { theme } = useTheme();
  return (
    <div
      className={`relative border rounded-lg 
      ${
        theme === "light"
          ? " border-gray-200"
          : "border-gray-700 bg-gray-900 text-white"
      }
    
    `}
    >
      <input
        type="text"
        className=" rounded-lg placeholder:text-xs text-sm px-2 lg:pl-14 pl-4 
            focus:outline-indigo-300 
              h-10"
        placeholder={title}
        value={formData}
        onChange={(e) => setFormData(e.target.value)}
      />
      <Search
        onClick={onClick}
        className="absolute  cursor-pointer hover:text-indigo-500 text-gray-400 left-2 top-1/2 -translate-y-1/2 *:
            "
      />
    </div>
  );
};

export default SearchBox;
