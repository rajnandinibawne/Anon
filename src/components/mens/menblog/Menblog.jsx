import React from 'react'
import style from './Menblog.module.css'
import { MenBlog } from '../../../Record'
const Menblog = () => {
  return (
    <div className={style.men_blog}>  
      {MenBlog.map((item) => (
        <div key={item.id} className={style.cards}>
        <img src={item.image} alt='pic' className={style.men_blog_pic} />
        </div>
      ))}
    </div>
  )
}

export default Menblog
