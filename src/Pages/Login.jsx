import React, {useState} from "react";
import "./Blogs.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import { Link } from "react-router-dom";

function Login() {

  const [type, setType]=useState('password');
  const [icon, setIcon]=useState(eyeOff);

  const handleToggle=()=>{    
    if(type==='password'){
      setIcon(eye);      
      setType('text');
    }
    else{
      setIcon(eyeOff);     
      setType('password');
    }
  }

  return (
    <>
      <section className="loginPage">

        <div className="loginPageInner container-fluid">
          <div className="loginImg text-center pt-3">
            <img src="Images\LOGO_final-1.png" alt="logo" />
          </div>
          <div className="loginBox container pb-1 mb-4">
            <div class="SignUpCard pb-3">
              <div className="loginTitle fs-6 text-center">
                <p className="fs-5 mt-3">Sign in to Accounts Cart</p>
              </div>
              <form action="post">

                <div>
                  <label class="form-label" for="loginName">Email or Username</label>
                  <input type="email" id="loginName" class="form-control mb-3" placeholder="Enter your Email Address"/>
                </div>

                <label class="form-label" for="loginPassword">Password</label>
                <div className="row">
                  <div className="col-12">
                  <input type={type} id="loginPassword" class="form-control password" placeholder="Enter your Password"/>
                  </div>
                  <div className="toggleye col" onClick={handleToggle}><Icon icon={icon} size={15}/></div>
                </div>

                <br />

                <div className="d-flex justify-content-between">
                  <div class="form-check mb-3 mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="loginCheck" />
                    <label class="form-check-label" for="loginCheck">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <div class="col-md-6 d-flex justify-content-end forgotPass">
                    <Link to="/ForgetPassword">Forgot password?</Link>
                  </div>
                </div>

                <button className="btn-login btn-button">Login</button>
                <div className="su text-center mb-2">
                  <label htmlFor="">New To Accounts Cart?</label>
                  <Link to="/SignUp"> Create an Account</Link>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
