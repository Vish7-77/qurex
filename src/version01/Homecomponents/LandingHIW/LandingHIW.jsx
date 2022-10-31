import React from 'react'
import cursor from "../../../assets/cursor.png"
import chatt from "../../../assets/chatt.png"
import rx from "../../../assets/rx.png"
const LandingHIW = () => {
  return (
   <section className="hiw">

<section className="inhiw">


<div className="upperhiw">
    <span className='upperhiwone'>How It Works</span>
    <span className='upperhiwtwo'>Cure your sexual issues in 3 easy steps</span>
</div>

<div className="bottomhiw">
<div className="hiwcard">
<img src={cursor} alt="" />
<span className='hiwcardheading'>Choose your own sexologist
</span>
<span className='hiwcardsubheading'>
Let us help you choose your sexologist or choose your own sexologist There are many variations of passages of Lorem Ipsum available 
</span>
</div>
<div className="hiwcard">
<img src={chatt} alt="" />
<span className='hiwcardheading'>Consult your sexologist
</span>
<span className='hiwcardsubheading'>
Consult your sexologist from privacy of your home sexologist There are many variations of passages of Lorem Ipsum available 
</span>
</div>
<div className="hiwcard">
<img src={rx} alt="" />
<span className='hiwcardheading'>Follow a personalized treatment 
</span>
<span className='hiwcardsubheading'>
Consult your sexologist from privacy of your home sexologist There are many variations of passages of Lorem Ipsum available 
</span>
</div>


</div>

</section>




   </section>
  )
}

export default LandingHIW