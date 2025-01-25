import React from 'react'
import style from './Blogs.module.css'
import image1 from '../../images/blog-1.jpg'
import image2 from '../../images/blog-2.jpg'
import image3 from '../../images/blog-3.jpg'
import image4 from '../../images/blog-4.jpg'
const BlogItem = [
  {
    id:1,
    image:image1,
    title: "Fashion",
    Description: "Clothes Retail KPIs 2021 Guide for Clothes Executives",
    comment: "By Mr Admin / Apr 06, 2022",
  },
  {
    id:2,
    image:image2,
    title: "Shoes",
    Description: "EBT vendors : Claim Your Share of SNAP Online Revenue",
    comment: "By Mr Selsa / Dec 06, 2012",
  },
  {
    id:3,
    image:image3,
    title: "Wardrobe",
    Description: "Clothes Retail KPIs 2021 Guide for Clothes Executives",
    comment: "By Mr Robin / Jan 18, 2023",
  },
  {
    id:4,
    image:image4,
    title: "Shopping",
    Description: "Clothes Retail KPIs 2021 Guide for Clothes Executives",
    comment: "By Mr Pawar / May 06, 2020",
  },
]
const Blogs = () => {
  return (
    <div id='Blogs' className={style.Blogs}>
      {BlogItem.map((item) => (
        <div className={style.blog_card}>
            <div className={style.blog_pic} ><img src={item.image} alt='blog_image' className={style.blog_pic}/></div>
            <div className="">
              <p className={style.blog_title}>{item.title}</p>
              <h3 className={style.Description}>{item.Description}</h3>
              <p className={style.comment}>{item.comment}</p>
            </div>
        </div>
      ))}
      
    </div>
  )
}

export default Blogs
