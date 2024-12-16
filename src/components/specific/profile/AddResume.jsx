import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
// import { AiFillFilePdf, AiFillDelete } from "react-icons/ai"; // Icon for PDF and delete
// import { FaRegTrashAlt } from "react-icons/fa";

const AddResume = ({ onClose, updateProfile }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [resumeUrl, setResumeUrl] = useState(null);
 

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");

    try {
      const response = await fetch("http://localhost:8000/users/profile", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resume: resumeUrl, // Send the resume URL to the API
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Updated profile with resume:", data);
        updateProfile(data); // Update the profile state with the new data
        onClose(); // Close the modal after successful submission
      } else {
        console.error("Failed to update resume");
      }
    } catch (error) {
      console.error("Error updating resume:", error);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-right"
   
    >
      <div
        className={`bg-white p-6 py-12 rounded-lg w-full max-w-md transform transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "-translate-x-10"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">
            Add Resume
          </h2>
          <button className="text-xl" onClick={onClose}>
            <IoMdClose size={30} />
          </button>
        </div>
        <p>Upload</p>
        

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label>Resume Url</label>
              <input 
                type="text" 
                className="py-2 px-4 text-sm border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary"
                onChange={(e) => setResumeUrl(e.target.value)}
                />
            </div>
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm mt-4">
            Save
          </button>
          </form>
      </div>
    </div>
  );
};

export default AddResume;
