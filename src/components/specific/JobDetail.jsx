import React, { useState } from "react";
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
      <div className="tracking-widest w-[800px] h-[600px] bg-primary text-white p-6 rounded-lg overflow-y-auto">
        <div className="bg-[#2c3b63] p-4 rounded-md flex justify-between">
          <div>
            <h1 className="lg:text-2xl font-medium">{job.title}</h1>
            <p className="flex items-center gap-x-2 text-xs">
              <FaBuilding className="text-accents" />
              {job.company}
            </p>
          </div>
          <button className=" text-accents" onClick={onClose}>
            <IoMdClose size={25} />
          </button>
        </div>
        <div className="mt-2 lg:flex justify-between gap-4">
          <div className="bg-[#2c3b63] p-4 py-6 lg:w-1/2 rounded-md">
            <p>Detail Pekerjaan</p>
            <div className="py-4">
              <div className="flex justify-between items-center">
                <h1 className="flex items-center gap-x-2">
                  <FaMapMarkedAlt className="text-accents" />
                  Lokasi : {job.location}
                </h1>
              </div>
              <div>
                <h1 className="flex items-center gap-x-2">
                  <AiOutlineDollar className="text-accents" />
                  Perkiraan Gaji : {job.salary}
                </h1>
              </div>
              <div>
                <h1 className="flex items-center gap-x-2 mb-2">
                  <IoDocumentTextOutline className="text-accents" /> Deskripsi
                </h1>
                <p className="text-xs opacity-65 bg-[#E1ECFF] text-primary p-4 rounded-md">
                  {job.description}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="text-primary">
              {/* <h1>click</h1> */}
              <div className="bg-blue-100 rounded-lg p-6">
                <div className="border-2 border-yellow-500 border-dashed rounded-lg p-6 text-center bg-white">
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
                <div id="fileList" className="mt-6">
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
