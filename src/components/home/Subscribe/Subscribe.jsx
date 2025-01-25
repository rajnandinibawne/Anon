import React, { useState,useEffect} from 'react'
import style from './Subscribe.module.css'
import { ImCross } from "react-icons/im";
import newsletter from '/images/newsletter.png'
const Subscribe = () => {
    const [isVisible, setIsVisible] = useState(true);
    // useEffect(() => {
    //     // Check if the subscribe popup has already been shown
    //     const isPopupShown = localStorage.getItem('subscribePopupShown');
    //     if (!isPopupShown) {
    //       setIsVisible(true); // Show the popup if it hasn't been shown before
    //     }
    //   }, []);
    
      const handleClose = () => {
        setIsVisible(false); // Hide the popup
        // localStorage.setItem('subscribePopupShown', 'true'); // Save the state in localStorage
      };
    
      if (!isVisible) return null; // Don't render if not visible
    
  return (
    <div className={style.front}>
    {isVisible && (
    <div className={style.subscribe}>
      <div className={style.image}>
            <img src={newsletter} alt='image' className={style.image} />
      </div>
      <div className={style.subscribe_info}>
        <h3>Subscribe Newsletter</h3>
        <p>Subscribe the <b>Anon</b> to get latest products and discount update.</p>
        <input placeholder='Email Address' className={style.email_input}  type='email'/>
        <button   onClick={handleClose} className={style.subscribe_btn}>SUBSCRIBE</button>
      </div>
      <div className="">
        <button  onClick={handleClose}
        className={style.sub_cut}><ImCross /></button>
      </div>
    </div>
  )
}

</div>
  )
}

export default Subscribe
