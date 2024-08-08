import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Courses from "../components/Courses";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Courses />
      <Footer />
    </>
  );
}

export default Home;
