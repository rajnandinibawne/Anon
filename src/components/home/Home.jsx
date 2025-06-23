import React from 'react'

import HeroSection from '../herosection/Herosection'

import Shortslide from '../slider/Shortslide'
import Products from '../products/Products'
import Testimonial from '../Testimonial/Testimonial'
import style from '../blogs/Blogs.module.css'
import { BlogItem } from '../../Record'
// import Blogs from '../blogs/Blogs'


const Home = () => {
  return (
    <div>
 
      <HeroSection/>
      <Shortslide />
      <Products />
      <Testimonial/>
      <div id='Blogs' className={style.Blogs}>
            {BlogItem.map((item) => (
              <div className={style.blog_card} key={item.id}>
                <a href='/blogs' />
                  <div className={style.blog_pic} ><img src={item.image} alt='blog_image' className={style.blog_pic}/></div>
                  <div className="">
                    <p className={style.blog_title}>{item.title}</p>
                    <h3 className={style.Description}>{item.Description}</h3>
                    <p className={style.comment}>{item.comment}</p>
                  </div>
              </div>
            ))}
            
          </div>
      {/* <Notification/> */}
      {/* <Subscribe/> */}
    </div>
    
  )
}

export default Home
