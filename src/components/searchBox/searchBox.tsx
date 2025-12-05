import { Search } from "lucide-react";
import { useState } from "react";

type TSearchBox = {
  title: string;
  onClick: () => void;
};

const SearchBox = ({ title = "جستوجو", onClick }: TSearchBox) => {
  const [formData, setFormData] = useState<string>();

  return (
    <div className="relative border rounded-lg  border-gray-200 ">
      <input
        type="text"
        className=" rounded-lg placeholder:text-xs text-sm px-2 pl-14 
            focus:outline-blue-300 
              h-10"
        placeholder={title}
        value={formData}
        onChange={(e) => setFormData(e.target.value)}
      />
      <Search
        onClick={onClick}
        className="absolute cursor-pointer hover:text-blue-500 text-gray-400 left-2 top-1/2 -translate-y-1/2 *:
            "
      />
    </div>
  );
};

export default SearchBox;
