import React from 'react'
import prnch01 from "../../../assets/prnch01.png"
import prnch02 from "../../../assets/prnch02.png"
import yellowstar from "../../../assets/yellowstar.png"
const LandingSE = () => {
  return (
   <section className="sed">
<div className="uppersed">
<span className='uppersedheading'>Sex-Ed Courses For Kids</span>
<span className='uppersesubdheading'>First time in India in animated story format</span>
</div>
 <div className="bottomsed">
<div className="sedcards">
  <img src={prnch01} alt="" />
  <div className="sedcardsinfo">
  <span className='ratings'>
    <img src={yellowstar} alt="" />
    <span> 4.2</span>
  </span>
  <span className='sedcardsheading'>How to Quit Looking at Pornography and Break..</span>
  <span className='sedcardssubheading'>Oriental Sexual Knowledge: The importance of Love and its interrelati..</span>
  <span className='auandread'>
    <span className='author'>By Henry King</span>
  <span className='read'>  124 read this</span>
  </span>

<span className='graylinesed'></span>
<span className='price'>
<span className='disprice'>
<span className='realprice'>₹ 1099</span>
  <span className='crossprice'>₹ 1099</span>
</span>

<span className='buynow'>Buy now {">"}</span>

</span>
  </div>
</div>

<div className="sedcards">
  <img src={prnch02} alt="" />
  <div className="sedcardsinfo">
  <span className='ratings'>
    <img src={yellowstar} alt="" />
    <span> 4.2</span>
  </span>
  <span className='sedcardsheading'>How to Quit Looking at Pornography and Break..</span>
  <span className='sedcardssubheading'>Oriental Sexual Knowledge: The importance of Love and its interrelati..</span>
  <span className='auandread'>
    <span className='author'>By Henry King</span>
  <span className='read'>  124 read this</span>
  </span>

<span className='graylinesed'></span>
<span className='price'>
<span className='disprice'>
<span className='realprice'>₹ 1099</span>
  <span className='crossprice'>₹ 1099</span>
</span>

<span className='buynow'>Buy now {">"}</span>

</span>
  </div>
</div>


 </div>


   </section>
  )
}

export default LandingSE