import React from 'react'
import Artboard from "../../../assets/Artboard.svg"
import dwar from "../../../assets/dwar.svg"
import silensv from "../../../assets/silensv.svg"
import varifsv from "../../../assets/varifsv.svg"
import locksv from "../../../assets/locksv.svg"
import priv from "../../../assets/privsv.svg"
import allgroup from "../../../assets/allgroup.png"
const LandingHome = () => {
  return (
   <section className="landinghome">
<div className="lh01">
<img src={Artboard} alt="" className="roundart" />
<img src={allgroup} alt="" className="alldocs" />





</div>
<div className="lh02">
<div className="inlh02">
<span className="lhheading">
Sexual Issues
are Normal
</span>

<span className="lhsubheading">
1 out of 5 Indians encounter sexual health issue in their lifetime
</span>
<div className="landingrightp">
<button className="consultlh">
Consult an expert


</button>
<img src={dwar} alt="" className="arr" />
<img src={priv} alt="" className="private" />
</div>
</div>
    
</div>
<div className="lh03">
<div className="inlh03">
<div className="inlj03one">
    <img src={locksv} alt="" />
<span className="locktxt">
Personalized treatment plans
</span>

</div>
<div className="inlj03one">
    <img src={varifsv} alt="" />
<span className='variftxt'>Backed by best sexologists from India & USA
</span>

</div>
<div className="inlj03one">
    <img src={silensv} alt="" />
<span className='silentxt'> 100% confidential
</span>

</div>




</div>


</div>





   </section>
  )
}

export default LandingHome