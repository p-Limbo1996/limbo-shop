import { ChevronLeft, ChevronRight } from "lucide-react";
import { techCategories } from "../../data/products/category";
import { useTheme } from "../../context/themeContext";

const TopProducts = () => {



    const {theme}=useTheme()
  
  
  const baseStyle= `${theme==="dark"?"text-gray-300":" text-gray-700"} `
  
  return (
    <div className="w-full   relative">
      {/* <div className="w-full  absolute top-1/2 -z-1 h-42  bg-indigo-50 fancy-title2 rounded-xl"></div> */}

      <div className="    w-full  flex flex-col  gap-6">
        

        
        <h2 className={`font-semibold text-center ${baseStyle} text-md duration-300`}>
          10 محصول پر فروش
        </h2>
        

    
        <div className="flex items-center gap-4">
          <button className="lg:block   hidden cursor-pointer border rounded-full px-1 border-gray-200 shadow backdrop-blur-3xl bg-gray-50 h-14">
            <ChevronRight size={16} />
          </button>

          <div className="w-full ">
            <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-10 w-full gap-4">
              {techCategories.map((cat) => (
                <li
                  key={cat.name}
                  className="flex group duration-300 border-2 border-gray-300  transition-all shadow-inner hover:border-dashed   flex-col items-center justify-center pb-3 h-full w-full  gap-1   bg-gray-200 overflow-hidden  rounded-4xl  hover:border-indigo-300 hover:bg-indigo-100  cursor-pointer"
                >
                  <img
                    src={cat.image}
                    className="group-hover:scale-112 duration-300 transition-all w-full lg:h-40 h-24 p-2 object-contain mix-blend-darken "
                    alt=""
                  />
                  {/* <div className="text-indigo-500">{cat.icon}</div> */}
                  <span className=" font-medium text-gray-700 px-3 md:text-sm text-xs line-clamp-1 text-center">
                    {cat.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <button className="lg:block  hidden cursor-pointer border rounded-full px-1 border-gray-200 shadow backdrop-blur-3xl bg-gray-50 h-14">
            <ChevronLeft size={16} />
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default TopProducts;
