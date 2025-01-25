import React from 'react'
import style from './NewProducts.module.css'
import jacket1 from '../../images/newproducts/jacket1.jpg'
import jacket2 from '../../images/newproducts/jacket2.jpg'
import shirt1 from '../../images/newproducts/shirt1.jpg'
import shirt2 from '../../images/newproducts/shirt2.png'
import jacket3 from '../../images/newproducts/jacket3.jpg'
import jacket4 from '../../images/newproducts/jacket4.jpg'
import { FaRegHeart,FaEye ,FaArrowRightArrowLeft,FaBagShopping  } from "react-icons/fa6";
const Newproducts = [
    {
        id: 1,
        image1 : jacket1,
        image2: jacket2,
        buttons: <div className={style.new_hide_btn}>
        <button className={style.hide_btn}><FaRegHeart /></button>
        <button className={style.hide_btn}><FaEye /></button>
        <button className={style.hide_btn}><FaArrowRightArrowLeft /></button>
        <button className={style.hide_btn}><FaBagShopping /></button>
       
    </div>,
        product:"Jacket",
        subtitle : "mens Winter leathers Jackets",
        stars: "⭐⭐⭐⭐☆",
        realprice : "$48.00",
        fakeprice : "75.20"
    },
    {
        id: 2,
        image1 : shirt1,
        image2: shirt2,
        buttons: <div className={style.new_hide_btn}>
        <button className={style.hide_btn}><FaRegHeart /></button>
        <button className={style.hide_btn}><FaEye /></button>
        <button className={style.hide_btn}><FaArrowRightArrowLeft /></button>
        <button className={style.hide_btn}><FaBagShopping /></button>
       
    </div>,
        product:"Shirt",
        subtitle : "Cotton Shirt",
        stars: "⭐⭐⭐⭐☆",
        realprice : "$45.00",
        fakeprice : "$30.20"
    },
    {
        id: 3,
        image1 : jacket3,
        image2: jacket4,
        buttons: <div className={style.new_hide_btn}>
        <button className={style.hide_btn}><FaRegHeart /></button>
        <button className={style.hide_btn}><FaEye /></button>
        <button className={style.hide_btn}><FaArrowRightArrowLeft /></button>
        <button className={style.hide_btn}><FaBagShopping /></button>
       
    </div>,
        product:"jacket",
        subtitle : "Full zip jacket",
        stars: "⭐⭐⭐⭐☆",
        realprice : "$58.00",
        fakeprice : "45.20"
    },
    {
        id: 4,
        image1 : "/images/skirt2.jpg",
        image2: "/images/skirt1.jpg",
        buttons: <div className={style.new_hide_btn}>
        <button className={style.hide_btn}><FaRegHeart /></button>
        <button className={style.hide_btn}><FaEye /></button>
        <button className={style.hide_btn}><FaArrowRightArrowLeft /></button>
        <button className={style.hide_btn}><FaBagShopping /></button>
       
      </div>,
        product:"SKIRT",
        subtitle : "Black midi Skirt",
        stars: "⭐⭐⭐⭐☆",
        realprice : "$28.00",
        fakeprice : "$25.20"
    },
    {
        id: 5,
        image1 : "/images/shoes1.png",
        image2: "/images/shoes2.jpg",
        buttons: <div className={style.new_hide_btn}>
            <button className={style.hide_btn}><FaRegHeart /></button>
            <button className={style.hide_btn}><FaEye /></button>
            <button className={style.hide_btn}><FaArrowRightArrowLeft /></button>
            <button className={style.hide_btn}><FaBagShopping /></button>
           
        </div>,
        product:"Shoes",
        subtitle : "Casual Men Shoes",
        stars: "⭐⭐⭐⭐☆",
        realprice : "$88.00",
        fakeprice : "$75.0"
    },
    {
        id: 6,
        image1 : "/images/watch1.jpg",
        image2: "/images/watch2.png",
        buttons: <div className={style.new_hide_btn}>
        <button className={style.hide_btn}><FaRegHeart /></button>
        <button className={style.hide_btn}><FaEye /></button>
        <button className={style.hide_btn}><FaArrowRightArrowLeft /></button>
        <button className={style.hide_btn}><FaBagShopping /></button>
       
    </div>,
        product:"WATCHES",
        subtitle : "Hand Watch",
        stars: "⭐⭐⭐⭐☆",
        realprice : "$98.00",
        fakeprice : "$75.20"
    },
    {
        id: 7,
        image1 : "/images/party1.jpg",
        image2: "/images/party2.jpg",
        buttons: <div className={style.new_hide_btn}>
        <button className={style.hide_btn}><FaRegHeart /></button>
        <button className={style.hide_btn}><FaEye /></button>
        <button className={style.hide_btn}><FaArrowRightArrowLeft /></button>
        <button className={style.hide_btn}><FaBagShopping /></button>
       
    </div>,
        product:"PARTY WEAR",
        subtitle : "Women Party Wear Shoes",
        stars: "⭐⭐⭐⭐☆",
        realprice : "$48.00",
        fakeprice : "35.20"
    },
    // {
    //     id: 8,
    //     image1 : "",
    //     image2: "",
    //     product:"Sports",
    //     subtitle : "SweatShorts",
    //     stars: "⭐⭐⭐⭐☆",
    //     realprice : "$48.00",
    //     fakeprice : "75.20"
    // },
    // {
    //     id: 9,
    //     image1 : "",
    //     image2: "",
    //     product:"Sports",
    //     subtitle : "SweatShorts",
    //     stars: "⭐⭐⭐⭐☆",
    //     realprice : "$48.00",
    //     fakeprice : "75.20"
    // },
    // {
    //     id: 10,
    //     image1 : "",
    //     image2: "",
    //     product:"Sports",
    //     subtitle : "SweatShorts",
    //     stars: "",
    //     realprice : "$48.00",
    //     fakeprice : "75.20"
    // },

]



const NewProducts = () => {
  return (
    <div  className={style.main_new}>
        <h1>New Products</h1>
        <hr />
        <div className={style.new_prod}>
            {Newproducts.map((item) => (
                <div className={style.new_cards}>
                    <div className={style.pic_container}><img
                src={item.image1}
                alt={item.product}
                className={`${style.new_pic} ${style.image1}`}
              />
              <img
                src={item.image2}
                alt={item.product}
                className={`${style.new_pic} ${style.image2}`}
              />
              <div> {item.buttons} </div>
              </div>
                    <h4 className={style.new_product}>{item.product}</h4>
                    <p className={style.new_subtitle}>{item.subtitle}</p>
                    <h4 className={style.new_stars}>{item.stars}</h4>
                    <div className={style.new_price}>
                        <p className={style.new_realprice}><b>{item.realprice}</b></p>
                        <del>{item.fakeprice}</del>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NewProducts
