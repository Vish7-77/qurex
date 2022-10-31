import React from 'react'
import Footer from './version01/Homecomponents/Footer/Footer'
import Head from './version01/Homecomponents/Header/Head'
import HomeR from './Allroutes/Home/HomeR'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Treat from './Allroutes/Treatment/Treat'
import Doctors from './Allroutes/Doctor/Doctors'
import Authentication from './Allroutes/auth/Authentication'
import FirstSign from './version01/Auth/FirstSign'
import OtpSignup from './version01/Auth/OtpSignup'
import PassSign from './version01/Auth/PassSign'
import SignupMob from './version01/Auth/SignupMob'
import SubmitOtp from './version01/Auth/SubmitOtp'
import NewReg from './version01/Auth/NewReg'
const Routing = () => {
  return (
<BrowserRouter>
<Head/>
<Routes>
<Route path="/" element={<HomeR/>}/>
<Route path="/treatment" element={<Treat/>}/>
<Route path="/doctor" element={<Doctors/>}/>
<Route path="/auth" element={<FirstSign/>}/>
<Route path="/otpauth" element={<OtpSignup/>}/>
<Route path="/passauth" element={<PassSign/>}/>
<Route path="/signupmob" element={<SignupMob/>}/>
<Route path="/submitotp" element={<SubmitOtp/>}/>
<Route path="/newreg" element={<NewReg/>}/>






</Routes>

<Footer/>






</BrowserRouter>
  )
}

export default Routing