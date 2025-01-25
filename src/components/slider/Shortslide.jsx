import React from 'react'
import style from './Shortslide.module.css'
// import Slider from "react-slick";

const shortitem = [
  { id: 1, image: " /images/shortslider/first.jpg", title:"Dress & Frocks", subtitle : "Show All" ,stock:"12"},
  { id: 2,image: " /images/shortslider/2.jpg", title:"Winter Wear", subtitle : "Show All",stock:"96" },
  { id: 3,image: " /images/shortslider/3.jpg", title:"Sunglasses", subtitle : "Show All" ,stock:"56"},
  { id: 4,image: " /images/shortslider/4.jpg", title:"Sarees ", subtitle : "Show All" ,stock:"21"},
  { id: 5,image: " /images/shortslider/tshirt.avif", title:"T-Shirts", subtitle : "Show All",stock:"121" },
  { id: 6,image: "/images/shortslider/4.jpg", title:"Jeans", subtitle : "Show All" ,stock:"78"},
  { id: 7,image: " /images/products/jewellery-1.jpg", title:"Makeup Accesories", subtitle : "Show All" ,stock:"9"},
  { id: 8, image: "/images/shoes1.png",title:"Shoes", subtitle : "Show All",stock:"10" },
  { id: 9, image: " /images/shortslider/jacket.jpg",title:"Jackets", subtitle : "Show All",stock:"4" },
  // { id: 10,image: " image", title:"Shampoo", subtitle : "Show All",stock:"89" },
];

const Shortslide = () => {

 

  return (
    <div className={style.SliderContainer}>
    {/* <Slider {...settings}> */}
      {shortitem.map((item) => (
        <div key={item.id} className={style.cards}>
          <div className={style.style_pic}><img src={item.image} className={style.style_pic} alt={item.title}/></div>
          <div className={style.info}>
          <h3 className={style.cardtitle}>{item.title}</h3>
          <p className={style.card_subtitle}>{item.subtitle}</p>
          </div>
          <p className={style.card_stock}>{item.stock}</p>
        </div>
      ))}
    {/* </Slider> */}
  </div>
  )
}

export default Shortslide
