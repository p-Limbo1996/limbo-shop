import { useTheme } from "../../context/themeContext";
import { techCategories } from "../../data/products/category";










export const CategoriesList = () => {

  const {theme}=useTheme()


const baseStyle= `${theme==="dark"?"text-gray-300":" text-gray-700"}`



  return (
    <div className="w-full h-full flex flex-col gap-3">
      <div className={`${baseStyle} flex justify-center items-center text-sm duration-300 transition-all `}>
        <h1 className=" w-fit  p-2 px-6 text-lg font-semibold ">
        دسته بندی ها
        </h1>
     
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-full gap-4">
        {techCategories.map((cat) => (
          <li
            key={cat.name}
            className="flex group duration-300 border-2 border-gray-300 transition-all shadow-inner hover:border-dashed   flex-col items-center justify-center pb-3 h-full w-full  gap-1   bg-gray-200 overflow-hidden  rounded-4xl  hover:border-indigo-300 hover:bg-indigo-100  cursor-pointer"
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
  );
};

export default CategoriesList;
