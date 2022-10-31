import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import loginlef from "../../assets/loginlef.jpg"
const OtpSignup = () => {

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
<div className="infsright">
    <span className="innerinfsr">
        
<span className='logintxt'>Login</span>
<span className='logonwlcm'>Welcome Back! Login to Qurex using OTP or password.</span>
    </span>
<span className='links'>
<Link to="/auth" className='bblineb'>Use OTP</Link>
<Link to="/" >Use Password</Link>
</span>

<span className="numlog">

    
<span className='moblogin'>Mobile Number</span>
<span className="boxin">
<input type="text"  />
<input type="text"  />
<input type="text"  />
<input type="text"  />

</span>
</span>
<button className="useotp">
  Validate
</button>

<span className='regifnot'>Didn’t receive the OTP?<Link className='bbline' to=""> Resend</Link></span>




</div>




</div>
  </section>
  )
}

export default OtpSignup