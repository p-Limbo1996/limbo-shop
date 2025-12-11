import { useState } from "react";
import Ellipse from "../../assets/image/Ellipse.png";
import logo from "../../assets/image/logo.png";
import bg from "../../assets/image/bg.png";
import user from "../../assets/image/64.svg";
import Container from "../../components/container/Container";
import { useTheme } from "../../context/themeContext";
import { login, ResetPass, signIn } from "../../data/login/login";
import { ArrowLeft } from "lucide-react";

type TStatus = "signIn" | "login";

interface ILogin {
  name: string;
  password: string;
}

const Login = () => {
  const { theme } = useTheme();
  const [status, setStatus] = useState<TStatus>("signIn");
  const [isAnimating, setIsAnimating] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);

  const [formData, setFormData] = useState<ILogin>({
    name: "",
    password: "",
  });
  console.log(status);

  const handlForgetPassword = () => {
    setForgetPassword((prev) => !prev);
  };
  const handlStatus = () => {
    setIsAnimating(true);
    setStatus((prev) => (prev === "login" ? "signIn" : "login"));

    setTimeout(() => {
      setIsAnimating(false);
    }, 100);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className=" fixed bg-white inset-0 flex  ">
      <img
        src={bg}
        alt=""
        className="absolute w-full h-full z-[-1] blur-3xl opacity-50"
      />
      <Container>
        <div className="flex items-center justify-center w-full h-full">
          <div className=" flex flex-col items-center w-full ">
            <div className="h-20 lg:max-w-xl sm:max-w-lg w-11/12 border-t-4 rounded-xl rounded-b-none border-gray-200  bg-gray-100 flex items-center justify-center">
              <img src={logo} alt="" className="w-60" />
            </div>
            <div className="lg:max-w-xl sm:max-w-lg w-11/12 flex flex-col rounded-b-2xl overflow-hidden    z-40  h-[70vh]  shadow-2xl  backdrop-blur-2xl">
              {status === "login" ? (
                <div className="w-full h-1/12 shadow-inner  rounded-t-none bg-gray-300 duration-500 delay-100 p-6 flex items-center justify-center tra">
                  <button
                    className="cursor-pointer flex gap-2 items-center text-gray-700 font-bold"
                    onClick={handlStatus}
                  >
                    ورود
                    <ArrowLeft size={16} />
                  </button>
                </div>
              ) : (
                <div
                  className={`${
                    isAnimating ? "hidden" : "flex"
                  } w-full h-11/12 shadow-inner items-center justify-center bg-white   p-6 flex `}
                >
                  {forgetPassword ? (
                    <div className="flex flex-col items-center justify-center w-full">
                      <form
                        className="flex flex-col  items-center justify-center duration-200 delay-150   w-8/12 gap-6"
                        action=""
                      >
                        {ResetPass.map((i) => (
                          <div
                            className="flex duration-500 relative flex-col w-full"
                            key={i.name}
                          >
                            <label
                              className={`
                            
                            ${
                              theme === "light"
                                ? "bg-white text-gray-700"
                                : "bg-gray-900 px-2 rounded-lg  text-gray-400"
                            }
                            
                            
                            absolute -top-2 text-xs right-3  z-10 mb-1 font-medium `}
                              htmlFor={i.name}
                            >
                              {i.label}
                            </label>
                            <input
                              id={i.name}
                              type={i.type}
                              name={i.name}
                              placeholder={i.placeholder}
                              onChange={handleInputChange}
                              value={
                                formData[i.name as keyof typeof formData] ?? ""
                              }
                              className={`
                            ${
                              theme === "light"
                                ? " bg-white border-gray-200 border-r-indigo-200 focus:border-indigo-200"
                                : "bg-gray-900 focus:border-gray-600 border-gray-800 text-white  border-r-gray-600"
                            }
                              
                            
                            px-4 text-sm placeholder:text-xs text-center border-r-3
                            shadow-inner  py-2
                            rounded-lg border-2 focus:border-2 h-12  focus:outline-0
                             transition backdrop-blur-sm`}
                            />
                          </div>
                        ))}

                        <button className="bg-indigo-200 text-sm text-gray-700 hover:bg-indigo-300/80 w-full rounded-md h-11 shadow border-b-3 border-indigo-300  hover:border-blue-400 cursor-pointer ">
                          ارسال رمز یکبار مصرف
                        </button>
                      </form>

                      <button
                        onClick={handlForgetPassword}
                        className="cursor-pointer text-sm text-right mt-6 text-indigo-500 p-1 "
                      >
                        برای ورود با نام کاربری و کلمه عبور کلیک کنید !{" "}
                      </button>
                    </div>
                  ) : (
                    <form
                      className="flex flex-col  items-center justify-center duration-200 delay-150   w-8/12 gap-6"
                      action=""
                    >
                      <img src={user} alt="" className="w-40" />

                      {login.map((i) => (
                        <div
                          className="flex duration-500 relative flex-col w-full"
                          key={i.name}
                        >
                          <label
                            className={`
                            
                            ${
                              theme === "light"
                                ? "bg-white text-gray-700"
                                : "bg-gray-900 px-2 rounded-lg  text-gray-400"
                            }
                            
                            
                            absolute -top-2 text-xs right-3  z-10 mb-1 font-medium `}
                            htmlFor={i.name}
                          >
                            {i.label}
                          </label>
                          <input
                            id={i.name}
                            type={i.type}
                            name={i.name}
                            placeholder={i.placeholder}
                            onChange={handleInputChange}
                            value={
                              formData[i.name as keyof typeof formData] ?? ""
                            }
                            className={`
                            ${
                              theme === "light"
                                ? " bg-white border-gray-200 border-r-indigo-200 focus:border-indigo-200"
                                : "bg-gray-900 focus:border-gray-600 border-gray-800 text-white  border-r-gray-600"
                            }
                              
                            
                            px-4 text-sm placeholder:text-xs text-center border-r-3
                            shadow-inner  py-2
                            rounded-lg border-2 focus:border-2 h-12  focus:outline-0
                             transition backdrop-blur-sm`}
                          />
                        </div>
                      ))}

                      <button
                        onClick={handlForgetPassword}
                        className=" cursor-pointer text-sm text-right w-full text-indigo-500 p-1 "
                      >
                        رمز عبور خود را فراموش کرده‌اید ؟
                      </button>
                      <button className="bg-indigo-200 text-gray-700 hover:bg-indigo-300/80 w-full rounded-md h-11 shadow border-b-3 border-indigo-300  hover:border-blue-400 cursor-pointer ">
                        ورود
                      </button>
                    </form>
                  )}
                </div>
              )}
              {status === "signIn" ? (
                <div className="w-full h-1/12 shadow-inner  bg-gray-300 duration-500 delay-100 p-6 flex items-center justify-center ">
                  <button
                    className="cursor-pointer flex gap-2 items-center text-gray-700 font-bold"
                    onClick={handlStatus}
                  >
                    ثبت نام
                    <ArrowLeft size={16} />
                  </button>
                </div>
              ) : (
                <div
                  className={`${
                    isAnimating ? "hidden" : "flex"
                  } w-full h-11/12 shadow-inner  bg-white  p-6  items-center justify-center `}
                >
                  <form
                    className="flex flex-col  items-center justify-center  duration-500   w-8/12 gap-6"
                    action=""
                  >
                    {signIn.map((i) => (
                      <div
                        className="flex duration-500 relative flex-col w-full"
                        key={i.name}
                      >
                        <label
                          className={`
                            
                            ${
                              theme === "light"
                                ? "bg-white text-gray-700"
                                : "bg-gray-900 px-2 rounded-lg  text-gray-400"
                            }
                            
                            
                            absolute -top-2 text-xs right-3  z-10 mb-1 font-medium `}
                          htmlFor={i.name}
                        >
                          {i.label}
                        </label>
                        <input
                          id={i.name}
                          type={i.type}
                          name={i.name}
                          placeholder={i.placeholder}
                          onChange={handleInputChange}
                          value={
                            formData[i.name as keyof typeof formData] ?? ""
                          }
                          className={`
                            ${
                              theme === "light"
                                ? " bg-white  border-gray-200 border-r-indigo-200 focus:border-indigo-200"
                                : "bg-gray-900 focus:border-gray-600 border-gray-800 text-white  border-r-gray-600"
                            }
                              
                            
                            px-4 text-sm placeholder:text-xs text-center border-r-3
                            shadow-inner  py-2
                            rounded-lg border-2 focus:border-2 h-12  focus:outline-0
                             transition backdrop-blur-sm`}
                        />
                      </div>
                    ))}

                    <p className="text-xs w-full text-indigo-500 p-1 ">
                      رمز عبور خود را فراموش کرده‌اید ؟
                    </p>
                    <button className="bg-indigo-200 text-gray-700 hover:bg-indigo-300/80 w-full rounded-md h-11 shadow border-b-3 border-indigo-300  hover:border-blue-400 cursor-pointer ">
                      ثبت نام
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
          <div className="hidden lg:block mix-blend-darken w-full">
            <img src={Ellipse} alt="" className="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
