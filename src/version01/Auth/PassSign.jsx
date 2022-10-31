import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import loginlef from "../../assets/loginlef.jpg"

const PassSign = () => {
    const func=()=>{
        document.getElementById('header').style.display="none"
        document.getElementById('footer').style.display="none"
     }
     
     
     
     useEffect(() => {
      func()
     }, [])
  return (
    <section className='firstSign'>
    <img src={loginlef} alt="" />
    <div className="fsright">
    <div className="hmore infsright">
        <span className="innerinfsr">
            
    <span className='logintxt'>Login</span>
    <span className='logonwlcm'>Please enter the OTP sent to your mobile number</span>
        </span>
    <span className='links'>
    <Link to="/auth"  >Use OTP</Link>
    <Link to="/otpauth" className='bblineb' >Use Password</Link>
    </span>
    
    <span className="numlog">
    
        
    <span className='moblogin'>Mobile Number</span>
    <input type="text" placeholder='Please enter your mobile number' />
    </span>
    <span className="numlog">
    
        
<span className="innumlog">    <span className='moblogin'>Password</span> <Link className='reallink' to="" > Forgot password?</Link></span>
    <input type="password" placeholder='Enter your password' />
    </span>

    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
Remember me
  </label>
</div>
    <button className="useotp">
       Login
    </button>
    
    <span className='regifnot'>Don’t have an account? <Link className='bbline' to="">Register here.</Link></span>
    
    
    
    
    </div>
    
    
    
    
    </div>
      </section>
  )
}

export default PassSign