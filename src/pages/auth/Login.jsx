import React from "react";
import AuthSwiper from "../../components/common/AuthSwiper";


const Login = () => {
  return (
    <>
      <section className="bg-gradient flex flex-col lg:flex-row w-full">
        <div className="hidden lg:block h-[95vh] w-full lg:w-1/2 p-5">
          {/* <img
            src="/assets/login-landing.png"
            alt="Auth Landing"
            className="w-full h-full"
          /> */}
          <AuthSwiper />
          
        </div>

        <div className="w-full lg:w-1/2 h-screen flex flex-col">
          <div className="flex flex-col justify-center items-center flex-grow px-6">
            <h1 className="font-semibold text-4xl sm:text-5xl md:text-4xl text-accent text-center">
              <span className="text-accents">Ruang</span>Nganggur.
            </h1>

            <div className="w-full sm:w-3/4 sm:flex-row gap-4 mt-10 bg-white shadow-md">
              <div className="flex flex-col justify-center p-7">
                <div className=" flex flex-col mx-auto text-center">
                  <h1 className="font-semibold">Welcome Back!</h1>
                  <p className="text-sm">Login to continue Ruang Nganggur</p>
                </div>
                <form
                  action=""
                  className="flex flex-col gap-y-4 justify-start mt-6"
                >
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold text-xs">
                      Username
                    </label>
                    <input
                      name="username"
                      id="username"
                      placeholder="Enter Username"
                      type="text"
                      className="text-sm w-full border outline-none rounded-md  px-4 py-2 mt-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold text-xs">
                      Password
                    </label>
                    <input
                      name="password"
                      id="password"
                      placeholder="Enter Password"
                      type="text"
                      className="text-sm w-full border outline-none rounded-md  px-4 py-2 mt-2"
                    />
                  </div>
                  <div className="flex items-center text-sm">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="" className="ml-1 font-semibold">
                      Remember Me
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Login
                  </button>
                  <div className="flex items-center opacity-50 w-full">
                    <hr className="border  w-full" />
                    <p className="text-center text-sm w-full">Continue with</p>
                    <hr className="border w-full" />
                  </div>
                  <div className="flex items-center text-sm gap-x-1 mx-auto">
                    <p>Don't have an account?</p>
                    <a href="/auth/register " className="text-primary underline font-semibold">Register</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
