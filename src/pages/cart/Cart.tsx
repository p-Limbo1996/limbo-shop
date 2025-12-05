import Button from "../../components/button/Button";

const Cart = () => {
  return (
    <div className="flex-1  ">
      {/* <h2>سبد خرید</h2> */}

      <div className="grid grid-cols-4 gap-4 mt-4 ">
        <div className="lg:col-span-3 col-span-4    space-y-4  ">
          {Array(4)
            .fill("")
            .map((product) => (
              <div className="pr-11">
                <div className=" relative w-full flex  gap-4 pr-12  items-center p-4 border-blue-100   rounded-xl  border  border-r-0  ">
                  <div className="w-22 h-22 absolute rounded-full  border-blue-300 -right-11 border-l  "></div>
                  <div className="w-20 h-20 hover:scale-x-[-1]  transition-all duration-300 delay-100 overflow-hidden absolute  rounded-full bg-blue-100 border-blue-300 hover:border-blue-400  drop-shadow-blue-500 -right-11 border-r-8 border  ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9Xw4Qnj8MO-wuqcaCoJBCP4jCAYE-lb7mQ3CN7O9DkxL_96bM0RpKzxBsl5Ag5-t7ok&usqp=CAU"
                      className="object-cover img-fluid bg-gray-600  bg-blend-luminosity h-20  "
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex text-sm flex-col">
                      <p>نام محصول</p>
                      <p> دسته بندی</p>
                      <p> جزئیات</p>
                    </div>

                    <div className="lg:flex  flex-col gap-4 w-1/3 hidden   items-center">
                      <p className="text-xs "> جزئیات</p>
                      <p className="line-clamp-1 ">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
                    </div>

                    <div className="flex  flex-col gap-4 items-center ">
                      <p className="text-xs "> تعداد</p>

                      <div className="flex items-center gap-2  rounded-xl ">
                        <button className="w-8 rounded border-gray-100 h-8 bg-green-200 border inline-flex items-center justify-center">
                          -
                        </button>
                        <span className="w-8 rounded border-gray-100 h-8  inline-flex items-center justify-center">
                          2
                        </span>
                        <button className="w-8 rounded border-gray-100 h-8 bg-red-200 border inline-flex items-center justify-center">
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex  flex-col gap-4 items-end">
                      <p className="text-xs ">قیمت محصول</p>
                      <p>{(1350000).toLocaleString()}</p>
                    </div>
                    <div className="flex  flex-col gap-4 items-end">
                      <p className="text-xs ">حذف</p>
                      <button className="w-8 rounded hover:scale-105 h-8 text-red-400 border inline-flex items-center justify-center">
                        x
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="lg:col-span-1 col-span-4">
          <div className="shadow w-full flex-col  h-96 gap-4 flex  p-4  justify-center   rounded-xl  border border-gray-100">
            <div className="flex justify-between">
              <p> مبلغ قابل پرداخت</p>
              <p>222 ریال</p>
            </div>
            <div className="flex">
              <p> مالیات</p>
              <p></p>
            </div>
            <div className="flex  gap-2 mt-auto  ">
              <Button variant="back" className=" ">
                برگشت
              </Button>
              <Button variant="submit" className="">
                {" "}
                ثبت سفارش
              </Button>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
