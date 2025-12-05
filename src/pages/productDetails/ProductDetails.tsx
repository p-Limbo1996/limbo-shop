import Button from "../../components/button/Button";

const ProductDetails = () => {
  return (
    <div className="w-full flex flex-col flex-1 lg:flex-row      ">
      <div className="w-full lg:w-1/2 rounded-xl bg-gray-200 h-96 overflow-hidden ">
        <img src="" className=" h-96" alt="" />
      </div>
      <div className=" flex flex-col w-full lg:w-1/2 gap-2 p-4">
        <h1>نام محصول</h1>
        <p className="text-justify">
          {" "}
          lorem.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>

        <div className="flex gap-2">
          <span className="w-10 h-10 flex items-center justify-center border rounded border-gray-300">
            1
          </span>
          <span className="w-10 h-10 flex items-center justify-center border rounded border-gray-300">
            1
          </span>
          <span className="w-10 h-10 flex items-center justify-center border rounded border-gray-300">
            1
          </span>
          <span className="w-10 h-10 flex items-center justify-center border rounded border-gray-300">
            1
          </span>
        </div>

        <div className="flex gap-2 w-full items-center justify-end px-4">
          <button className="border p-2 px-4 rounded ">افزودن </button>
          <button className="border p-2 px-4 rounded ">مشاهده سبد</button>

          <Button variant="view">تست</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
