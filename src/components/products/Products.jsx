import React, { useState } from "react";
import style from './Products.module.css'
// import { FaStar } from "react-icons/fa";
import Rightsecond from "./rightsecond/Rightsecond";
import NewProducts from "../newproducts/NewProducts";
import Sidebar from "./sidebar/Sidebar";

const products = [
    {
        id:1,
        image:"/images/products/clothes-1.jpg",
        title:"Relaxed Short Full Slee..",
        subtitle: "Clothes",
        price : "$45.00",
        fakeprice : "$12.00"
    },
    {
        id:2,
        image:"/images/products/clothes-2.jpg",
        title:"Running and Trekking Shoes..",
        subtitle: "Sports",
        price : "$55.00",
        fakeprice : "$32.00"
    },
    {
        id:3,
        image:"/images/products/jacket-4.jpg",
        title:"Pocket Watch leather...",
        subtitle: "Accesories",
        price : "$50.00",
        fakeprice : "$34.00"
    },
    {
        id:4,
        image:"/images/products/clothes-3.jpg",
        title:"Girls Pink Embro Design..",
        subtitle: "Clothes",
        price : "$45.00",
        fakeprice : "$12.00"
    },
    {
        id:5,
        image:"/images/products/jewellery-1.jpg",
        title:"Earrings, Necklace and Jewellery...",
        subtitle: "Jewellery",
        price : "$98.00",
        fakeprice : "$82.00"
    },
    {
        id:6,
        image:"/images/products/jacket-1.jpg",
        title:"Relaxed Short Full Slee..",
        subtitle: "Clothes",
        price : "$45.00",
        fakeprice : "$12.00"
    },
    {
        id:7,
        image:"/images/products/clothes-4.jpg",
        title:"Women's Partywear ..",
        subtitle: "PartWear",
        price : "$45.00",
        fakeprice : "$12.00"
    },
    {
        id:8,
        image:"/images/products/jacket-2.jpg",
        title:"Relaxed Short Full Slee..",
        subtitle: "Clothes",
        price : "$45.00",
        fakeprice : "$12.00"
    },
    {
      id:5,
      image:"/images/products/jewellery-2.jpg",
      title:"Wedding Season and Jewellery...",
      subtitle: "Ring",
      price : "$88.00",
      fakeprice : "$92.00"
  },
]

const Products = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <div className={style.products_main}>
      {/* Sidebar */}
      <Sidebar/>
        
      {/* Product List */}
      <div className={style.right_side}>
        <h2>New Arrival</h2>
        <div className={style.twocard}>
        <div className={style.right_product}>
          {products.map((item) => (
            <div className={style.card_product} key={item.id}>
              <div className={style.prod_pic}><img src={item.image} className={style.prod_pic}alt={item.title} /></div>
              <div className={style.prod_info}>
                <h3 className={style.prod_title}>{item.title}</h3>
                <p className={style.prod_subtitle}>{item.subtitle}</p>
                <div className={style.prod_price}>
                  <p className={style.realprice}>{item.price}</p>
                  <del className={style.fakeprice}>{item.fakeprice}</del>
                </div>
              </div>
            </div>
          ))}
          
        </div>
        </div>
        <div>
        <Rightsecond/>
        <NewProducts/>
        </div>
        
      </div>
    </div>
  );
};

export default Products;
