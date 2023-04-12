import React from 'react'
import Navbar from "../Components/Navbar";
import "bootstrap";
// import "./Blogs.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Bloghome from './Bloghome';
function Bloguppersec() {
  return (
    <>
    <section className='bloguppersec'>
    <Navbar/>
    <Bloghome/>
    </section>
    </>
  )
}

export default Bloguppersec