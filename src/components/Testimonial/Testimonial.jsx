import React from 'react'
import style from './Testimonial.module.css'
import prof_pic from '../../images/pic_prof.webp'
import ctabanner from '../../images/cta-banner.jpg'
import { NavLink } from 'react-router-dom'
import { LuShip } from "react-icons/lu";
import { IoRocketOutline,IoCallOutline,IoArrowUndoOutline   } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";

const services =[
  {
    id: 1,
    icon:<LuShip className={style.service_icon}/>,
    title:"Worldwide Delivery",
    subtitle : "For Order Over $100",
  },
  {
    id: 2,
    icon:<IoRocketOutline  className={style.service_icon} />,
    title:"Next Day Delivery",
    subtitle : "UK Orders Only",
  },
  {
    id: 3,
    icon:<IoCallOutline  className={style.service_icon}/>,
    title:"Best Online Support",
    subtitle : "Hours : 8AM-10PM",
  },
  {
    id: 4,
    icon:<IoArrowUndoOutline  className={style.service_icon}/>,
    title:"Return Policy",
    subtitle : "Easy & Free Return",
  },
  {
    id: 5,
    icon:<GiTakeMyMoney  className={style.service_icon}/>,
    title:"30% Money Back",
    subtitle : "For Order Over $100",
  },
]

const Testimonial = () => {
  return (
    <div className={style.whole_test}>
        <div className={style.first_testi}>
            <h3>Testimonial</h3>
            <hr/>
      <div className={style.first_test}>
        <div className={style.pic_prof} ><img src={prof_pic} alt='alan doe' className={style.prof_pic}/></div>
        <div className={style.first_name}>ALAN DOE</div>
        <div className={style.subname}>CEO & Founder Invision</div>
        <h1 className={style.nothing}>"</h1>
        <p className={style.lorem_test}>Lorem ipsum dolor sit amet consectetur  blanditiis posisquam in!</p>
      </div>
      </div>
      <div className={style.sec_test} style={{ backgroundImage: `url(${ctabanner})` }}>
        <div className={style.center_test}>
            <div className={style.discount}>25% DISCOUNT</div>
            <h1>Summer Collection</h1>
            <p>Starting at $10</p>
            <button className={style.test_btn}>Shop Now</button>
        </div>
      </div>
      <div className={style.first_testi}>
            <h3>Our Services</h3>
            <hr/>
      <div className={style.third_test}>
        {services.map((item) => (
          <div className={style.service_card}>
          <div className={style.servie_icon}>{item.icon}</div>
          <div className={style.service_info}>
            <div className={style.service_title}>{item.title}</div>
            <div className={style.service_subtitle}>{item.subtitle}</div>
          </div>
        </div>
        ))}
        
      </div>
      </div>
    </div>
  )
}

export default Testimonial
