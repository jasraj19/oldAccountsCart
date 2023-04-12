import Posts from "./Posts";
import React from "react";
// import "./Blogs.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Footer from "../Components/Footer";
import Bloguppersec from "./Bloguppersec";

function Blogs() {
  return (
    <>
      <section className="blogs ">
        <Bloguppersec/>
        <div className='blog-sec-2 container-fluid'>
            <div className='bhtext2 pt-5'>
                <p>Duis aute irure dolor</p>
                <h1 className="pb-5">Lorem ipsum dolor sit</h1>
            </div>
        </div>
        <Posts />
        
        <Footer />
      </section>
    </>
  );
}

export default Blogs;
