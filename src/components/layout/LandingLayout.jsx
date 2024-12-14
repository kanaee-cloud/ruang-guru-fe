import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const LandingLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className="w-full">{children}</section>
      <Footer />
    </>
  );
};

export default LandingLayout;
