import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex flex-1 items-center gap-2 w-full justify-center  h-40 ">
      {/* <div className="h-8 w-8 border-4 rounded-full border-t-0 animate-spin text-indigo-300"></div> */}

      <Loader size={32} className="text-indigo-400 animate-spin" />
    </div>
  );
};

export default Loading;
