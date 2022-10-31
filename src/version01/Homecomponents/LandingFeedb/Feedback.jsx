import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import dbqu from "../../../assets/dbqu.png"
import client01 from "../../../assets/client01.png"

import "swiper/css";
import "swiper/css/pagination";




import { Pagination } from "swiper";
const Feedback = () => {
 
  return (
   <section className="feedback">
<div className="infeedb">
<div className="upperindiv">
<span>Patient’s Feedback</span>
<button>View All</button>
</div>
<div className="bottomdiv">
<Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
        >
<div className="feedbcards">
<img src={dbqu} alt="" />
<div className="innercardfb">

<span className='headingfbcards'>Very helpful.</span>
<span className='infofb'>Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited</span>

<span className='grline'></span>
<div className="userfeed">
    <img src={client01} alt="" />

<span>
<span className='indhuja'>Indhuja</span>
<span className='location'>Chennai</span>

</span>
</div>
</div>




</div>

        </SwiperSlide>
       
        <SwiperSlide><div className="feedbcards">
<img src={dbqu} alt="" />
<div className="innercardfb">

<span className='headingfbcards'>Very helpful.</span>
<span className='infofb'>Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited</span>

<span className='grline'></span>
<div className="userfeed">
    <img src={client01} alt="" />

<span>
<span className='indhuja'>Indhuja</span>
<span className='location'>Chennai</span>

</span>
</div>
</div>




</div></SwiperSlide>
       
        <SwiperSlide><div className="feedbcards">
<img src={dbqu} alt="" />
<div className="innercardfb">

<span className='headingfbcards'>Very helpful.</span>
<span className='infofb'>Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited</span>

<span className='grline'></span>
<div className="userfeed">
    <img src={client01} alt="" />

<span>
<span className='indhuja'>Indhuja</span>
<span className='location'>Chennai</span>

</span>
</div>
</div>




</div></SwiperSlide> 
       
        <SwiperSlide><div className="feedbcards">
<img src={dbqu} alt="" />
<div className="innercardfb">

<span className='headingfbcards'>Very helpful.</span>
<span className='infofb'>Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited</span>

<span className='grline'></span>
<div className="userfeed">
    <img src={client01} alt="" />

<span>
<span className='indhuja'>Indhuja</span>
<span className='location'>Chennai</span>

</span>
</div>
</div>




</div></SwiperSlide>
      </Swiper>

</div>

</div>
   </section>
  )
}

export default Feedback