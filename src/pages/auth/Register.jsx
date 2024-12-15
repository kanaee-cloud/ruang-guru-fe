import { useState } from "react";
import AuthSwiper from "../../components/common/AuthSwiper";
import Swal from "sweetalert2";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    firstname: "",
    nis: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const role = "jobseeker";
    const formData = {
      username: e.target.username.value || "",
      password: e.target.password.value || "",
      email: e.target.email.value || "",
      is_superadmin: false,
      registered_at: new Date().toISOString(),
      disabled: false,
      jobseeker: null,
      employer: null,
    };

    if (role === "jobseeker") {
      formData.jobseeker = {
        first_name: e.target.firstname?.value || "",
        last_name: e.target.last_name?.value || "",
        nis: e.target.nis?.value || "",
        graduate_year: parseInt(e.target.graduate_year?.value) || null,
        phone_number: e.target.phone_number?.value || "11111111111111111",
        resume: e.target.resume?.value || "",
        cv: e.target.cv?.value || "",
        portfolio: e.target.portfolio?.value || "",
        skills: e.target.skills?.value || "",
      };
    } else if (role === "employer") {
      formData.employer = {
        company_name: e.target.company_name?.value || "",
        company_description: e.target.company_description?.value || "",
        company_phone_number:
          e.target.company_phone_number?.value || "1111111111111111",
        company_address: e.target.company_address?.value || "",
        company_vision: e.target.company_vision?.value || "",
        company_mission: e.target.company_mission?.value || "",
      };
    }

    try {
      const response = await fetch("http://localhost:8000/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "Your account has been created.",
        });
      } else {
        const error = await response.json();
        // console.error("Error:", error);
        const errorMessage = error.detail
          .map((err) => `${err.loc[1]}: ${err.msg}`)
          .join("\n");
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: errorMessage,
        });
      }
    } catch (error) {
      // console.error("Error:", error);
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
        <div className="hidden lg:block h-[95vh] w-full lg:w-1/2 p-16">
          <AuthSwiper />
        </div>

        <div className="w-full lg:w-1/2 h-[85vh] flex flex-col">
          <div className="flex flex-col justify-center items-center flex-grow px-6">
            <div className="w-full sm:w-3/4 sm:flex-row gap-4 mt-10 bg-white shadow-md">
              <div className="flex flex-col justify-center p-7">
                <div className=" flex flex-col mx-auto text-center">
                  
                  <h1 className="font-semibold">Create An Account</h1>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-y-4 justify-start mt-6"
                >
                  <div className="flex flex-col">
                    <label htmlFor="email" className="font-semibold text-xs">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      type="email"
                      className="text-sm w-full border outline-none rounded-md px-4 py-2 mt-2"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="username" className="font-semibold text-xs">
                      Username <span className="text-red-600">*</span>
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
                      Password <span className="text-red-600">*</span>
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
                  <div className="flex flex-col">
                    <label htmlFor="nis" className="font-semibold text-xs">
                      NIS <span className="text-red-600">*</span>
                    </label>
                    <input
                      name="nis"
                      id="nis"
                      placeholder="Enter NIS"
                      type="text"
                      className="text-sm w-full border outline-none rounded-md px-4 py-2 mt-2"
                      value={formData.nis}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="firstname"
                      className="font-semibold text-xs"
                    >
                      First Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      name="firstname"
                      id="firstname"
                      placeholder="Enter First Name"
                      type="text"
                      className="text-sm w-full border outline-none rounded-md px-4 py-2 mt-2"
                      value={formData.firstname}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn-primary">
                    Register
                  </button>
                  <div className="flex items-center opacity-50 w-full">
                    <hr className="border w-full" />
                    <p className="text-center text-sm w-full">Continue with</p>
                    <hr className="border w-full" />
                  </div>
                  <div className="flex items-center text-sm gap-x-1 mx-auto">
                    <p>Already have an account?</p>
                    <a
                      href="/auth/login"
                      className="text-primary underline font-semibold"
                    >
                      Login
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

export default Register;
