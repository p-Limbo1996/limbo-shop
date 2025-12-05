
const Error = ({error}:any) => {
  return (
    <div className="flex items-center justify-center bg-red-500 h-40 text-white">
      {error || "خطایی رخ داده"}
    </div>
  );
};

export default Error;
