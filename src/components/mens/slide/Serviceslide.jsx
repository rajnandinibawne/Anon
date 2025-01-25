import React from 'react'
import style from './Serviceslide.module.css'

import {menslide} from '../../../Record'


const Serviceslide = () => {
  return (
    <div className={style.Serviceslide}>
      {menslide.map((item) => (
        <div key={item.id} className={style.ser_cards}>
                  <div className={style.mens_pic}>{item.icon}</div>
                  <div className={style.men_info}>
                  <h3 className={style.mens_cardtitle}>{item.title}</h3>
                  <p className={style.mens_card_subtitle}>{item.subtitle}</p>
                  </div>
                  {/* <p className={style.card_stock}>{item.stock}</p> */}
                </div>
      ))}
    </div>
  )
}

export default Serviceslide
