import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiFillFilePdf, AiFillDelete } from "react-icons/ai"; // Icon for PDF and delete
import { FaRegTrashAlt } from "react-icons/fa";

const AddResume = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFileDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const newFiles = Array.from(event.dataTransfer.files).map((file) => ({
      file,
      progress: 0, // Initial progress
      isUploaded: false,
    }));

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    simulateUpload(newFiles);
  };

  const handleFileSelect = (event) => {
    const newFiles = Array.from(event.target.files).map((file) => ({
      file,
      progress: 0, // Initial progress
      isUploaded: false,
    }));

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    simulateUpload(newFiles);
  };

  const simulateUpload = (fileList) => {
    fileList.forEach((fileObj, index) => {
      const interval = setInterval(() => {
        setFiles((prevFiles) => {
          const updatedFiles = [...prevFiles];
          const fileIndex = updatedFiles.findIndex(
            (f) => f.file.name === fileObj.file.name
          );

          if (fileIndex !== -1) {
            updatedFiles[fileIndex].progress += 10; // Simulate upload progress
            if (updatedFiles[fileIndex].progress >= 100) {
              clearInterval(interval);
              updatedFiles[fileIndex].progress = 100;
              updatedFiles[fileIndex].isUploaded = true;
            }
          }
          return updatedFiles;
        });
      }, 500); // Update every 500ms
    });
  };

  const handleCancelUpload = (fileName) => {
    setFiles((prevFiles) =>
      prevFiles.filter((file) => file.file.name !== fileName)
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-right"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleFileDrop}
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
        <div
          className="border-2 h-[40vh] flex justify-center items-center border-gray-300 p-6 text-center rounded-lg mb-4 hover:bg-gray-100 cursor-pointer"
          onClick={() => document.getElementById("fileInput").click()}
        >
          <div className="flex flex-col text-center">
            <p className="text-sm font-medium">
              Drop your files here or click upload
            </p>
            <p className="text-xs opacity-50 font-medium">
              Supported file type : PDF
            </p>
          </div>
          <input
            id="fileInput"
            type="file"
            className="hidden"
            multiple
            onChange={handleFileSelect}
          />
        </div>

        <ul className="space-y-2">
          {files.map((fileObj, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 border border-gray-200 p-4 rounded-lg"
            >
                <AiFillFilePdf
                    size={25}
                    className="text-red-500"
                />
                <div className="flex-1">
                <p className="text-sm truncate">{fileObj.file.name}</p>
              </div>
              {fileObj.isUploaded ? (
                <FaRegTrashAlt
                  size={15}
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleCancelUpload(fileObj.file.name)}
                />
              ) : (
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <button
                    className="absolute text-primary"
                    onClick={() => handleCancelUpload(fileObj.file.name)}
                  >
                    <IoMdClose size={16} />
                  </button>
                </div>
              )}
              
            </li>
            
          ))}
           <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
            Save
          </button>
        </ul>
      </div>
    </div>
  );
};

export default AddResume;
