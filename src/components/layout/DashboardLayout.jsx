import React, { useState, useEffect } from "react";
import Sidebar from "../common/Sidebar";
import SidebarEmployee from "../common/SidebarEmployee";

const DashboardLayout = ({ children }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("access_token"); // Assuming token is stored in localStorage
        const response = await fetch("https://ruang-nganggur-fast-api.vercel.app/users/profile", {
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
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      {/* Conditionally render Sidebar based on profile.role */}
      {profile?.role === "jobseeker" ? <Sidebar /> : <SidebarEmployee />}
      {/* <Sidebar /> */}
      <section className="py-8 px-7 w-full h-screen relative">{children}</section>
    </div>
  );
};

export default DashboardLayout;
