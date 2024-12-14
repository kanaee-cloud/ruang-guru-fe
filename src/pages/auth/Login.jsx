import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthSwiper from "../../components/common/AuthSwiper";
import Swal from "sweetalert2";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        const { access_token } = result;

        localStorage.setItem("access_token", access_token);
        // Swal.fire({
        //   icon: "success",
        //   title: "Login Successful",
        //   text: "Redirecting to your profile...",
        // });

        setTimeout(() => {
          navigate("/auth/success");
          setTimeout(() => navigate("/users/profile"), 2000);
        }, 1000);
      } else {
        const error = await response.json();
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Username or Password is incorrect.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Failed to connect to server.",
      });
    }
  };

  return (
    <>
      <section className="bg-gradient flex flex-col lg:flex-row w-full h-screen">
        <div className="hidden lg:block h-[95vh] w-full lg:w-1/2 p-5">
          <AuthSwiper />
        </div>

        <div className="w-full lg:w-1/2 h-[85vh] flex flex-col">
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
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-y-4 justify-start mt-6"
                >
                  <div className="flex flex-col">
                    <label htmlFor="username" className="font-semibold text-xs">
                      Username
                    </label>
                    <input
                      name="username"
                      id="username"
                      placeholder="Enter Username"
                      type="text"
                      className="text-sm w-full border outline-none rounded-md px-4 py-2 mt-2"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="password" className="font-semibold text-xs">
                      Password
                    </label>
                    <input
                      name="password"
                      id="password"
                      placeholder="Enter Password"
                      type="password"
                      className="text-sm w-full border outline-none rounded-md px-4 py-2 mt-2"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex items-center text-sm">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember" className="ml-1 font-semibold">
                      Remember Me
                    </label>
                  </div>
                  <button type="submit" className="btn-primary">
                    Login
                  </button>
                  <div className="flex items-center opacity-50 w-full">
                    <hr className="border w-full" />
                    <p className="text-center text-sm w-full">Continue with</p>
                    <hr className="border w-full" />
                  </div>
                  <div className="flex items-center text-sm gap-x-1 mx-auto">
                    <p>Don’t have an account?</p>
                    <a
                      href="/auth/register"
                      className="text-primary underline font-semibold"
                    >
                      Register
                    </a>
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
