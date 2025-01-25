import React from 'react'
import style from './AdMen.module.css'
// import {first}  as "/images/mens/mainAdjpg"
// import { ADmen } from '../../../Record'
const AdMen = () => {
  return (
    <div className={style.men_AD}>
      
        <div className={style.photos_AD} >
          <img src='/images/mens/mens1.jpg' alt='Trending' className={style.posters}  />
          <div className={style.sec_AD}>
          <div className={style.up_AD}>
          <img src='/images/mens/mainAd.jpg' alt='Trending' className={style.sec_ADposters} />
          <img src='/images/mens/electronics.jpg' alt="{Trending}" className={style.sec_ADposters} />
          </div>
          <div className={style.down_AD}>
          <img src='/images/mens/jewellery.jpg' alt='{Trending} 'className={style.down_posters} />
          </div>
          </div>
        </div>
     
    </div>
  )
}

export default AdMen
