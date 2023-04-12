import React, { useEffect, useState } from "react";
import "./Blogs.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function SinglePost() {
  const [blogs, setBlogs] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const blogbyslug = async () => {
      try {
        const res = await axios.get(
          `https://bulkaccounts.com/api/blogs?slug=${slug}`
        );
        // console.log(res);
        if (res?.data) {
          setBlogs(res.data);
        } else {
          console.log("Blogs Not Found");
        }
      } catch (error) {
        console.log(error);
      }
    };
    blogbyslug();
  }, [slug]);

  return (
    <>
    <div className="postHead">
     <Navbar/>
    </div>
      <div className="singlePost container">
        <h1 className="text-center pt-5 fw-bold">{blogs && blogs.datas.data[0].title}</h1>
        <div className="d-flex justify-content-between pt-3">
        <h6>{blogs && blogs.datas.data[0].updated_at}</h6>
        <h6>{blogs && blogs.datas.data[0].created_at}</h6>
        </div>
        <div className="postImg pt-3 text-center">
        <img className="w-75 " src={`https://bulkaccounts.com/${blogs && blogs.datas.data[0].attachment.media_url}`} alt="no-img" />
        </div>
        <div className="blogPara pt-5 text-justify">
          <p>{blogs && blogs.datas.data[0].content}</p>
        </div>
        <div className="author">
          <h3 className="fst-italic text-center">About the Author</h3>
          <p className="fst-4 fst-italic text-center">Jasraj Singh</p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default SinglePost;
