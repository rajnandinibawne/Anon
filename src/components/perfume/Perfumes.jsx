import React from 'react'
import { Perfume } from '../Data'
import style from './Perfumes.module.css'
import { Link } from 'react-router-dom'
const Perfumes = () => {
  return (
    <div > 
    {/* <h1>Perfume Section</h1> */}
       <div className={style.perfume_cat}>
              {Perfume.map((item) => (
                   <div className={style.perfume_card}  key={item.id} >
                  
                   <Link to={`/product/${item.id}`} className={style.women_card_link} >
                     <div className={style.image}><img src={item.image} alt='PIC' className={style.image} /></div>
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

export default Perfumes
