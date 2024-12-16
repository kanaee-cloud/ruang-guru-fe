import React, { useState, useEffect } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import {
  FaBuilding,
  FaDownload,
  FaMapMarkedAlt,
  FaTrash,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
// import { FaCheckCircle } from "react-icons/fa";

const JobDetail = ({ job, onClose }) => {
  const [files, setFiles] = useState([]);
  const [employer, setEmployer] = useState(null);
  console.log(job);

  useEffect(() => {
    const fetchEmployer = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) {
          console.error("No access token found");
          return;
        }

        // Pastikan ada `job.employer_id` untuk menggantikan `{user_id}` dalam URL
        if (!job || !job.employer_id) {
          console.error("No employer ID found in job");
          return;
        }

        // Lakukan fetch ke endpoint `/users/user/{user_id}`
        const response = await fetch(
          `http://localhost:8000/users/user/${job.employer_id}`,
          {
            method: "GET",
            headers: {
              // Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        // Periksa apakah respons berhasil
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse data JSON
        const data = await response.json();
        console.log("Fetched data:", data);

        // Set employer dari data yang diambil
        setEmployer(data.employer);
      } catch (error) {
        console.error("Error fetching employer data:", error);
      }
    };

    // Panggil fetchEmployer jika `job` tersedia
    if (job && job.employer_id) {
      fetchEmployer();
    }
  }, [job]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files).map((file) => ({
      file,
      uploaded: true,
    }));
    setFiles(selectedFiles);
  };

  const handleRemoveFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[1100px] h-[600px] bg-primary text-white p-5 rounded-2xl overflow-y-hidden">
        <div className="bg-[#2c3b63] h-[20%] p-4 rounded-xl flex justify-between items-center">
          <div>
            <h1 className="lg:text-4xl font-medium mb-3">{job.role}</h1>
            <p className="flex items-center gap-x-2 text-xl">
              <FaBuilding className="text-accents" />
              {/* {job.employer_id} */}
              {employer ? employer.company_name : "Loading..."}
            </p>
          </div>
          <button className=" text-accents" onClick={onClose}>
            <IoMdClose size={25} />
          </button>
        </div>
        <div className="h-[78%] w-full mt-3 lg:flex gap-x-3">
          <div className="bg-[#2c3b63] w-2/3 p-4 rounded-xl">
            <p className="text-2xl font-medium mb-2">Detail Pekerjaan</p>
            <div className="flex flex-col gap-y-1">
              <div className="flex justify-between items-center">
                <h1 className="flex items-center gap-x-2 text-lg">
                  <FaMapMarkedAlt className="text-accents" />
                  Lokasi : {job.location}
                </h1>
              </div>
              <div>
                <h1 className="flex items-center gap-x-2 text-lg">
                  <AiOutlineDollar className="text-accents " />
                  Perkiraan Gaji : {job.salary}
                </h1>
              </div>
              <div>
                <h1 className="flex items-center gap-x-2 mb-3 text-lg">
                  <IoDocumentTextOutline className="text-accents" /> Deskripsi
                </h1>
                <p className="h-[260px] text-base opacity-65 bg-[#E1ECFF] text-primary p-4 rounded-md overflow-auto">
                  {job.description}
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-4 bg-[#2c3b63] rounded-lg">
            <div className="text-primary">
              {/* <h1>click</h1> */}
              <div className=" bg-blue-100 rounded-lg p-4 flex flex-col gap-y-6 align-middle">
                <div className="w-full border-2 border-yellow-500 border-dashed rounded-lg p-6 text-center bg-white">
                  <p className="text-gray-700 mb-2">
                    Drop your file or click to upload
                  </p>
                  <p className="text-yellow-500 mb-4">
                    Supported file type: PNG, JPG, GIF
                  </p>
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    accept="image/png, image/jpeg, image/gif"
                    multiple
                    onChange={handleFileChange}
                  />
                  <button
                    onClick={() => document.getElementById("fileInput").click()}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
                  >
                    Browse
                  </button>
                </div>
                <div id="fileList" className="max-h-[100px] overflow-y-auto">
                  {files.map((fileWrapper, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-white p-4 rounded-lg mb-4"
                    >
                      <div className="flex items-center">
                        <img
                          className="w-10 h-10"
                          src="https://storage.googleapis.com/a1aa/image/TMxytQJNzgoKNt5ZBpFTI9tI6ozMfG5780uqQkvQOX3icY9JA.jpg"
                          alt="File icon"
                        />
                        <div className="ml-4">
                          <p className="text-gray-700">
                            {fileWrapper.file.name}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {(fileWrapper.file.size / 1024).toFixed(2)} KB
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleRemoveFile(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash />
                        </button>
                        <a
                          href={URL.createObjectURL(fileWrapper.file)}
                          download={fileWrapper.file.name}
                          className="text-blue-500 hover:underline"
                        >
                          <FaDownload />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 w-full max-w-md">
                <button className="bg-yellow-500 text-black w-full py-4 rounded-lg text-center">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
