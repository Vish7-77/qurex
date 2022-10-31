import React,{useEffect} from 'react'
import {Link} from "react-router-dom"


import regisleftpic from "../../assets/regisleftpic.jpg"
const NewReg = () => {
    const func=()=>{
        document.getElementById('header').style.display="none"
        document.getElementById('footer').style.display="none"
     }
     
     
     
     useEffect(() => {
      func()
     }, [])
  return (
   <section className="newref">
<img src={regisleftpic} alt="" />
<section className="newregright">

<div className="innregr">
<span  className='upinreg'>
<span className='logintxt'>Register here</span>
<span className='logonwlcm'>Welcome! Please enter your details.</span>

</span>



<span className="numlog">

    
<span className='moblogin'>Full Name</span>
<input type="text" placeholder='Please enter your name' />
</span>
<span className="numlog">

    
<span className='moblogin'>Full Name</span>
<input type="text" placeholder='Please enter your name' />
</span>
<span className="numlog">

    
<span className='moblogin'>City</span>
<input type="text" placeholder='Please enter your city' />
</span>
<span className="numlog">

    
<span className='moblogin'>Email-id</span>
<input type="email" placeholder='Please enter your city' />
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
        
        <span className='regifnot'>I agree to Qurex's <Link className='bbline' to="">Terms of use</Link> & <Link className='bbline' to="">Privacy Policy.</Link></span>
        


  





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






</section>


   </section>
  )
}

export default NewReg