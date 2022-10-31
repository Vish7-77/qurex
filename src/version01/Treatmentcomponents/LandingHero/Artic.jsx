import React from 'react'

import rdocart01 from "../../../assets/rdocart01.png"
import rdocart02 from "../../../assets/rdocart02.png"
import yellowstar from "../../../assets/yellowstar.png"


const Artic = () => {
  return (
    <section className="sed">
    <div className="dff uppersed">
    <span className='uppersedheading'>Top Articles Should Know</span>
    <button className='butto'>View All</button>
    </div>
     <div className="bottomsed">
    <div className="sedcards">
      <img src={rdocart01} alt="" />
      <div className="sedcardsinfo">
      <span className='ratings'>
        <img src={yellowstar} alt="" />
        <span> 4.2</span>
      </span>
      <span className='sedcardsheading'>Boost your Testosterone and Sex Drive Naturally..</span>
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
      <img src={rdocart02} alt="" />
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

export default Artic