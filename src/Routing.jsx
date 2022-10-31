import React from 'react'
import Footer from './version01/Homecomponents/Footer/Footer'
import Head from './version01/Homecomponents/Header/Head'
import HomeR from './Allroutes/Home/HomeR'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Treat from './Allroutes/Treatment/Treat'
import Doctors from './Allroutes/Doctor/Doctors'
const Routing = () => {
  return (
<BrowserRouter>
<Head/>
<Routes>
<Route path="/" element={<HomeR/>}/>
<Route path="/treatment" element={<Treat/>}/>
<Route path="/doctor" element={<Doctors/>}/>




</Routes>

<Footer/>






</BrowserRouter>
  )
}

export default Routing