import { useState } from "react";
import AuthSwiper from "../../components/common/AuthSwiper";
import Swal from "sweetalert2";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    company_name: "",
    company_phone_number: "",
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

    // Tentukan role: "employer" atau "jobseeker"
    const role = "employer";

    const payload = {
      username: e.target.username.value || "",
      password: e.target.password.value || "",
      email: e.target.email.value || "",
      is_superadmin: false,
      registered_at: new Date().toISOString(),
      disabled: false,
      role: role,
    };

    // Tambahkan data sesuai role
    if (role === "employer") {
      payload.employer = {
        company_name: e.target.company_name?.value || "",
        company_description: e.target.company_description?.value || "",
        company_phone_number: e.target.company_phone_number?.value || "",
        company_address: e.target.company_address?.value || "",
        company_vision: e.target.company_vision?.value || "",
        company_mission: e.target.company_mission?.value || "",
      };
    } else if (role === "jobseeker") {
      payload.jobseeker = {
        first_name: e.target.firstname?.value || "",
        last_name: e.target.last_name?.value || "",
        nis: e.target.nis?.value || "",
        graduate_year: parseInt(e.target.graduate_year?.value) || null,
        phone_number: e.target.phone_number?.value || "",
        resume: e.target.resume?.value || "",
        cv: e.target.cv?.value || "",
        portfolio: e.target.portfolio?.value || "",
        skills: e.target.skills?.value || "",
      };
    }

    // Pastikan tidak ada data tambahan yang dikirim
    if (role === "jobseeker") delete payload.employer;
    if (role === "employer") delete payload.jobseeker;

    // Kirim request ke API
    try {
      const response = await fetch("https://ruang-nganggur-fast-api.vercel.app/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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
        console.error("Error:", error);
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
      console.error("Server error:", error);
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
                    <label
                      htmlFor="company_phone_number"
                      className="font-semibold text-xs"
                    >
                      Company Phone Number{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      name="company_phone_number"
                      id="company_phone_number"
                      placeholder="Enter Phone Number"
                      type="text"
                      className="text-sm w-full border outline-none rounded-md px-4 py-2 mt-2"
                      value={formData.company_phone_number}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="firstname"
                      className="font-semibold text-xs"
                    >
                      Company Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      name="company_name"
                      id="company_name"
                      placeholder="Enter Company Name"
                      type="text"
                      className="text-sm w-full border outline-none rounded-md px-4 py-2 mt-2"
                      value={formData.company_name}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn-primary py-2 px-5">
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
