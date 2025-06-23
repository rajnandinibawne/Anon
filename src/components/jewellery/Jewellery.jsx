import React from 'react'
import style from './Jewellery.module.css'
import { jewellery } from '../Data'
import { Link } from 'react-router-dom'
import BannerJewellery from '/images/Jewellery/Banner1.png'
const Jewellery = () => {
  return (
    <div className={style.jewellery}>
      <div className={style.hero_jewellery}>
        <img src={BannerJewellery} alt="Hero Page" className={style.hero} />
      </div>
      <h2>Jewellery</h2>
      <div className={style.whole_card}>
      
              {jewellery.map((item) => (
                <div className={style.extra_men_card}  key={item.id} >
                  
                <Link to={`/product/${item.id}`} className={style.women_card_link} >
                  <div ><img src={item.image} alt='PIC' className={style.image} /></div>
                  <div className={style.card_info}>
                  <div className={style.card_title}>{item.title}</div>
                  <div className={style.card_subtitle}>{item.subtitle}</div>
                  <div className={style.card_star}>{item.stars}</div>
                  <div className={style.card_price}>
                    <div className={style.real_price}>{item.realprice}</div>
                    <del className={style.fake_price}>{item.fakeprice}</del>
                  </div>
                  </div>
                  </Link>
              </div>
              ))}
              </div>
    </div>
  )
}

export default Jewellery








