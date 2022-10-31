import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import hat from "../../../assets/hat.png"
import ourdoc01 from "../../../assets/ourdoc01.png"


const OurDocs = () => {
  return (
    <section className="ourdocs">
      <div className="innerourdocs">
        <div className="upourdoc">
          <span>Our Doctors</span>
          <button> View All</button>
        </div>
        <div className="btmdocs">
        <Swiper
        slidesPerView={3}
        spaceBetween={390}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         <SwiperSlide>

<div className="doccards">
<span className="gynotag">
Gynecologist
</span>
<div className="grydoccard">
    <img src={ourdoc01} alt="" />
    <span className="grydoccard01">
        <span className="documa">Dr. Uma Devi</span>
        <span className="docqua"> <img src={hat} alt="" /> <span>MBBS, MD (Psychiatry)</span></span>
    </span>
</div>
<span className="spec">Specialised in  <b>Sexual & Relationship Psychotherapy</b></span>
<span className="spec">Consults done : <b>20243</b></span>
<span className="spec">Experience : <b>8+ Years</b></span>
<span className="pricecon">
    <span className="fee">Consulting Fee</span>
    <span className="amt">₹ 399</span>

</span>
<span className="bottomdoccard">
    <span> View Profile</span>
    <button>Book Now</button>
</span>
</div>

         </SwiperSlide>
       
         <SwiperSlide>

<div className="doccards">
<span className="gynotag">
Gynecologist
</span>
<div className="grydoccard">
    <img src={ourdoc01} alt="" />
    <span className="grydoccard01">
        <span className="documa">Dr. Uma Devi</span>
        <span className="docqua"> <img src={hat} alt="" /> <span>MBBS, MD (Psychiatry)</span></span>
    </span>
</div>
<span className="spec">Specialised in  <b>Sexual & Relationship Psychotherapy</b></span>
<span className="spec">Consults done : <b>20243</b></span>
<span className="spec">Experience : <b>8+ Years</b></span>
<span className="pricecon">
    <span className="fee">Consulting Fee</span>
    <span className="amt">₹ 399</span>

</span>
<span className="bottomdoccard">
    <span> View Profile</span>
    <button>Book Now</button>
</span>
</div>

         </SwiperSlide>
         <SwiperSlide>

<div className="doccards">
<span className="gynotag">
Gynecologist
</span>
<div className="grydoccard">
    <img src={ourdoc01} alt="" />
    <span className="grydoccard01">
        <span className="documa">Dr. Uma Devi</span>
        <span className="docqua"> <img src={hat} alt="" /> <span>MBBS, MD (Psychiatry)</span></span>
    </span>
</div>
<span className="spec">Specialised in  <b>Sexual & Relationship Psychotherapy</b></span>
<span className="spec">Consults done : <b>20243</b></span>
<span className="spec">Experience : <b>8+ Years</b></span>
<span className="pricecon">
    <span className="fee">Consulting Fee</span>
    <span className="amt">₹ 399</span>

</span>
<span className="bottomdoccard">
    <span> View Profile</span>
    <button>Book Now</button>
</span>
</div>

         </SwiperSlide>
         <SwiperSlide>

<div className="doccards">
<span className="gynotag">
Gynecologist
</span>
<div className="grydoccard">
    <img src={ourdoc01} alt="" />
    <span className="grydoccard01">
        <span className="documa">Dr. Uma Devi</span>
        <span className="docqua"> <img src={hat} alt="" /> <span>MBBS, MD (Psychiatry)</span></span>
    </span>
</div>
<span className="spec">Specialised in  <b>Sexual & Relationship Psychotherapy</b></span>
<span className="spec">Consults done : <b>20243</b></span>
<span className="spec">Experience : <b>8+ Years</b></span>
<span className="pricecon">
    <span className="fee">Consulting Fee</span>
    <span className="amt">₹ 399</span>

</span>
<span className="bottomdoccard">
    <span> View Profile</span>
    <button>Book Now</button>
</span>
</div>

         </SwiperSlide>
       
      
      </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurDocs;
