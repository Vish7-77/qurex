import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Consult.css"

import {Link} from "react-router-dom"
const Consult = () => {
  
    const [value, onChange] = useState(new Date());
  
  return (
<section className='consultsec'>
<div className="innerconsult">
    

    <div className="conleft">
   <div className="inconleft">
   <span className="slot">
 Slot Available On Today
 </span>
 <span className='gryline'></span>
<div className="timings">
<div className="topt">
    <button>9:00 AM</button>
    <button>9:30 AM</button>
    <button>10:00 AM</button>
</div>
<div className="bottomt">

<button>9:00 AM</button>
    <button>9:30 AM</button>
    <button>10:00 AM</button>

</div>




</div>

   </div>
   <div className="mobnavdw">
  <span className='mobnav01'>Back</span>
  <button className='mobnav02'>
    Book now
  </button>
   </div>

        
    </div>



    <div className="conright">


    <Calendar  onChange={onChange} value={value} />

<div className="bitdiv">
<Link to="/doctor">
<button className='back'>
Back
</button>
</Link>

<Link to="/confirm-pay">
<button className='book'>
Book now
</button>
</Link>
</div>

    </div>
    
    
    
    
    </div>    





</section>
  )
}

export default Consult