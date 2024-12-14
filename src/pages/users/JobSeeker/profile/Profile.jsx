import React, { useState } from "react";
import DashboardLayout from "../../../../components/layout/DashboardLayout";
import { FaArrowLeft } from "react-icons/fa";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import AddAbout from "../../../../components/specific/profile/AddAbout";
import EditProfile from "../../../../components/specific/profile/EditProfile";
import AddPosition from "../../../../components/specific/profile/AddPosition";
import AddCV from "../../../../components/specific/profile/AddCV";
import AddResume from "../../../../components/specific/profile/AddResume";

const Profile = () => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isWorkModalOpen, setIsWorkModalOpen] = useState(false);
  const [isFileModalOpen, setIsFileModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openAboutModal = () => setIsAboutModalOpen(true);
  const closeAboutModal = () => setIsAboutModalOpen(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const openWorkModal = () => setIsWorkModalOpen(true);
  const closeWorkModal = () => setIsWorkModalOpen(false);

  const openFileModal = () => setIsFileModalOpen(true);
  const closeFileModal = () => setIsFileModalOpen(false);

  const openResumeModal = () => setIsResumeModalOpen(true);
  const closeResumeModal = () => setIsResumeModalOpen(false);

  return (
    <>
      <DashboardLayout>
        <div className="flex items-center gap-x-4 mb-5">
          <NavLink to="/" className="hover:bg-gray-300 rounded-full p-3 md:p-4">
            <FaArrowLeft size={20} className="cursor-pointer md:size-25" />
          </NavLink>
          <h1 className="text-lg md:text-2xl font-semibold">Your Profile</h1>
        </div>

        {/* Profile  */}
        <div className="rounded-md bg-primary mt-5 py-5 px-6 md:px-14 text-white">
          <div className="flex flex-col md:flex-row gap-4 md:gap-x-6 items-center md:items-start">
            <div>
              <img
                src="/assets/no-profile.png"
                alt="Profile"
                className="w-20 h-20 md:w-auto md:h-auto"
              />
            </div>
            <div>
              <div className="mb-4">
                <h1 className="font-semibold text-3xl md:text-5xl">
                  Hi, User!
                </h1>
              </div>
              <div className="opacity-80 flex flex-col gap-y-2">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-y-2 md:gap-x-2">
                  <p className="text-xs flex items-center gap-x-2">
                    <CiLocationOn />
                    Bandung, Jawa Barat
                  </p>
                </div>
                <p className="text-xs flex items-center gap-x-2">
                  <CiMail />
                  adam@example.com
                </p>
                <button
                  onClick={openEditModal}
                  className="text-sm px-4 border border-white rounded-lg"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 w-full">
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-x-2">
            <div className="bg-white w-full lg:w-1/2 p-5 md:p-10 flex flex-col gap-y-10">
              <div className="flex items-start flex-col gap-y-2">
                <h1 className="font-semibold text-xl md:text-2xl">About Me</h1>
                <p className="text-sm">
                  Add a personal summary to your profile to introduce yourself.
                </p>
                <button
                  className="text-sm border border-primary px-4 py-1 rounded-lg"
                  onClick={openAboutModal}
                >
                  Add
                </button>
              </div>
              <div className="flex items-start flex-col gap-y-2">
                <h1 className="font-semibold text-xl md:text-2xl">
                  Work Experience
                </h1>
                <p className="text-sm">Add your work experience.</p>
                <button
                  className="text-sm border border-primary px-4 py-1 rounded-lg"
                  onClick={openWorkModal}
                >
                  Add
                </button>
              </div>
            </div>
            <div className="bg-white w-full lg:w-1/2 p-5 md:p-10 flex flex-col gap-y-10">
              <div className="flex items-start flex-col gap-y-2">
                <h1 className="font-semibold text-xl md:text-2xl">
                  CV & Certifications
                </h1>
                <p className="text-sm">Add a personal CV & certification.</p>
                <button
                  className="text-sm border border-primary px-4 py-1 rounded-lg"
                  onClick={openFileModal}
                >
                  Add
                </button>
              </div>
              <div className="flex items-start flex-col gap-y-2">
                <h1 className="font-semibold text-xl md:text-2xl">Resume</h1>
                <p className="text-sm">Upload your resume.</p>
                <button
                  className="text-sm border border-primary px-4 py-1 rounded-lg"
                  onClick={openResumeModal}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        {isAboutModalOpen && <AddAbout onClose={closeAboutModal} />}
        {isEditModalOpen && <EditProfile onClose={closeEditModal} />}
        {isWorkModalOpen && <AddPosition onClose={closeWorkModal} />}
        {isFileModalOpen && <AddCV onClose={closeFileModal} />}
        {isResumeModalOpen && <AddResume onClose={closeResumeModal} />}
      </DashboardLayout>
    </>
  );
};

export default Profile;
