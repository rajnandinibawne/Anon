import React from 'react'
import style from './NewProducts.module.css'

import { Link } from 'react-router-dom'
import { Newproducts } from '../../Record'




const NewProducts = () => {
  return (
    <div  className={style.main_new}>
        <h1>New Products</h1>
        <hr />
        <div className={style.new_prod}>
            {Newproducts.map((item) => (
                
                <div className={style.new_cards} key={item.id}>
                    <Link to={`/product/${item.id}`} className={style.Single_link}>
                    <div className={style.pic_container}><img
                src={item.image}
                alt={item.product}
                className={`${style.new_pic} ${style.image}`}
              />
              <img
                src={item.image2}
                alt={item.product}
                className={`${style.new_pic} ${style.image2}`}
              />
              <div> {item.buttons} </div>
              </div>
                    <h4 className={style.new_product}>{item.title}</h4>
                    <p className={style.new_subtitle}>{item.subtitle}</p>
                    <h4 className={style.new_stars}>{item.stars}</h4>
                    <div className={style.new_price}>
                        <p className={style.new_realprice}><b>{item.realprice}</b></p>
                        <del>{item.fakeprice}</del>
                    </div>
                    </Link>
                </div>
                
            ))}
            
        </div>
    </div>
  )
}

export default NewProducts
