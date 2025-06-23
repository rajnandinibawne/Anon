import React, { useState } from "react";
import style from './Products.module.css'
// import { FaStar } from "react-icons/fa";
import Rightsecond from "./rightsecond/Rightsecond";
import NewProducts from "../newproducts/NewProducts";
import Sidebar from "./sidebar/Sidebar";
import { Newarrival } from "../../Record";
import { Link } from "react-router-dom";


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
          {Newarrival.map((item) => (
            <div className={style.card_product} key={item.id}>
              {/* <Link to={`/product/${item.id}`} className={style.Single_link}> */}
              <Link to={`/product/${item.id}`} className={style.cards_product}>
              <div className={style.prod_pic}><img src={item.image} className={style.prod_pic}alt={item.title} /></div>
              <div className={style.prod_info}>
                <h3 className={style.prod_title}>{item.title}</h3>
                <p className={style.prod_subtitle}>{item.subtitle}</p>
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
        <div>
        <Rightsecond/>
        <NewProducts/>
        </div>
        
      </div>
      
    </div>
  );
};

export default Products;
