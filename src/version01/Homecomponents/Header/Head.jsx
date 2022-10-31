import React from 'react'
import mainlogo from "../../../assets/mainlogo.svg"
import robosv from "../../../assets/robosv.svg"
import newsv from "../../../assets/newsv.svg"
import beat1 from "../../../assets/beat1.svg"
import { Link} from "react-router-dom"
import whatsapp from "../../../assets/whatsapp.svg"
const Head = () => {
  return (
   <section className="head">
<div className="inhead">
<div className="inheadleft">
  <Link to="/">
<img src={mainlogo} alt="" />
</Link>
<span><Link to="/treatment" >sexual issue we treat</Link></span>
<span><Link to="/doctor" >our sexologist</Link></span>
<span>sexual health guide </span>
<span>sex-ed (for kids)</span>



</div>


<div className="inheadright">
<div className="shi">
<img src={beat1} alt="" />
<span>SHI</span>
<img  className="shinew"  src={newsv} alt="" />


</div>
<img src={robosv} alt="" />
<button className='loginhome'>Login </button>


</div>


</div>
<img className='whatsapp' src={whatsapp} alt="" />



   </section>
  )
}

export default Head