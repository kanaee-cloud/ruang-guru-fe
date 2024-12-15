import React, { useState } from "react";
import DashboardLayout from "../../../../components/layout/DashboardLayout";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Applicant = () => {
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      job_letter: "https://example.com/job-letter.pdf",
      status: "Process",
      applicationDate: "2024-12-01",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UI/UX Designer",
      job_letter: "https://example.com/job-letter.pdf",
      status: "Accepted",
      applicationDate: "2024-12-02",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Data Analyst",
      job_letter: "https://example.com/job-letter.pdf",
      status: "Rejected",
      applicationDate: "2024-12-03",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      case "Process":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleStatusChange = (id, newStatus) => {
    const updatedApplicants = applicants.map((applicant) =>
      applicant.id === id ? { ...applicant, status: newStatus } : applicant
    );
    setApplicants(updatedApplicants);
    console.log(`Status for applicant ID ${id} updated to ${newStatus}`);
  };

  return (
    <DashboardLayout>
      <div className="flex items-center gap-x-4 mb-5 md:mb-10">
        <NavLink to="/" className="hover:bg-gray-300 rounded-full p-3 md:p-4">
          <FaArrowLeft size={20} className="cursor-pointer md:size-25" />
        </NavLink>
        <h1 className="text-lg md:text-2xl font-semibold">Job Applicants</h1>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-md shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm md:text-base">
              <th className="p-4 border-b">Job Id</th>
              <th className="p-4 border-b">Name/Jobseeker Id</th>
              <th className="p-4 border-b">Role</th>
              <th className="p-4 border-b">Job Letter</th>
              <th className="p-4 border-b">Status</th>
              <th className="p-4 border-b">Application Date</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant) => (
              <tr key={applicant.id} className="hover:bg-gray-50">
                <td className="p-4 border-b text-sm md:text-base">
                  {applicant.id}
                </td>
                <td className="p-4 border-b text-sm md:text-base">
                  {applicant.name}
                </td>
                <td className="p-4 border-b text-sm md:text-base">
                  {applicant.role}
                </td>
                <td className="p-4 border-b text-sm md:text-base">
                  <a
                    href={applicant.job_letter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Letter
                  </a>
                </td>
                <td className="p-4 border-b text-sm md:text-base">
                  <select
                    value={applicant.status}
                    onChange={(e) =>
                      handleStatusChange(applicant.id, e.target.value)
                    }
                    className={`p-2 rounded-md focus:outline-none ${getStatusColor(
                      applicant.status
                    )}`}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Accepted</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
                <td className="p-4 border-b text-sm md:text-base">
                  {applicant.applicationDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Applicant;

