import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { FaBuilding, FaMapMarkedAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";

const JobDetail = ({ job, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="tracking-widest bg-primary text-white p-6 rounded-lg ">
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
        <div className="mt-2 lg:flex justify-between items-center">
          <div className="bg-[#2c3b63] p-4 py-6 lg:w-1/2">
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
                <p className="text-xs opacity-65 bg-[#E1ECFF] text-primary p-4 rounded-md" >{job.description}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white text-primary p-4 lg:w-1/2">
              <h1>click</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
