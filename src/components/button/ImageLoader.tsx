import { Loader } from "lucide-react";
import { useState, type ComponentProps } from "react";

type TImageLoaderProps = ComponentProps<"img">;

const ImageLoader = ({ src, alt, className, ...rest }: TImageLoaderProps) => {
  const [isLoad, setIsLoad] = useState(false);

  return (
    <div className={`relative w-full min-h-48  ${className || ""}`}>
      {/* Skeleton */}
      {!isLoad && (
        <div className="absolute inset-0 flex bg-indigo-50  h-full   items-center justify-center  rounded-xl ">
          <Loader className="text-indigo-200 animate-spin"/>
        </div>
      )}

      {/* عکس */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full ${isLoad ? "block" : "hidden"}`}
        onLoad={() => setIsLoad(true)}
        {...rest}
      />
    </div>
  );
};

export default ImageLoader;
