import React, {useState} from 'react'
import "./Blogs.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
function ResetPassword() {
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
    <section className='ResetPassword'>
        <div className='container'>
        <div className="loginImg text-center pt-3">
            <img src="Images\LOGO_final-1.png" alt="logo" />
          </div>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Reset Password</h5>
                            <form>
                                <div className='form-group'>
                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <input type={type} id="loginPassword" class="form-control password" placeholder="Enter your Password"/>
                                    </div>
                                    <div className="toggleye col" onClick={handleToggle}><Icon icon={icon} size={15}/></div>
                                    <div className="col-12 mb-2">
                                        <input type={type} id="loginPassword1" class="form-control password" placeholder="Confirm Password"/>
                                    </div>
                                    <div className="toggleye col" onClick={handleToggle}><Icon icon={icon} size={15}/></div>
                                </div>
                                </div>
                                <button type='submit' className='btn-button reset-button'>Reset</button>
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

export default ResetPassword