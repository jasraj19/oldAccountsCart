import React, {useState} from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

function Searchbar() {
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="Service">
            <h1>12+ Years Of Exceptional Service</h1>
            <p>
              Quick And Secure Marketplace To Buy Email And Social Media
              Accounts
            </p>
            <form action="">
              <div class="searchBar">
                <input
                  id="searchQueryInput"
                  type="text"
                  name="searchQueryInput"
                  placeholder="Search Accounts"
                  onChange={e => setQuery(e.target.value)}
                />
                <button
                  id="searchQuerySubmit"
                  type="submit"
                  name="searchQuerySubmit"
                >
                  <div className="icon-search">
                    <i class="fa-solid fa-magnifying-glass fs-4 mt-2"></i>
                  </div>
                </button>
              </div>
            </form>
          </div>
          <div className="girl_img">
          <img src="Images\Untitled-6 1.png" alt="girl_img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
