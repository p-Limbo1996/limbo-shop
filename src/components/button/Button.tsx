import type { ComponentProps } from "react";

type TVariant = "submit" | "back" | "detaile" | "view" | "logOut";

type TButton = ComponentProps<"button"> & {
  variant: TVariant;
};

const Button = ({ children, className ="", variant, ...props }: TButton) => {
  const variantClass = checkVariant(variant);
  return (
    <button {...props} className={`${variantClass}  ${className}`}>
      {children}
    </button>
  );
};

export default Button;

function checkVariant(variant: TVariant) {
  const baseClass = "rounded h-10 px-2 flex-1 text-sm whitespace-nowrap shadow  text-gray-600 font-semibold border-b-2 border-indigo-400 hover:border-indigo-800 transition";

  switch (variant) {
    case "submit":
      return `bg-indigo-100 text-black  ${baseClass}`;

    case "back":
      return `bg-gray-300 text-black ${baseClass}`;

    case "detaile":
      return `bg-purple-500 text-black ${baseClass}`;

    case "view":
      return `bg-green-400 text-black ${baseClass}`;

    case "logOut":
      return `bg-red-500 text-black ${baseClass}`;

    default:
      return baseClass;
  }
}
