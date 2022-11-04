import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import loginlef from "../../assets/loginlef.jpg"
const FirstSign = () => {



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
<span className='logonwlcm'>Please enter the OTP sent to your mobile number</span>
    </span>
<span className='links'>
<Link to="/auth" className='bblineb' >Use OTP</Link>
<Link to="/passauth" >Use Password</Link>
</span>

<span className="numlog">

    
<span className='moblogin'>Mobile Number</span>
<input type="text" placeholder='Please enter your mobile number' />
</span>
<button className="useotp">
   Login
</button>

<span className='regifnot'>Don’t have an account? <Link className='bbline' to="/newreg">Register here.</Link></span>




</div>




</div>
  </section>
  )
}

export default FirstSign