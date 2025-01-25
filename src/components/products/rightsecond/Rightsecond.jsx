import React from 'react'
import style from './Rightsecond.module.css'
import DeadlineTimer from './DeadlineTimer'
import offer1 from '../../../images/offer1.jpg'
import offer2 from '../../../images/offer2.jpg'
const BigProducts = [
    {
        id: 1,
        image:offer1,
        stars:"⭐⭐⭐⭐☆",
        title:"SHAMPOO, CONDITIONER & FACEWASH PACKS",
        para : "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor",
        realprice : "$150.00",
        fakeprice : "$200.00",
        sold : "ALREADY SOLD :20",
        available : "AVAILABLE 40",
        deadline : "HURRY UP! OFFER ENDS IN:"
    },
    {
        id: 2,
        image: offer2,
        stars:"⭐⭐⭐⭐☆",
        title:"ROSE GOLD DIAMOND EARRING",
        para : "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor",
        realprice : "$1990.00",
        fakeprice : "$2000.00",
        sold : "ALREADY SOLD :15",
        available : "AVAILABLE 40",
        deadline : "HURRY UP! OFFER ENDS IN:"
    },
]

const Rightsecond = () => {
  return (
    <div id='#newoffer'>
    <div className={style.bigproducts} >
        {BigProducts.map((item) => (
            <div className={style.big_cardoffer} key={item.id}>
                {/* <div className={style.big_pic} style={{ backgroundImage: `url(${item.image})` }}></div> */}
                <img src={item.image} alt={item.title} className={style.big_pic} />

                <div className={style.big_info}>
                    <h3 className={style.stars}>{item.stars}</h3>
                    <h2 className={style.big_title}>{item.title}</h2>
                    {/* <div className={style.paras_lorem} >{item.para}</div> */}
                    <div className={style.big_price}>
                        <h3>{item.realprice}</h3>
                        <del>{item.fakeprice}</del>
                    </div>
                    <button className={style.Addtocart}>ADD TO CART</button>
                    <div className={style.big_stock}>
                        <p>{item.sold}</p>
                        <p>{item.available}</p>
                    </div>
                    <p className={style.big_deadline}>{item.deadline}</p>
                    <DeadlineTimer/>
                </div>
            </div>
        ))}
      
    </div>
    </div>
  )
}

export default Rightsecond
