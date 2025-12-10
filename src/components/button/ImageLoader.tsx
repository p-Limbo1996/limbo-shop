import { Loader2 } from "lucide-react";
import { useState, type ComponentProps } from "react";

type TImageLoaderProps = ComponentProps<"img">;

const ImageLoader = ({ src, alt, className, ...rest }: TImageLoaderProps) => {
  const [isLoad, setIsLoad] = useState(false);

  return (
    <div className={`relative w-full h-full  ${className || ""}`}>
      {/* Skeleton */}
      {!isLoad && (
        <div className="absolute inset-0 flex   items-center justify-center  rounded-xl animate-pulse">
          <Loader2 className="animate-spin" />
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
