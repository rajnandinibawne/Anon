// import React from 'react'

import React, { useState } from "react";
import style from './Sidebar.module.css'
import { Link } from "react-router-dom";
import { BestSellers } from "../../../Record";
const categories = [
    {
      id: 1,
      name: "Clothes",
      icon: "👗", // Placeholder icon
      options: [
        { name: "Shirt", count: 300 },
        { name: "Shorts & Jeans", count: 60 },
        { name: "Jacket", count: 50 },
        { name: "Dress & Frock", count: 87 },
      ],
    },
    {
      id: 2,
      name: "Footwear",
      icon: "👟",
      options: [
        { name: "Running Shoes", count: 100 },
        { name: "Sandals", count: 70 },
      ],
    },
    {
      id: 3,
      name: "Jewellery",
      icon: "💍",
      options: [
        { name: "Earrings", count: 50 },
        { name: "Necklaces", count: 80 },
      ],
    },
    {
        id: 4,
        name: "Perfume",
        icon: "🧴",
        options: [
          { name: "Clothes", count: 150 },
          { name: "Deodrant", count: 40 },
        ],
      },
      {
        id: 5,
        name: "Cosmetics",
        icon: "💅",
        options: [
          { name: "Shampoo", count: 45 },
          { name: "Face Wash", count: 80 },
          {name: "Body Lotion", count:52},
        ],
      },
      {
        id: 6,
        name: "Glasses",
        icon: "👓 ",
        options: [
          { name: "SunGlasses", count: 150 },
          { name: "Style", count: 71 },
          { name: "Frames", count: 88 },
          { name: "LensKart", count: 96 },
        ],
      },
      {
        id: 7,
        name: "bags",
        icon: "👜",
        options: [
          { name: "Purse", count: 60 },
          { name: "School Bag", count: 80 },
          { name: "Pockets", count: 30 },
        ],
      },
  ];
 

const Sidebar = () => {
     const [expandedCategory, setExpandedCategory] = useState(null);
    
      const toggleCategory = (id) => {
        setExpandedCategory(expandedCategory === id ? null : id);
      };
  return (
    <div className={style.mainside}>
      <div className={style.sidebar}>
        <div className={style.side_category}>
          <h1>Categories</h1>
          <div className={style.category_list}>
            {categories.map((category) => (
              <div key={category.id} className={style.category}>
                <div
                  className={style.category_name}
                  onClick={() => toggleCategory(category.id)}>
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                  <button className={style.plus_btn}>
                    {expandedCategory === category.id ? "-" : "+"}
                  </button>
                </div>
                {expandedCategory === category.id && (
                  <div className={style.subcategories}>
                    <hr />
                    {category.options.map((option, index) => (
                        
                      <div key={index} className={style.option}>
                        
                        <span>{option.name}</span>
                        <span>{option.count}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={style.side_bottom}>
            <h2>Best Sellers</h2>
            {BestSellers.map((item) => (
              
            <div className={style.card_BestSellers} key={item.id}>
              <Link to={`/product/${item.id}`} className={style.card_link} >
              <div className={style.prod_pic}><img src={item.image}  className={style.prod_pic} /></div>
              <div className={style.prod_info}>
                <h4 className={style.prod_title}>{item.title}</h4>
                <p className={style.prod_subtitle}>{item.stars}</p>
                <div className={style.prod_price}>
                  <p className={style.realprice}>{item.realprice}</p>
                  <del className={style.fakeprice}>{item.fakeprice}</del>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
