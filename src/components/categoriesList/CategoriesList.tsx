import {
  Laptop,
  Smartphone,
  Headphones,
  Watch,
  Usb,
  Camera,
  Gamepad,
  Globe,
  Monitor,
  Cpu,
  ArrowLeft,
} from "lucide-react";

export const techCategories = [
  {
    name: "لپتاپ و کامپیوتر",
    icon: <Laptop />,
    image:
      "https://icon2.cleanpng.com/20240208/ulk/transparent-coffee-cup-desktop-computer-plant-and-coffee-cup-on-1710883302332.webp",
  },
  {
    name: "گوشی و تبلت",
    icon: <Smartphone />,
    image:
      "https://icon2.cleanpng.com/20231212/evg/transparent-tablet-computer-hands-holding-tablet-screen-displa-hands-holding-tablet-with-blurred-colorful-1710977234854.webp",
  },
  {
    name: "هدفون و اسپیکر",
    icon: <Headphones />,
    image: "https://icon2.cleanpng.com/lnd/20240705/rzw/a74cbyy3k.webp",
  },
  {
    name: "ساعت هوشمند و گجت پوشیدنی",
    icon: <Watch />,
    image: "https://icon2.cleanpng.com/lnd/20240425/yie/aazllrujg.webp",
  },
  {
    name: "لوازم جانبی",
    icon: <Usb />,
    image:
      "https://icon2.cleanpng.com/20180602/yg/kisspng-past-paper-test-learning-worksheet-student-desk-5b12b77056ab72.076547141527953264355.jpg",
  },
  {
    name: "دوربین و تجهیزات تصویربرداری",
    icon: <Camera />,
    image: "https://icon2.kisspng.net/ki4/spt/c4japfqdyb1n.webp",
  },
  {
    name: "کنسول و بازی‌های ویدیویی",
    icon: <Gamepad />,
    image:
      "https://icon2.cleanpng.com/20231110/okv/transparent-dragon-colorful-image-of-console-controller-surrounded-1711022771514.webp",
  },
  {
    name: "شبکه و اینترنت اشیاء ",
    icon: <Globe />,
    image:
      "https://icon2.cleanpng.com/20230603/gxo/transparent-internet-urban-city-infrastructure-transportation-1711130171590.webp",
  },
  {
    name: "نمایشگر و مانیتور",
    icon: <Monitor />,
    image: "https://banner2.cleanpng.com/cb3/ctx/gwv/ath78fyh0.webp",
  },
  {
    name: "هوش مصنوعی و رباتیک",
    icon: <Cpu />,
    image:
      "https://icon2.cleanpng.com/lnd/20241213/ky/109ca65796f6ed6d5cdb91e823b181.webp",
  },
];

export const CategoriesList = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      <div className="flex justify-center items-center text-sm text-gray-600">
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
              className="group-hover:scale-112 duration-300 transition-all w-full h-40 p-2 object-contain mix-blend-darken "
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
