import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
import erc from "../../../assets/erc.png"
import ls from "../../../assets/ls.png"
import pm from "../../../assets/pm.png"
import { Pagination } from "swiper";
const SIWT = () => {
  return (
   <section className="swit">

<div className="switup">
<div className="switup01">
<span>Sexual Issues We Treat</span>
  <button className='switbtnva'>
    View All
  </button>
</div>
<div className="switup02">
<button className='switbtn01'> Male</button>
<button className='switbtn02'> Female</button>
<button className='switbtn03'> Couple</button>


</div>
</div>
<div className="carous">
<Swiper
   spaceBetween={230}
   slidesPerView={4}
       
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
<div className="siwtcard">
<img src={erc} alt="" />
<span className='erct'>Erectile Dysfunction</span>
  <span className='ercttxt'>It is defined by difficulty getting and keeping an erection.</span>
</div>

        </SwiperSlide>
        <SwiperSlide>
<div className="siwtcard">
<img src={ls} alt="" />
<span className='erct'>Low Sex Drive</span>
  <span className='ercttxt'>People with hypogonadism may have low sex drives.</span>
</div>

        </SwiperSlide>
        <SwiperSlide>
<div className="siwtcard">
<img src={pm} alt="" />
<span className=' erct'>Premature ejaculation</span>
  <span className='ercttxt'>It is defined by difficulty getting and keeping an erection.</span>
</div>

        </SwiperSlide>
        <SwiperSlide>
<div className="siwtcard">
<img src={erc} alt="" />
<span className='erct'>Erectile Dysfunction</span>
  <span className='ercttxt'>It is defined by difficulty getting and keeping an erection.</span>
</div>

        </SwiperSlide>
        <SwiperSlide>
<div className="siwtcard">
<img src={ls} alt="" />
<span className='erct'>Erectile Dysfunction</span>
  <span className='ercttxt'>It is defined by difficulty getting and keeping an erection.</span>
</div>

        </SwiperSlide>
        <SwiperSlide>
<div className="siwtcard">
<img src={pm} alt="" />
<span className='erct'>Erectile Dysfunction</span>
  <span className='ercttxt'>It is defined by difficulty getting and keeping an erection.</span>
</div>

        </SwiperSlide>
        <SwiperSlide>
<div className="siwtcard">
<img src={erc} alt="" />
<span className='erct'>Erectile Dysfunction</span>
  <span className='ercttxt'>It is defined by difficulty getting and keeping an erection.</span>
</div>

        </SwiperSlide>
        <SwiperSlide>
<div className="siwtcard">
<img src={ls} alt="" />
<span className='erct'>Erectile Dysfunction</span>
  <span className='ercttxt'>It is defined by difficulty getting and keeping an erection.</span>
</div>

        </SwiperSlide> 
       
        <SwiperSlide>
<div className="siwtcard">
<img src={ls} alt="" />
<span className='erct'>Erectile Dysfunction</span>
  <span className='ercttxt'>It is defined by difficulty getting and keeping an erection.</span>
</div>

        </SwiperSlide> 
       
      </Swiper>


</div>
<div className="switdown">


</div>

    
   </section>
  )
}

export default SIWT






/////////////////

