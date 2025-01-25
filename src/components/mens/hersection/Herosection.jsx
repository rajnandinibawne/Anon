import React from 'react'
import style from './Herosection.module.css'

const MenHero = [
    {
        id:1,
        image  : "/images/mens/hero1.jpg",
        topic:"Season Sale",
        title: "MEN'S FASHION ",
        offer: "35%-60% OFF",
    },
    {
        id:2,
        image  : "/images/mens/hero2.jpg",
        topic:"Discover latest Collection",
        title: "Clothing",
        offer: "Clothing | FootWear | Accesories",
    },
]

const Herosection = () => {
  return (
    <div className={style.hero_name} >
      {MenHero.map((item) => (
        <div className={style.men_hero} key={item.id}
        style={{ backgroundImage: `url(${item.image})` }}>
            <div className={style.hero_info}>
                <h3 className={style.hero_topic}>{item.topic}</h3>
                <h1 className={style.hero_title }>{item.title}</h1>
                <p className={style.hero_subtitle}>{item.offer}</p>
            </div>
            <div className={style.hero_buttons}>
                <button className={style.hero_btn}>Shop Now</button>
                <button className={style.hero_btn} > Explore More</button>
            </div>

        </div>
        
      ))}
    </div>
  )
}

export default Herosection
