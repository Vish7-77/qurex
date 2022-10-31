import React from 'react'
import erc from "../../assets/erc.png"
import ls from "../../assets/ls.png"
import pm from "../../assets/pm.png"
const HRF = () => {
  return (
   <section className="hrf">
<div className="inhrf">
<div className='top'>
    <span>Highly Recommended For</span>
</div>
<div className="bottom">
<div className="siwtcard">
<img src={ls} alt="" />
<span className='erct'>Low Sex Drive</span>
  <span className='ercttxt'>People with hypogonadism may have low sex drives.</span>
</div>
<div className="siwtcard">
<img src={pm} alt="" />
<span className=' erct'>Premature ejaculation</span>
  <span className='ercttxt'>It is defined by difficulty getting and keeping an erection.</span>
</div>
<div className="siwtcard">
<img src={erc} alt="" />
<span className='erct'>Erectile Dysfunction</span>
  <span className='ercttxt'>It is defined by difficulty getting and keeping an erection.</span>
</div>


</div>



</div>
</section>
  )
}

export default HRF