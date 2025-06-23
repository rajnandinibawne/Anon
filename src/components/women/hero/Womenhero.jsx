import React from 'react'
import style from './Womenhero.module.css'
import { BiSolidOffer } from "react-icons/bi";

const Womenhero = () => {
  return (
    <div className={style.women_hero}>
      <div className={style.women_bg}>
      {/* <div className={style.hersec}>
        <img src='/images/Women/herosecBG.png' alt='pic'  className={style.left_image}/>
        </div> */}
        <div className={style.left_hero}>
            <div className={style.left_up}>
                <h1 className={style.trend_title}>Trendy Collections</h1>
                <p>Grab Your Favourite Collections here!</p>
                <button className={style.hero_btn}> Shop Now</button>
                <div className={style.views}>
                    <div className={style.one_view}>
                    <h1>100K+</h1>
                    <h5>Happy Customer</h5>
                </div>
                <div className={style.one_view}>
                    <h1>1.6 M+</h1>
                    <h5>Monthly Traffic</h5>
                </div>
                </div>

            </div>
            <div className={style.left_down}></div>
        </div>
        <div className={style.hero_bg}>
        <img src='/images/Women/women1.webp' alt='pic'  className={style.girl_image}/>
        </div>
        <div className={style.right_hero}>
            <div className={style.right_up}>
                <h1>14K+</h1>
                <h3>WorldWide products</h3>
                <p>Sale per year</p>
            </div>
            <div className={style.offer_text}>
                <h1>Special Offer</h1>
                <h2>Fashion Sale</h2>
                <button className={style.right_btn}>< a href='/newoffer' className={style.right_btn}><BiSolidOffer  className={style.icon}/>Best Offer</a></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Womenhero
