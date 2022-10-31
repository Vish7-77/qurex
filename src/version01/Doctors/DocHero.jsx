import React from 'react'
import playblu from "../../assets/playblu.png"
import dranita from "../../assets/dranita.png"
const DocHero = () => {
  return (
   <section className="dochero">
<div className="indochero">
<div className="leftdh">
    <img src={dranita} alt="" />
</div>
<div className="rightdh">
    <div className="innerrdh">

    <span className='docsec'><span className='docsname'>Dr.Anita Shyam</span><span className='docspec'>Gynecologist</span></span>
<span className='expert'>Expert in Obstetrician, Gynaecologist, Infertility</span>
<span className='cases'>100+ Cases Solved</span>
<span className='rate'>₹ 1500 Consulting Fee</span>
<span className='discount'>( 30% Discount for Qurex User)</span>
<div className="docsbtn">
<button className='watch'><img src={playblu} alt="" /> Watch Video</button>
<button className='consultdoc'>Consult Now</button>

</div>





    </div>

</div>



</div>





   </section>
  )
}

export default DocHero