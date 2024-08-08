import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Paidbook from "../components/Courses";
import Footer from "../components/Footer";

function HomeAuthenticated() {
  return (
    <>
      <Navbar />
      <Banner />
      <Paidbook />
      <Footer />
    </>
  );
}

export default HomeAuthenticated;
