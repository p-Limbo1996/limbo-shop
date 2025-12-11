import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex flex-1 items-center gap-2 w-full justify-center  h-full min-h-40 ">
      <Loader size={32} className="text-indigo-400 animate-spin" />
    </div>
  );
};

export default Loading;
