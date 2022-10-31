import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import search from "../../../assets/search.png"
import arr from "../../../assets/arr.png"
import virus from "../../../assets/virus.png"

const LandingLM = () => {
  return (
  <section className="learnmore">
<div className="inlm">

<div className="upperlm">
    <span>
    Learn more about your condition
    </span>
</div>
<div className="lmcards">

<Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       <SwiperSlide>

<div className="lmcard">

    <img src={search} alt="" />
<span className="lmcardheading">Causes</span>
<span className="lmcardinfo">
Health conditions such as peripheral artery disease, atherosclerosis, diabetes, hypertension, obesity, etc, can cause reduced blood flow to the penis due to artery narrowing. Furthermore, injury to the spinal cord or radiation therapy can disrupt or harm nerves present in the penis. 
</span>

<span className='lmcardlm'>
    <span>Learn More</span>
    <img src={arr} alt="" />
</span>






</div>


        
       </SwiperSlide>
       <SwiperSlide>

<div className="lmcard">

    <img src={virus} alt="" />
<span className="lmcardheading">Symptoms</span>
<span className="lmcardinfo">
<span>The symptoms of erectile dysfunction include:</span>
<ul>
    <li>
    Difficulty in getting an erection
    </li>
    <li>
    Getting a partial erection, not firm/hard enough for vaginal penetration
    </li>
    <li>
    Reduced libido or sexual desire
    </li>
    <li>


    Increased anxiety and stress associated with sexual intercourse
    </li>
</ul>
</span>

<span className='lmcardlm'>
    <span>Learn More</span>
    <img src={arr} alt="" />
</span>






</div>


        
       </SwiperSlide>
       <SwiperSlide>

<div className="lmcard">

    <img src={search} alt="" />
<span className="lmcardheading">Causes</span>
<span className="lmcardinfo">
Health conditions such as peripheral artery disease, atherosclerosis, diabetes, hypertension, obesity, etc, can cause reduced blood flow to the penis due to artery narrowing. Furthermore, injury to the spinal cord or radiation therapy can disrupt or harm nerves present in the penis. 
</span>

<span className='lmcardlm'>
    <span>Learn More</span>
    <img src={arr} alt="" />
</span>






</div>


        
       </SwiperSlide>
      </Swiper>






</div>


</div>




  </section>
  )
}

export default LandingLM