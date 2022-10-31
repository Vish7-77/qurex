import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import loginlef from "../../assets/loginlef.jpg"

const SignupMob = () => {
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
<div className="hfull infsright">
    <span className="innerinfsr">
        
<span className='logintxt'>Sign Up</span>
<span className='logonwlcm'>Please enter the OTP sent to your mobile number</span>
    </span>


<span className="numlog">

    
<span className='moblogin'>Mobile Number</span>
<input type="text" placeholder='Please enter your mobile number' />
</span>
<button className="useotp">
   Login
</button>

<span className='regifnot'>Already have an account? <Link className='bbline' to="">login here.</Link></span>





</div>


<div className="darkgraybox">
<span className='discbox'>
<span className="leftdisc"><img src="" alt="" />
<span className='disc'>Disclaimer Message</span>
</span>
<span className="rightdisc">
X</span>
</span>
<ul>
    <li>

    Your first name is not visible to Qurex support members but just the doctor 
    </li>

    <li>
    Your personal details are mandatory for a doctor consultation as per government policy, please be assured ‘we respect your privacy’
    </li>

    <li>
    Email is required for important treatment related conversation
    </li>





</ul>


</div>


</div>
  </section>
  )
}

export default SignupMob