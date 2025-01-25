// import React from 'react'
import { FaStar } from "react-icons/fa";
import React, { useState } from "react";
import style from './Sidebar.module.css'
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
  const BestSellers = [
    {
            id:1,
            image:"/images/products/2.jpg",
            title:"Baby Fabric Shoes..",
            Stars: <FaStar className={style.star_icon} />,
            price : "$45.00",
            fakeprice : "$12.00"
    },
        {
            id:2,
            image:"/images/products/3.jpg",
            title:"Men's Hoodies and T-Shirts",
            Stars: <FaStar className={style.star_icon} />,
            price : "$45.00",
            fakeprice : "$18.00"
    },
    {
        id:3,
        image:"/images/shirt1.jpg",
        title:"Girl's T-shirts",
        Stars: <FaStar className={style.star_icon} />,
        price : "$35.00",
        fakeprice : "$22.00"
    },
    {
        id:4,
        image:"/images/products/4.jpg",
        title:"Jewellery",
        Stars: <FaStar className={style.star_icon} />,
        price : "$95.00",
        fakeprice : "$77.00"
    }
]


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
                  onClick={() => toggleCategory(category.id)}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                  <button className={style.plus_btn}>
                    {expandedCategory === category.id ? "−" : "+"}
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
              <div className={style.prod_pic}><img src={item.image}  className={style.prod_pic} /></div>
              <div className={style.prod_info}>
                <h4 className={style.prod_title}>{item.title}</h4>
                <p className={style.prod_subtitle}>{item.Stars}</p>
                <div className={style.prod_price}>
                  <p className={style.realprice}>{item.price}</p>
                  <del className={style.fakeprice}>{item.fakeprice}</del>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
