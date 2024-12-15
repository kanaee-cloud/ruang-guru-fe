import React, { useState } from "react";
import DashboardLayout from "../../../../components/layout/DashboardLayout";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const JobPosting = () => {
  const [formData, setFormData] = useState({
    role: "",
    location: "",
    salary: "",
    type_job: "",
    min_age: 18,
    max_age: 60,
    gender: "",
    open_date: "",
    close_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Job Listing:", formData);
    alert("Job listing submitted successfully!");
    // Here you can add logic to submit the form data to an API
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
        <div className="bg-white max-h-[85vh] overflow-y-hidden p-6 md:p-10 rounded-md shadow-md">
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
              <input
                type="text"
                id="type_job"
                name="type_job"
                value={formData.type_job}
                onChange={handleChange}
                placeholder="e.g., Full-Time, Part-Time"
                className="border border-gray-300 rounded-lg p-2"
                required
              />
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
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
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
