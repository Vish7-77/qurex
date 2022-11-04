import React,{useEffect} from 'react'
import trtmnt01 from "../../../assets/trtmnt01.png"


const LandingHero = () => {
    const func=()=>{
        document.getElementById('header').style.display="flex"
        document.getElementById('footer').style.display="flex"
     }
     
     
     
     useEffect(() => {
      func()
     }, [])
  return (
   <section className="trthero">

<div className="upperth">

</div>
<div className="midth">
<div className="innermidth">
    <div className="aboutmidth">
   <span className='ab001' >
   <span className='whatis'>What is</span>
          <span className='ercdys'> 
Erectile Dysfunction?</span>
   </span>
   <span className='edinfo'>
   ED is defined as the inability to sustain an erection sufficient for sexual intercourse. The condition can affect anyone at any age.
   </span>

<button className='mmin consultlh'>
    Consult now
</button>

    </div>
    <img src={trtmnt01} alt="" />
</div>


</div>
<div className="lowth">



<div className="inlowth">
<div className="inlowth01">
    <span className='perc'>49%</span>
    <span className='percinfo'>men over the age of 40 experience erectile dysfunction.</span>
</div>
<div className="inlowth01">
    <span className='perc'>91%</span>
    <span className='percinfo'>people are on wrong or ineffective treatment for them..</span>
</div>
<div className="inlowth01">
    <span className='perc'>57%</span>
    <span className='percinfo'>men with diabetes experience erectile dysfunction.</span>
</div>

</div>
</div>








   </section>
  )
}

export default LandingHero