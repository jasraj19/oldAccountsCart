import React, { useState } from "react";
import useFetch from "./useFetch";
import "./Blogs.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

function Posts() {
  const { data1 } = useFetch("https://bulkaccounts.com/api/blogs");

  const [data, setData] = useState(null);

  const [loading, setIsLoading] = useState(null);

  const [error, setError] = useState(null);

  const fetchBlogData = (currentPage) => {
    fetch("https://bulkaccounts.com/api/blogs?page=" + currentPage)

      .then((response) => {
        return response.json(data);
      })

      .then((data) => {
        setData(data);
      });

    data1 = null;
    return data;
  };

  const handlePageclick = async (data) => {
    setIsLoading(true);
    let currentPage = data.selected + 1;
    const fetchPost = await fetchBlogData(currentPage);
    setIsLoading(false);
  };

  let showData = "";
  if (data !== null) {
    showData = (
      <>
        <div className="blogCard">
          {data && data?.datas?.data.map(({ title, attachment, category, slug }) => (
          <Link to={'/SinglePost/'+ slug}>
            <div className="blogPost">
                <div className="row">
                  <div className="col-4">
                    <div className="post container px-5 pb-5">
                      <div className="card-img-top">
                        <img src={"https://bulkaccounts.com/" + attachment?.media_url} alt="instagram-img"/>
                      </div>
                      <div className="card cardBody">
                        <div class="postBody">
                          <div className="postBodyinner pt-4 px-4 d-flex justify-content-between">
                          <h5 class="postTitle">
                            {title}
                            </h5>
                          </div>
                          <div className="postBottom px-4 d-flex justify-content-between"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            ))}
        </div>
      </>
    );
  } 
  else {
    showData = (
      <>
        <div className="blogCard">
          {data1 &&
            data1?.datas?.data.map(({ title, attachment, category, slug }) => (
              <Link to={'/SinglePost/'+ slug}>
              <div className="blogPost">
                <div className="row">
                  <div className="col-4">
                    <div className="post container px-5 pb-5">
                      <div className="card-img-top">
                        <img src={"https://bulkaccounts.com/" + attachment?.media_url} alt="instagram-img"/>
                      </div>
                      <div className="card cardBody">
                        <div class="postBody">
                          <div className="postBodyinner pt-4 px-4 d-flex justify-content-between">
                            <h5 class="postTitle">
                            {title}
                            </h5>
                          </div>
                          <div className="postBottom px-4 d-flex justify-content-between"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            ))}
        </div> 
      </>
    );
  }

  return (
    <>
      <div className="showdata">
        {showData}
        <ReactPaginate
          previousLabel={"previous" }
          nextLabel={ "next" }
          onPageChange = {handlePageclick}
          breakLabel={ "..." }
          pageCount ={data1 && data1.max_pages}
          breakClassName={ "break-me" }
          containerClassName={ "pagination" }
          subContainerClassName={ "pages pagination" }
          activeClassName={ "active" } 
        /> 
      </div>
    </>
  );
}

export default Posts;
