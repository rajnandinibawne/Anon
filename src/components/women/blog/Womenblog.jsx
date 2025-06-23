import React, { useEffect, useState } from 'react'
import style from './Womenblog.module.css'
import  Blog1 from '/images/Women/mainBlog4.jpg'
import Blog2 from '/images/Women/blog-3.jpg'
import Blog3 from '/images/Women/blog-2.jpg'
import { WomenBlog } from '../../../Record'
const Womenblog = () => {
  const Blogs = [Blog1, Blog2,Blog3];
  const [currentImageIndex , setCurrentImageIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex+1) % Blogs.length);
    }, 5000);
    return() => clearInterval(interval);
  },[Blogs.length]);
  return (
    <div className={style.Women_blog}>
        <h2>Latest Articles from our Blog</h2>
        <div className={style.main_blog_women}>
          <div className={style.women_left_blog}>
            <img src={Blogs[currentImageIndex]} alt='Blog image' className={`${style.pic_left_blog} ${style.Blog1}`}  />
            <img src={Blogs[(currentImageIndex+1)% Blogs.length]} alt='Blog image' className={`${style.pic_left_blog} ${style.Blog2}`}  />
           </div>
          <div className={style.women_right_blog}>
            {WomenBlog.map((item) => (
              <div className={style.blog_card} key={item.id}>
                <div ><img src={item.image} alt='Pic' className={style.img_blog}/>
                  
                </div>
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
