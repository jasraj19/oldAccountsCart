import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer class="page-footer pb-0 mb-0 font-small">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3 col-sm-12 f-h">
              <div className="f-img ">
                <img src="Images\LOGO_final-1.png" alt="" />
              </div>
              <p className="px-5">
                We are a social media marketing company that offers affordable
                social media management to help businesses market more effective
                on social media.
              </p>
              <p>
                &copy; 2020 <span>Accounts Cart</span>
              </p>
            </div>
            <hr class="clearfix w-100 d-md-none pb-1" />

            <div class="col-md-2 col-sm-4 col-4 mb-md-0 mb-sm-0 mb-3 sidelist">
              <h5 class="text-uppercase text-left">SIDEMAP</h5>

              <ul class="list-unstyled text-left">
                <li>
                  <Link to="">About us</Link>
                </li>
                <li>
                  <Link to="">Services</Link>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div class="col-md-2 col-sm-4 col-4 mb-md-0 mb-sm-0 mb-3 sidelist">
              <h5 class="text-uppercase text-left">PRODUCT</h5>

              <ul class="list-unstyled text-left">
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="">Features</Link>
                </li>
                <li>
                  <Link to="">Customers</Link>
                </li>
                <li>
                  <Link to="">Feedback</Link>
                </li>
              </ul>
            </div>

            <div class="col-md-2 col-sm-4 col-4 mb-md-0 mb-sm-0 mb-3 sidelist">
              <h5 class="text-uppercase text-left">HELP</h5>

              <ul class="list-unstyled text-left">
                <li>
                  <Link to="/">Getting Started</Link>
                </li>
                <li>
                  <Link to="/">Network Status</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/">Refferal Program</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-copyright d-flex justify-content-end text-center pt-1 pb-1">
          <div className="f-c pt-2">
            <h5>Follow Us</h5>
          </div>
          <div className="social-links pt-1 pb-1">
            <Link to="/">
              <i class="fa-brands fa-facebook-f text-white fa-xl"></i>
            </Link>
            <Link to="/">
              <i class="fa-brands fa-instagram text-white fa-xl"></i>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
