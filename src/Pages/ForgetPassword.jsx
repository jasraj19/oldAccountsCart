import React from 'react'
import "./Blogs.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Link } from "react-router-dom";
function ForgetPassword() {
  return (
    <>
    <section className='ForgetPassword'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 mb-3'>
                <div className="loginImg text-center pt-3">
                    <img src="Images\LOGO_final-1.png" alt="logo" />
                </div>
                </div>
            </div>
        </div>
        <div className='container'>
        <div className='card'>
            <div className='row'>
                <div className='col mx-5'>
                    <div className='ForgetPassword-form'>
                        <form>
                            <div className='row'>
                                <div className='col my-2'>
                                   <label className='ForgetPassword-label'>Email</label>    
                                    <div className='ForgetPassword-input'>
                                        <input type='text' className='ForgetPassword-input-text form-control' placeholder='Email' />
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                    <div className='ForgetPassword-btn'>
                                        <Link to="/ResetPassword">
                                        <button type='reset' className='ForgetPassword-btn-reset'>Send Reset Code</button>
                                        </Link>
                                    </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ForgetPassword