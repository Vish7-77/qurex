import React from "react";
import footer01 from "../../../assets/footer01.png";
import footer2 from "../../../assets/footer2.png";
import footer3 from "../../../assets/footer3.png";
import footer4 from "../../../assets/footer4.png";
import footer5 from "../../../assets/footer5.png";
import footer6 from "../../../assets/footer6.png";
import andfoot from "../../../assets/andfoot.png";
import iosfoot from "../../../assets/iosfoot.png";
import {FiFacebook} from  "react-icons/fi"
import {TfiTwitter} from  "react-icons/tfi"
import {FaInstagram} from  "react-icons/fa"
import {FiYoutube} from  "react-icons/fi"



const Footer = () => {
  return (
    <section className="footer">
      <div className="leftfoot">
        <div className="onfoot">
          <img className="footer01" src={footer01} alt="" />
          <img className="footer2" src={footer2} alt="" />
          <img className="footer3" src={footer3} alt="" />
          <span className="footertxt">
            Discreetly consult top doctors for any sexual health issue.
          </span>
          <img className="footer4" src={footer4} alt="" />
          <img className="footer5" src={footer5} alt="" />
          <img className="footer6" src={footer6} alt="" />
        </div>
      </div>
      <div className="rightfoot">
        <div className="infootr">
          <div className="infoot01">
            <span className="ifH">Quick links</span>
            <span className="smallH"> Sexual issues treated</span>
            <span className="smallH">Our Sexologists</span>
            <span className="smallH">Blogs</span>
            <span className="smallH">FAQs</span>
            <span className="smallH">About Us</span>
            <img src={andfoot} alt="" />
            <div className="social">
<FiFacebook/>
<TfiTwitter/>
<FaInstagram/>
<FiYoutube/>

            </div>
          </div>
          
          <div className="infoot02">
          <span className="ifH">Policies</span>
            <span className="smallH">Refund & Cancellation policy
</span>
            <span className="smallH">Privacy Policy
</span>
            <span className="smallH">Terms of Use</span>
        
            <img src={iosfoot} alt="" />
          </div>
          <div className="infoot03">
          <span className="ifH">Contact</span>
            <span className="smallH">Contact@qurex.ai

</span>
            <span className="smallH">Chat with us

</span>
            <span className="smallH">Phone number</span>
        
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
