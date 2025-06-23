import React from 'react'
import style from './Shortslide.module.css'
import { Link } from 'react-router-dom';
import { shortitem } from '../../Record';

const Shortslide = () => {

  return (
    <div className={style.SliderContainer}>
    {/* <Slider {...settings}> */}
      {shortitem.map((item) => (
        <div key={item.id} className={style.cards}>
          <Link   to={`/product/${item.id}`} 
          className={style.cards_slide}>
          <div className={style.style_pic}><img src={item.image} className={style.style_pic} alt={item.title}/></div>
          <div className={style.info}>
          <h3 className={style.cardtitle}>{item.title}</h3>
          <p className={style.card_subtitle}>{item.subtitle}</p>
          </div>
          <p className={style.card_stock}>{item.stock}</p>
          </Link>
        </div>
      ))}
    {/* </Slider> */}
  </div>
  )
}

export default Shortslide
