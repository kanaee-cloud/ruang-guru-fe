import React, { useState } from "react";
import DashboardLayout from "../../../../components/layout/DashboardLayout";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const JobPosting = () => {
  const [formData, setFormData] = useState({
    id: 0,
    employer_id: 0,
    role: "",
    location: "",
    salary: 0,
    type_job: "full_time", // Default value
    min_age: 0,
    max_age: 0,
    gender: "male", // Default value
    open_date: "",
    close_date: "",
    description: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ambil token dari localStorage
    const token = localStorage.getItem("access_token");

    try {
      // Pertama, ambil data profile pengguna
      const profileResponse = await fetch(
        "http://localhost:8000/users/profile",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!profileResponse.ok) {
        throw new Error("Failed to fetch user profile");
      }

      const profileData = await profileResponse.json();
      const employerId = profileData.employer?.id; // Mendapatkan employer_id dari data profil

      if (!employerId) {
        throw new Error("Employer not found in user profile");
      }

      // Perbarui formData dengan employer_id yang valid
      const updatedFormData = {
        ...formData,
        employer_id: employerId, // Menambahkan employer_id ke formData
      };

      // Lanjutkan untuk mengirim request posting pekerjaan
      const jobResponse = await fetch("http://localhost:8000/jobs/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedFormData),
      });

      if (jobResponse.ok) {
        const data = await jobResponse.json();
        alert("Job posting created successfully!");
        console.log("Job Data:", data);
        // Reset form
        setFormData({
          id: 0,
          employer_id: employerId, // Employer ID tetap
          role: "",
          location: "",
          salary: 0,
          type_job: "full_time",
          min_age: 0,
          max_age: 0,
          gender: "male",
          open_date: "",
          close_date: "",
          description: "",
        });
      } else {
        const errorData = await jobResponse.json();
        console.error("Job posting error:", errorData);
        alert("Failed to create job posting. Please check your input.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing the job posting.");
    }
  };

  return (
    <>
      <DashboardLayout>
        <div className="flex items-center gap-x-4 mb-5 md:mb-10">
          <NavLink to="/" className="hover:bg-gray-300 rounded-full p-3 md:p-4">
            <FaArrowLeft size={20} className="cursor-pointer md:size-25" />
          </NavLink>
          <h1 className="text-lg md:text-2xl font-semibold">
            Post a Job Listing
          </h1>
        </div>

        {/* Job Posting Form */}
        <div className="bg-white max-h-[85vh] overflow-y-auto p-6 md:p-10 rounded-md shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="role" className="font-medium text-sm mb-1">
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Enter the role"
                className="border border-gray-300 rounded-lg p-2"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="location" className="font-medium text-sm mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter the location"
                className="border border-gray-300 rounded-lg p-2"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="salary" className="font-medium text-sm mb-1">
                Salary
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="Enter the salary"
                className="border border-gray-300 rounded-lg p-2"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="type_job" className="font-medium text-sm mb-1">
                Type of Job
              </label>
              <select
                id="type_job"
                name="type_job"
                value={formData.type_job}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2"
                required
              >
                <option value="full_time">Full Time</option>
                <option value="part_time">Part Time</option>
                <option value="internship">Internship</option>
              </select>
            </div>

            <div className="flex gap-x-6">
              <div className="flex flex-col w-1/2">
                <label htmlFor="min_age" className="font-medium text-sm mb-1">
                  Minimum Age
                </label>
                <input
                  type="number"
                  id="min_age"
                  name="min_age"
                  value={formData.min_age}
                  onChange={handleChange}
                  min="0"
                  placeholder="Minimum age"
                  className="border border-gray-300 rounded-lg p-2"
                  required
                />
              </div>

              <div className="flex flex-col w-1/2">
                <label htmlFor="max_age" className="font-medium text-sm mb-1">
                  Maximum Age
                </label>
                <input
                  type="number"
                  id="max_age"
                  name="max_age"
                  value={formData.max_age}
                  onChange={handleChange}
                  min="0"
                  placeholder="Maximum age"
                  className="border border-gray-300 rounded-lg p-2"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="gender" className="font-medium text-sm mb-1">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2"
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="open_date" className="font-medium text-sm mb-1">
                Open Date
              </label>
              <input
                type="date"
                id="open_date"
                name="open_date"
                value={formData.open_date}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="close_date" className="font-medium text-sm mb-1">
                Close Date
              </label>
              <input
                type="date"
                id="close_date"
                name="close_date"
                value={formData.close_date}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
            >
              Submit Job Listing
            </button>
          </form>
        </div>
      </DashboardLayout>
    </>
  );
};

export default JobPosting;
