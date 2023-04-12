import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import FirstSection from "./FirstSection";
import Count from "./Count";
import Banner from "./Banner";
import React from "react";
import Email from "./Email";
import Buymail from "./Buymail";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
function Layout() {
  return (
    <>
      <FirstSection />
      <Count />
      <Banner />
      <Email/>
      <Buymail/>
      <Testimonial/>
      <Footer/>
    </>
  );
}

export default Layout;
