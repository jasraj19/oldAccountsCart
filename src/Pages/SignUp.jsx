import React from "react";
import "./Blogs.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Link } from "react-router-dom";
import { DatePicker } from "dropdown-date-picker";
function SignUp() {
  return (
    <>
      <section className="SignUp">
        <div className="loginImg text-center pt-3">
          <img src="Images\LOGO_final-1.png" alt="logo" />
        </div>
        <div className="container">
          <div className="card signUpCard mt-4">
            <p className="mt-3 text-center">Create a new account</p>
            <p className="mb-0 text-center">It's easy and quick.</p>
            <hr />
            <div className="Signupform container">
              <form action="post">
                <div className="row my-2">
                  <div className="col-sm">
                    <input type="text" className="form-control" placeholder="First name" />
                  </div>
                  <div className="col-sm">
                    <input type="text" className="form-control" placeholder="Middle name" />
                  </div>
                  <div className="col-sm">
                    <input type="text" className="form-control" placeholder="Last name" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 my-2">
                    <input type="text" className="form-control" placeholder="Enter your Mobile Number or Email Address"/>
                  </div>
                <div className="col my-2">
                  <input type="password" className="form-control" placeholder="Enter your New Password"/>
                </div>
                <div className="col my-2">
                  <input type="password" className="form-control" placeholder="Confirm your New Password"/>
                </div>
                </div>
                <div className="row">
                    <div className="col-4">
                      <label htmlFor="" className="mb-1 birth">Enter Your Birth Date</label>
                      <DatePicker onDateUpdate={(updatedDate) => {console.log(updatedDate);}}/>
                    </div>
                  </div>
                  <div className="row radio align-item-center">
                    <div className="col-4 mt-2">
                    <label className="Gender" htmlFor="">Gender</label>
                    <br />
                    <input type="radio" id="Male" name="gender" value="Male"/>
                    <label for="html" className="ms-1">Male</label>
                    <br />
                    <input type="radio" id="Female" name="gender" value="Female" />
                    <label for="html" className="ms-1">Female</label>
                    <br />
                    <input type="radio" id="Custom" name="gender" value="Custom"/>
                    <label for="html" className="ms-1">Custom</label>
                    </div>
                  </div>
                    <div className="d-flex">
                    <div>
                  <button className="btn-button btn-signUp">Sign Up</button>
                </div>
                <div className="su text-center my-3">
                  <label htmlFor="">Already Have an Account.</label>
                  <br />
                  <Link to="/Login">Login</Link>
                </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
