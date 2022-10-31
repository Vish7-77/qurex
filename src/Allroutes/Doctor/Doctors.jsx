import React from 'react'
import AboutDoc from '../../version01/Doctors/AboutDoc'
import Docblogs from '../../version01/Doctors/Docblogs'
import DocHero from '../../version01/Doctors/DocHero'
import HRF from '../../version01/Doctors/HRF'
import Feedback from "../../version01/Homecomponents/LandingFeedb/Feedback"
const Doctors = () => {
  return (
   <>

   <DocHero/>
   <AboutDoc/>
        <HRF/>
   <Docblogs/>
   <Feedback/>

   </>

  )
}

export default Doctors