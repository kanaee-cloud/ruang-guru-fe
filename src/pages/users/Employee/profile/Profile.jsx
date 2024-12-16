import React, { useState, useEffect } from "react";
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
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

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

  // Fetch profile data from the API
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("access_token"); // Assuming token is stored in localStorage
        const response = await fetch("http://localhost:8000/users/profile", {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Profile data:", data); // Log the response data
          setProfile(data);
        } else {
          console.error("Failed to fetch profile");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched or if there is an error
      }
    };

    fetchProfile();
  }, []);

  const updateSkills = async (newSkills) => {
    const token = localStorage.getItem("access_token");

    const updatedProfile = {
      ...profile,
      jobseeker: {
        ...profile.jobseeker,
        skills: newSkills, // Update skills here
      },
    };

    try {
      const response = await fetch("http://localhost:8000/users/profile", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProfile),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Updated profile:", data); // Log updated profile data
        setProfile(data); // Update profile with new data
      } else {
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <DashboardLayout>
        <div className="flex items-center gap-x-4 mb-5 md:mb-10">
          <NavLink to="/" className="hover:bg-gray-300 rounded-full p-3 md:p-4">
            <FaArrowLeft size={20} className="cursor-pointer md:size-25" />
          </NavLink>
          <h1 className="text-lg md:text-2xl font-semibold">Your Company</h1>
        </div>

        {/* Profile  */}
        <div className="rounded-md bg-primary mt-5 py-5 px-6 md:px-14 text-white">
          <div className="flex flex-col md:flex-row gap-4 md:gap-x-6 items-center md:items-start">
            <div>
              <img
                src={profile?.image || "/assets/no-profile.png"} // Display user image if available
                alt="Profile"
                className="w-20 h-20 md:w-auto md:h-auto"
              />
            </div>
            <div>
              <div className="mb-4">
                <h1 className="font-semibold text-3xl md:text-5xl">
                  Hi, {profile ? profile.company_name : "User"}!
                </h1>
              </div>
              <div className="opacity-80 flex flex-col gap-y-2">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-y-2 md:gap-x-2">
                  <p className="text-xs flex items-center gap-x-2">
                    <CiLocationOn />
                    {profile
                      ? profile.company_address
                      : "Location not available"}
                  </p>
                </div>
                <p className="text-xs flex items-center gap-x-2">
                  <CiMail />
                  {profile ? profile.email : "Email not available"}
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

        {loading ? (
          <div className="flex justify-center mt-5">Loading profile...</div>
        ) : (
          <div className="mt-5 w-full md:flex md:flex-row md:items-start gap-4 md:gap-x-2">
            <div className="bg-white h-[300px] w-full p-5 md:p-10 flex justify-center flex-col gap-y-10 ">
              <div className="flex items-start flex-col gap-y-2">
                <h1 className="font-semibold text-xl md:text-2xl">
                  About Company
                </h1>
                <p className="text-sm">Add Your Company Description</p>
                <p className="text-sm">
                  {profile
                    ? profile.company_description
                    : "Add your Company Description"}
                </p>
                <button
                  className="text-sm border border-primary px-4 py-1 rounded-lg"
                  onClick={openAboutModal}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}

        {isAboutModalOpen && (
          <AddAbout onClose={closeAboutModal} updateSkills={updateSkills} />
        )}
        {isEditModalOpen && <EditProfile onClose={closeEditModal} />}
        {isWorkModalOpen && <AddPosition onClose={closeWorkModal} />}
        {isFileModalOpen && <AddCV onClose={closeFileModal} />}
        {isResumeModalOpen && <AddResume onClose={closeResumeModal} />}
      </DashboardLayout>
    </>
  );
};

export default Profile;
