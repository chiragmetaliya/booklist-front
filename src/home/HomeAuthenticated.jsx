import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Paidbook from "../components/Courses";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Paidbook />
      <Footer />
    </>
  );
}

export default Home;
