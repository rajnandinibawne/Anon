import React from 'react'
import style from './Womenblog.module.css'
import  BigBlog from '/images/Women/mainBlog4.jpg'
import { WomenBlog } from '../../../Record'
const Womenblog = () => {
  return (
    <div className={style.Women_blog}>
        <h2>Latest Articles from our Blog</h2>
        <div className={style.main_blog_women}>
          <div className={style.women_left_blog}><img src={BigBlog} alt='Blog image' className={style.pic_left_blog}></img> </div>
          <div className={style.women_right_blog}>
            {WomenBlog.map((item) => (
              <div className={style.blog_card} key={item.id}>
                <div className={style.img_blog}><img src={item.image} alt='PIc' className={style.img_blog}/></div>
                <div className={style.blog_info}>
                  <h3>{item.heading}</h3>
                  <h4>{item.subtitle}</h4>
                  <p>{item.para}</p>
                </div>
                 </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Womenblog
