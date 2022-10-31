import React from 'react'
import cal from "../../assets/cal.png"
import globe from "../../assets/globe.png"
import hat from "../../assets/hat.png"
// import call from "../../assets/call.png"
const AboutDoc = () => {
  return (
<section className="aboutanita">
<div>
<div className="adleft">
    <span className='aboutanitahead'>
        About Anita
    </span>
    <span className='infoanita'>
    Dr. Anita Shyam is a well-known women’s sexual health expert. She has obtained her MBBS and DGO degrees from Netaji Subhash Chandra Bose Medical College. <b>Show More</b>
    
    </span>
<span className='allabdoc' >
<span><img src={cal} alt="" /> <span>8+ years of experience</span> 
</span>
<span><img src={globe} alt="" /> <span>Language known English, Tamil, Hindi</span> 
</span>
<span><img src={hat} alt="" /> <span>MBBS, MD (Psychiatry)</span> 
</span>
<span><img src={cal} alt="" /> <span>Available on chat, live, and voice</span>

</span>














</span>
</div>
<div className="adright">
<div className="adcard">
<img src="" alt="" />
<span className='anisays'>"Sexual health encompasses a plethora of sexual problems. The stigmas associated with it limit people from seeking help.I urge people to educate themselves about intimacy-related issues and seek holistic treatment, which involves a combination of both medical and psychological approaches."</span>

<span className='drANIta'>Dr.Anita Shyam</span>



</div>


</div>






</div>

    
</section>  )
}

export default AboutDoc